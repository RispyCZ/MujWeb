import React from 'react'
import { withRouter } from 'react-router-dom';
import {
    Menu as MenuIcon,
    Close as CloseIcon,
    Home as HomeIcon,
    Gavel as GavelIcon,
    ContactSupport as ContactSupportIcon
  } from '@material-ui/icons';

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
    }
  ];

export default withRouter(itemList);