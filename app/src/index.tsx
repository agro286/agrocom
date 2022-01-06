import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ThemeProvider} from '@mui/material';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {routes} from 'const';
import {theme} from 'theme';
import {App} from './App';
import {Detail, Edit, Overview} from './ui/Freight';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path={routes.root} element={<App/>}>
                        <Route path={routes.overview} element={<Overview/>}/>
                        <Route path={routes.create} element={<Edit/>}/>
                        <Route path={routes.update} element={<Edit/>}/>
                        <Route path={routes.detail} element={<Detail/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
