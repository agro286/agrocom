import React, {FunctionComponent, useCallback, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Delete, Edit, Visibility} from '@mui/icons-material';
import {DataGrid} from '@mui/x-data-grid';
import {Freight} from 'api-gen';
import {useApiContext} from 'Context';
import {config} from "../../environment";

export const Overview: FunctionComponent = () => {
    const [freights, setFreights] = useState<Array<Freight>>([]);
    const [reloadFlag, setReloadFlag] = useState<number>(0);
    const {apiObjects} = useApiContext();
    const navigate = useNavigate();

    const reloadEntries = useCallback(() => {
        apiObjects.freightController
            .getAllFreightsUsingGET()
            .then(freightsDb => setFreights(freightsDb))
    }, [apiObjects, reloadFlag]);

    const deleteItem = (id: number) => {
        apiObjects.freightController
            .deleteFreightUsingDELETE({id})
            .then(() => setReloadFlag(Math.random()))
    };

    useEffect(() => {
        reloadEntries();
    }, [reloadEntries]);

    return (
        <div style={{height: '500px'}}>
            <DataGrid
                rows={freights}
                columns={[
                    {
                        field: 'id',
                        headerName: 'ID',
                        type: 'number',
                        width: 30
                    },
                    {
                        field: 'volume',
                        headerName: 'Volumen',
                        width: 100
                    },
                    {
                        field: 'start',
                        headerName: 'Von',
                        width: 200
                    },
                    {
                        field: 'destination',
                        headerName: 'Nach',
                        width: 200
                    },
                    {
                        field: 'creationDate',
                        headerName: 'Erstellt am',
                        type: 'dateTime',
                        width: 200
                    },
                    {
                        field: 'lastModified',
                        headerName: 'Letzte Änderung',
                        type: 'dateTime',
                        width: 200
                    },
                    {
                        field: 'action',
                        headerName: 'Aktionen',
                        renderCell: params => {
                            return !!params.row.id && (
                                <>
                                    <Edit onClick={() => navigate(`/${config.contextPath}/edit/${params.row.id}`)}/>
                                    <Visibility onClick={() => navigate(`/${config.contextPath}/detail/${params.row.id}`)}/>
                                    <Delete onClick={() => deleteItem(params.row.id)}/>
                                </>
                            );
                        }
                    }
                ]}/>
        </div>
    );
}
