import React, {createContext, FunctionComponent, useContext, useMemo, useState} from 'react';
import {Configuration, FreightControllerImplApi} from 'api-gen';
import {config} from "../environment";

const ApiContext = createContext<ApiContextModel>({
    apiObjects: {
        freightController: new FreightControllerImplApi()
    }
});

interface ApiContextModel {
    apiObjects: ApiObjects;
}

interface ApiObjects {
    freightController: FreightControllerImplApi;
}

export const ApiContextProvider: FunctionComponent = ({children}) => {
    const [activeRequests, setActiveRequests] = useState<number>(0);
    const apiConfiguration = useMemo<Configuration>(() => new Configuration({
        basePath: `${config.basePath.replace(/\/+$/, '')}`,
        credentials: 'include',
        middleware: [{
            pre: async context => {
                setActiveRequests(c => c + 1);
                return context
            },
            post: async () => setActiveRequests(c => Math.max(c - 1, 0))
        }]
    }), [setActiveRequests]);

    const apiObjects: ApiObjects = useMemo(() => ({
        freightController: new FreightControllerImplApi(apiConfiguration)
    }), [apiConfiguration]);

    return (
        <ApiContext.Provider value={{apiObjects}}>{children}</ApiContext.Provider>
    )
}

export const useApiContext = () => {
    const context = useContext(ApiContext);
    if (context === undefined) {
        throw new Error('useApiContext must be used within a ApiContextProvider');
    }
    return context;
}
