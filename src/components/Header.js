import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import logo from '../assets/logo.svg';
import symbol from '../assets/Group 20399.svg';

export default function Header() {

  const useStyles = makeStyles((theme) => ({
      Namelogo:
      {
        paddingTop: '1.5vh',
        width: '16.3vw',
        height: '5.1vh',
        opacity: '1',
      },

      logo:
      {
        paddingTop: '1.8vh',
        paddingLeft: '24vw',
        width: '16.2vw',
        height: '5.2vh',
        opacity: '1',
      }
  }));

  const classes = useStyles();

  return (
      <Toolbar>
         <Box><img className={classes.Namelogo} src = { symbol }/></Box>
         <Box><img className={classes.logo} src = { logo }/></Box>
      </Toolbar>
  );
}