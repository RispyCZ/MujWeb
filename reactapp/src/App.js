import React, { Suspense } from 'react';
import Routes from './Routes';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { CssBaseline } from '@material-ui/core';
import theme from './theme';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Suspense fallback="Načítám">
                <Routes />
            </Suspense>
        </ThemeProvider>
    )
}
