import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Grid, Tooltip } from '@material-ui/core';
import HeroImage from '../obr/hero.jpg';
import OnlinePlayers from './OnlinePlayers';

const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundColor: 'rgba(80, 80, 80, 1)',
        backgroundImage: `url(${HeroImage})`,
        backgroundBlendMode: 'soft-light',
        color: '#fff',
        height: '300px',
        padding: '25px'
    },
    copy: {
        display: 'none'
    }
}));
export default function Header() {
    const classes = useStyles()

    const copyToClipboard = () => {
        const textarea = document.createElement("TEXTAREA");
        textarea.innerHTML = "mc.mcjabko.cz";
        textarea.setAttribute("id", "ip");
        document.body.appendChild(textarea);
        const el = document.getElementById("ip")
        el.select()
        document.execCommand("copy")
        document.body.removeChild(textarea);
    }
    return (
        <Grid container className={classes.hero}>
            <Grid item xs={false} sm={3} />
            <Grid item container direction='column' alignContent="center" alignItems="center" justify="center" xs={12} sm={6}>
                <Typography variant="h1">MCJabko.cz</Typography>
                <Typography variant="h4">Na serveru hraje <OnlinePlayers /> hráčů</Typography>
                <Tooltip title="Klikni pro zkopírování" aria-label="copy">
                    <Button variant="contained" color="primary" onClick={copyToClipboard} id="btncopy">mc.mcjabko.cz</Button>
                </Tooltip>
            </Grid>
            <Grid item xs={false} sm={3} />
        </Grid>
    )
}
