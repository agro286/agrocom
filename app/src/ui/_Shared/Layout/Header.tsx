import React, {FunctionComponent} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {AppBar, Link, Theme, Toolbar, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {routes} from 'const';
import logo from 'assets/logo.svg';

const useStyles = makeStyles((theme: Theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    logo: {
        width: '50px',
        pointerEvents: 'none'
    },
    title: {
        flex: 1,
        marginLeft: theme.spacing(2)
    },
    navigation: {
        flex: 2
    },
    navigationList: {
        listStyle: 'none',
        '& li': {
            display: 'inline-block',
            margin: theme.spacing(0, 2),
            '& a:hover': {
                textDecoration: 'none',
                opacity: '.7'
            }
        }
    }
}));

export const Header: FunctionComponent = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} position='static'>
            <Toolbar>
                <Link component={RouterLink} to={routes.overview}>
                    <img src={logo} className={classes.logo} alt='logo'/>
                </Link>
                <Typography variant='h6' className={classes.title} noWrap>AGROCOM</Typography>
                <nav className={classes.navigation}>
                    <ul className={classes.navigationList}>
                        <li>
                            <Link component={RouterLink}
                                  color='inherit'
                                  to={routes.overview}>Übersicht</Link>
                        </li>
                        <li>
                            <Link component={RouterLink}
                                  color='inherit'
                                  to={routes.create}>Neuer Eintrag</Link>
                        </li>
                    </ul>
                </nav>
            </Toolbar>
        </AppBar>
    )
}
