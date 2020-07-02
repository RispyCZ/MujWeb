import React from 'react'
import { Grid, Typography, Container, Paper } from '@material-ui/core'
const currentyaer = new Date().getFullYear();

export default function Footer() {
    return (
        <>
            <Container maxWidth={false} disableGutters>
                <Paper style={{ padding: "10px" }}>
                    <Typography align="center">&copy; MCJabko {currentyaer}</Typography>
                    <Typography align="center">Vytvořil s &hearts; Petr Václavek </Typography>
                </Paper>
            </Container>


        </>
    )
}
