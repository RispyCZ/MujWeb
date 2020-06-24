import React from 'react'
import { Typography, Grid, Container, Paper } from '@material-ui/core'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar/Navbar'
export default function err404() {
    return (
        <>
            <Navbar />
            <Header />
            <Grid container>
                <Grid item xs={12}>
                    <Paper style={{padding: "25px", margin: "25px"}}>
                        <Typography variant="h3" component="h3" align="center">Vypadáto že stránka nexistuje</Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Footer />
        </>
    )
}
