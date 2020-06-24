import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer';
import { Grid, Typography, Paper, List, ListItem, ListItemText, Collapse, Container, ExpansionPanel, ExpansionPanelSummary } from '@material-ui/core';
import {
    ExpandMore as ExpandIcon
} from '@material-ui/icons'
import faq from './FaqContent';
import Header from '../../Components/Header';

const useStyles = makeStyles((theme) => ({
    box: {
        width: '100%',
        padding: '25px',
        margin: '25px 0'
    },
    answer: {
        marginLeft: '20px'
    }
}))

export default function Faq() {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Header />
            <Typography variant="h3" align="center">FAQ</Typography>
            <Container>
                <Paper className={classes.box}>
                    {faq.map((item) => {
                        const { index, question, answer } = item;
                        return (
                            <>
                                <ExpansionPanel TransitionProps={{ unmountOnExit: true }}>
                                    <ExpansionPanelSummary expandIcon={<ExpandIcon />} aria-controls={index + "-content"} id={index + "-header"}>
                                        <Typography>{index+". "+question}</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelSummary>
                                        <Typography className={classes.answer}>{answer}</Typography>
                                    </ExpansionPanelSummary>
                                </ExpansionPanel>
                            </>
                        );

                    })
                    }

                </Paper>
            </Container>
            <Footer />
        </>
    )
}
