import React, {FunctionComponent, useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Alert, Box, Button, Fade, FormGroup, Snackbar, TextField} from '@mui/material';
import {SnackbarCloseReason} from '@mui/material/Snackbar/Snackbar';
import {Freight} from 'api-gen';
import {useApiContext} from 'Context';
import {config} from 'environment';

export const Edit: FunctionComponent = () => {
    const [freight, setFreight] = useState<Freight>({});
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [showToast, setShowToast] = useState<boolean>(false);
    const {apiObjects} = useApiContext();
    const params = useParams<{ id?: string }>();
    const navigate = useNavigate();

    const validate = () => !!freight.start && !!freight.destination && freight.volume;

    const submit = () => {
        setSubmitted(true);
        if (validate()) {
            params.id
                ? apiObjects.freightController
                    .updateFreight({id: params.id as unknown as number, freightDto: freight})
                    .then(() => navigate(`/${config.contextPath}/overview`))
                : apiObjects.freightController
                    .createFreight({freightDto: freight})
                    .then(() => {
                        setFreight({});
                        setShowToast(true);
                    });
        }
    }

    const getFreightEntry = useCallback(() => {
        !!params.id && apiObjects.freightController
            .getFreight({id: params.id as unknown as number})
            .then(setFreight);
    }, [apiObjects, params.id]);

    const handleCloseToast = (_event: React.SyntheticEvent<any> | Event, reason: SnackbarCloseReason) => {
        if (reason === 'clickaway') {
            return;
        }

        setShowToast(false);
    }

    useEffect(() => {
        getFreightEntry();
    }, [getFreightEntry]);

    return (
        <Box p={2}>
            <Box my={2}>
                <FormGroup>
                    <TextField label='Von'
                               variant='standard'
                               value={freight.start || ''}
                               error={submitted && !!freight.start}
                               onChange={e => setFreight(freight => ({...freight, start: e.target.value}))}/>
                </FormGroup>
            </Box>
            <Box my={2}>
                <FormGroup>
                    <TextField label='Nach'
                               variant='standard'
                               value={freight.destination || ''}
                               error={submitted && !!freight.destination}
                               onChange={e => setFreight(freight => ({...freight, destination: e.target.value}))}/>
                </FormGroup>
            </Box>
            <Box my={2}>
                <FormGroup>
                    <TextField label='Volumen'
                               variant='standard'
                               type='number'
                               inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                               value={freight.volume || 0}
                               error={submitted && !!freight.volume}
                               onChange={e => setFreight(freight => ({...freight, volume: e.target.value as unknown as number}))}/>
                </FormGroup>
            </Box>
            <Button variant='contained' onClick={submit}>Speichern</Button>
            <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                      open={showToast}
                      TransitionComponent={Fade}
                      autoHideDuration={2000}
                      onClose={handleCloseToast}>
                <Alert severity='success'>Eintrag wurde gespeichert</Alert>
            </Snackbar>
        </Box>
    );
}
