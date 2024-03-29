import React, { Suspense, useState } from 'react';
import Routes from './Routes';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline, Button } from '@material-ui/core';
import { WbSunny as SunIcon, Brightness2 as MoonIcon } from '@material-ui/icons';
import Cookies from 'universal-cookie';

function App() {
    const [darkTheme, setdarkTheme] = useState(localStorage.getItem('darkmode') == 'true' ? true : false)
    console.log(darkTheme)
    const ChangeTheme = () => {
        setdarkTheme(!darkTheme)
        localStorage.setItem('darkmode', !darkTheme)
    }
    const theme = createMuiTheme({
        palette: {
            type: darkTheme ? 'light' : 'dark',
            primary: {
                main: '#d9534f',
            },
        },
        typography: {
            fontFamily: 'Comfortaa',
            h1: {
                fontSize: '2.8rem',
                '@media (min-width:600px)': {
                    fontSize: '5rem',
                },
            },
            h2: {
                fontSize: '1.5rem',
                '@media (min-width:600px)': {
                    fontSize: '4rem',
                },
            },
            h3: {
                fontSize: '2rem',
                '@media (min-width:600px)': {
                    fontSize: '3rem',
                },
            },
            h4: {
                fontSize: '1.5rem',
                '@media (min-width:600px)': {
                    fontSize: '2rem',
                },
            }
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Suspense fallback="Načítám">
                <Button style={{ position: 'fixed', bottom: '10px', left: '10px' }} onClick={ChangeTheme} variant="contained" color="primary">{darkTheme ? <SunIcon /> : <MoonIcon />}</Button>
                <Routes />
            </Suspense>
        </ThemeProvider>
    )
}
export default App;