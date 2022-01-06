import React, {FunctionComponent} from 'react';
import {Outlet} from 'react-router-dom';
import {Container, Theme} from '@mui/material';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(2, 3),
        marginBottom: theme.spacing(8.5),
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto'
    }
}))

export const Body: FunctionComponent = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <Container>
                <Outlet/>
            </Container>
        </main>
    );
}
