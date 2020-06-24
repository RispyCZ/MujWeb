import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Switch } from '@material-ui/core';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Home as HomeIcon,
  Gavel as GavelIcon,
  ContactSupport as ContactSupportIcon
} from '@material-ui/icons';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, } from '@fortawesome/free-brands-svg-icons';
import { faBook, faUserShield, faDollarSign, faAt } from '@fortawesome/free-solid-svg-icons';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  /*drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },*/
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

const Navbar = props => {
  const { history } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const itemList = [
    {
      text: "Domů",
      icon: <HomeIcon />,
      onClick: () => history.push('/')
    },
    {
      text: "Pravidla",
      icon: <GavelIcon />,
      onClick: () => history.push('/pravidla')
    },
    {
      text: "FAQ",
      icon: <ContactSupportIcon />,
      onClick: () => history.push('/faq')
    },
    {
      text: "Admin Team",
      icon: <FontAwesomeIcon icon={faUserShield} />,
      onClick: () => history.push('/adminteam')
    },
    {
      text: "O nás",
      icon: <FontAwesomeIcon icon={faBook} />,
      onClick: () => history.push('/onas')
    },
    {
      text: "Wiki",
      icon: <FontAwesomeIcon icon={["fab", "wikipedia-w"]} />,
      onClick: () => history.push('/wiki')
    },
    {
      text: "Discord",
      icon: <FontAwesomeIcon icon={["fab", "discord"]} />,
      onClick: () => window.location.href ="https://discordapp.com/invite/MAvESfp",
    },
    {
      text: "Podpořit server",
      icon: <FontAwesomeIcon icon={faDollarSign} />,
      onClick: () => window.location.href ="https://mcjabko.tebex.io",
    }
  ];
  library.add(fab);
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {itemList.map((item) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );

          })
          }
        </List>
      </Drawer>
    </div>
  );
}

export default withRouter(Navbar);