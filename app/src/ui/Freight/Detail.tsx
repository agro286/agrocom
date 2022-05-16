import React, {FunctionComponent, useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Button, Typography} from '@mui/material';
import {useApiContext} from 'Context';
import {Freight} from 'api-gen';

export const Detail: FunctionComponent = () => {
    const [freight, setFreight] = useState<Freight>({});
    const {apiObjects} = useApiContext();
    let params = useParams<{ id?: string }>();
    const navigate = useNavigate();

    const getFreightEntry = useCallback(() => {
        apiObjects.freightController
            .getFreight({id: params.id as unknown as number})
            .then(setFreight);
    }, [apiObjects, params.id]);

    useEffect(() => {
        getFreightEntry();
    }, [getFreightEntry]);
    return !freight.id
        ? <Typography variant='h3'>Wird geladen</Typography>
        : <>
            <Typography variant='h3'>Fracht mit der id {freight.id}</Typography>
            <Typography variant='body1'>
                Erstellt am: {freight.creationDate?.toLocaleString()}<br/>
                Von: {freight.start}<br/>
                Nach: {freight.destination}<br/>
                Volumen: {freight.volume} Liter<br/>
                <Button variant='contained' onClick={() => navigate(-1)}>Zurück</Button>
            </Typography>
        </>;
}
