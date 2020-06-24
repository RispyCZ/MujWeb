import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header'
import { Grid, Typography, Paper, List, ListItem, ListItemText, Container } from '@material-ui/core';
import rules from './RulesContent';

const useStyles = makeStyles((theme) => ({
    box: {
        width: '100%',
        padding: '25px',
        margin: '25px 0'
    }
}))

export default function Rules() {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Header />
            <Typography variant="h3" align="center">Pravidla</Typography>
            <Container>
                <Paper className={classes.box}>
                    <List>
                        {rules.map((item) => {
                            const { index, text } = item;
                            return (
                                <ListItem button key={text}>
                                    <ListItemText primary={index + ". " + text} />
                                </ListItem>
                            );
                        })
                        }
                    </List>
                </Paper>
            </Container>
            <Footer />
        </>
    )
}
