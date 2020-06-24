import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import { Container, Typography, Paper, Grid } from '@material-ui/core'
export default function Contact() {
    return (
        <>
            <Navbar />
            <Header />
            <Typography variant="h3" align="center">Kontakt</Typography>
            <Container style={{ margin: "5%" }}>
                <Grid container justify="center">
                    <Grid item>
                        <Paper style={{ padding: "25px" }}>
                            <Typography variant="body1" component="p">Email: info@mcjabko.cz</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    )
}
