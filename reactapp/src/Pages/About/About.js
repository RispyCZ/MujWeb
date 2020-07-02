import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Grid, Paper, Typography, Container, List, ListItem, ListItemText, ListItemIcon, Divider } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faServer, faMicrochip, faMemory, faHdd
} from '@fortawesome/free-solid-svg-icons'
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import servers from './AboutContent';
import { Helmet } from 'react-helmet';
const useStyles = makeStyles((theme) => ({
    box: {
        width: '100%',
        padding: '25px',
        margin: '10px 0'
    },
}))

export default function About() {
    const classes = useStyles();
    return (
        <>
            <Helmet>
                <title>MCJabko.cz &bull; O nás</title>
            </Helmet>
            <Navbar />
            <Header />
            <Grid container>
                <Container>
                    <Typography variant="h3" align="center">O nás</Typography>
                    <Grid item container direction="column">
                        <Grid item>
                            <Paper className={classes.box}>
                                <Typography variant="h4">Historie</Typography>
                                <Typography>Server MCJabko vznikl již v roce 2012 jako server pro pár lidí. Až v roce 2014 byl znovu otevřen. Jeho majitel byl tenkrát Grip2012. Server fungoval na snapshotu verze 1.8 a dosáhl celkem slušného úspěchu. Server byl uzavřen v roce 2016.</Typography>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.box}>
                                <Typography variant="h4">Ale od října roku 2017…</Typography>
                                <Typography>Je opět v chodu pod mým vedením. Server hostujeme na VPS serveru u společnosti Contabo.</Typography>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.box}>
                                <Typography variant="h4">Rok radosti a smutku…</Typography>
                                <Typography>Návštěvnost na serveru roste a klesá jako na horské dráze. Někdy se dokonce dostaneme na plné sloty. Bohužel kolem května roku 2018 hráčů na server rapidně ubývá a server tak upadá v zapomnění. O prázdninách jsme se přesunuli na vlastní hardware a snížily jsme tak náklady na server.</Typography>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.box}>
                                <Typography variant="h4">Úpadek, zapomenutí a možná kdo ví?</Typography>
                                <Typography>Bohužel ani v roce 2019 se situace na serveru nezlepšuje ba naopak zhoršuje server je chvílemi dokonce prázdný.</Typography>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.box}>
                                <Typography variant="h4">Něco zlé je pro něco dobré</Typography>
                                <Typography>V červnu roku 2019 jsme udělali wipe celého server, poučili se z chyb a začali od znova na nové mapě. Začali jsme na verzi 1.14, bohužel vlivem její neoptimalizaci se server extrémně lagoval. Lagy ustaly až někdy srpnu po prázdninovém návalu hráčů kdy nám občas nestačilo ani 35 slotů. Po prázdninách server celkem drží přes víkendy se návštěvnost dostává 27 hráčů. Doufáme že to vydrží co nejdéle</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
                <Container>
                    <Typography variant="h3" style={{ textAlign: "center" }}>Technické zázemí</Typography>
                    <Grid item container spacing={2}>
                        {servers.map((item) => {
                            const { index, name, cpu, ram, disk } = item;
                            return (
                                <Grid key={index} item xs={12} sm={4}>
                                    <Paper className={classes.box}>
                                        <FontAwesomeIcon icon={faServer} size="5x" style={{ display: "block", margin: "auto" }} />
                                        <Typography variant="h4" align="center">{name}</Typography>
                                        <Divider />
                                        <List>
                                            <ListItem button key={cpu}>
                                                <ListItemIcon><FontAwesomeIcon icon={faMicrochip} size="2x" /></ListItemIcon>
                                                <ListItemText primary={cpu} />
                                            </ListItem>
                                            <ListItem button key={ram}>
                                                <ListItemIcon><FontAwesomeIcon icon={faMemory} size="2x" /></ListItemIcon>
                                                <ListItemText primary={ram} />
                                            </ListItem>
                                        </List>
                                        <ListItem button key={disk}>
                                            <ListItemIcon><FontAwesomeIcon icon={faHdd} size="2x" /></ListItemIcon>
                                            <ListItemText primary={disk} />
                                        </ListItem>
                                    </Paper>
                                </Grid>
                            );
                        })
                        }
                    </Grid>
                </Container>
            </Grid>
            <Footer />
        </>
    )
}
