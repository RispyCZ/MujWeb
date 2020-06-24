import React from 'react'
import { Typography, Container, Paper } from '@material-ui/core'

export default function Footer() {
    return (
        <>
            <Container maxWidth={false} disableGutters>
                <Paper style={{padding:"10px"}}>
                    <Typography align="center" variant="body1">&copy; MCJabko{new Date().getFullYear}</Typography>
                    <Typography align="center" variant="body1">Vytvořil s &hearts; Petr Václavek </Typography>
                </Paper>
            </Container>


        </>
    )
}
