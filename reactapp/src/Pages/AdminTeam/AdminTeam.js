import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import { makeStyles } from '@material-ui/styles'
import { Grid, Paper, Typography, Container, Card, CardActionArea, CardContent, CardMedia, Chip } from '@material-ui/core'
import Admins from './AdminTeamContent';

const useStyles = makeStyles((theme) => ({
    box: {
        width: '100%',
        padding: '25px',
        margin: '10px 0',
        textAlign: 'center',
    },
    media: {
        height: 140,
        width: 140,
        display: "block",
        margin: "25px auto"
    },
    card : {
        margin: "25px 0",
        textAlign: "center"
    }
}))

export default function AdminTeam() {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Header />
            <Typography variant="h3" align="center">Admin Team</Typography>
            <Container>
                <Grid container spacing={2} justify="center">
                    {Admins.map((item) => {
                        const { nickname, position, description } = item;
                        return (
                            <>
                                <Grid item xs={8}>
                                    <Card className={classes.card}>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image={"https://minotar.net/helm/" + nickname + "/140.png"}
                                                title="Random člen admin teamu"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2" align="center">{nickname}</Typography>
                                                <Chip label={position} color="primary" />
                                                <Typography variant="body2" component="p" align="center">{description}</Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            </>
                        )
                    })}
                </Grid>
            </Container>
            <Footer />
        </>
    )
}
