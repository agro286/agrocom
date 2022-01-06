import React, {FunctionComponent} from 'react';
import {ApiContextProvider} from 'Context';
import {Body, Header} from "./ui/_Shared";

export const App: FunctionComponent = () => {
    return (
        <ApiContextProvider>
            <Header/>
            <Body/>
        </ApiContextProvider>
    );
}
