import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper, Container } from '@material-ui/core';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero';
import { Helmet } from 'react-helmet';
import { People as PeopleIcon, TagFaces as TagFacesIcon, Storage as ServerIcon } from '@material-ui/icons';
import Footer from '../../Components/Footer';
const useStyles = makeStyles((theme) => ({
    aboutBox: {
        padding: "10%",
    },
    icon: {
        fontSize: '4rem',
        display: 'block',
        margin: 'auto'
    }
}))

export default function Home() {
    const classes = useStyles();
    return (
        <>
            <Helmet>
                <title>MCJabko.cz &bull; Domů</title>
            </Helmet>
            <Navbar />
            <Hero />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '25px 0' }}>
                <Typography variant="h3" align="center">Proč si vybrat nás?</Typography>
                <Container>
                    <Grid container justify="center" spacing={2}>
                        <Grid item container xs={12} sm={4}>
                            <Paper className={classes.aboutBox} elevation={5}>
                                <TagFacesIcon color="primary" className={classes.icon} />
                                <Typography variant="body1">Na serveru máme velmi dobrou komunitu, která si mezi sebou pomáhá.</Typography>
                            </Paper>
                        </Grid>
                        <Grid item container xs={12} sm={4}>
                            <Paper className={classes.aboutBox} elevation={5}>
                                <PeopleIcon color="primary" className={classes.icon} />
                                <Typography variant="body1">Máme velmi zkušený admin team, který rád řeší problémy hráčů.</Typography>
                            </Paper>
                        </Grid>
                        <Grid item container xs={12} sm={4}>
                            <Paper className={classes.aboutBox} elevation={5}>
                                <ServerIcon color="primary" className={classes.icon} />
                                <Typography variant="body1">Server běží nepřetržitě již od roku 2017 na našem vlastím stroji.</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Footer />
        </>
    )
}
