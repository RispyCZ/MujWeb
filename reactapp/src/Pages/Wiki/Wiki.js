import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer';
import HowJoin from './HowJoin';
import Commands from './Commands';
import Header from '../../Components/Header';
import LWC from './LWC';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component="div">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        margin: "25px 0",
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function Wiki() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Navbar />
            <Header/>
            <Typography variant="h3" align="center">Wiki</Typography>
            <div className={classes.root}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    indicatorColor="primary"
                    value={value}
                    onChange={handleChange}
                    aria-label="Wiki"
                    className={classes.tabs}
                >
                    <Tab label="Jak se připojit?" {...a11yProps(0)} />¨
                    <Tab label="Příkazy" {...a11yProps(1)} />
                    <Tab label="LWC" {...a11yProps(2)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <HowJoin />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Commands/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <LWC/>
                </TabPanel>
            </div>
            <Footer />
        </>
    );
}
