import React from "react";
import { makeStyles } from '@material-ui/core';
import theme,{ pxToRem } from '../utils/theme';
const useStyles = makeStyles((theme) => ({
  content:{
    marginTop: pxToRem(40),
    marginLeft: pxToRem(30),
    width: pxToRem(141),
    height: pxToRem(31),
    textAlign:'left',
    fontFamily: 'normal normal normal 28%/32% Ubuntu',
    fontSize:pxToRem(28),
    letterSpacing: pxToRem(0),
    color: '#FFFFFF',
    opacity: '1',

  },
  
  
    
  }));
    
  
  
  const GridHeader = (props) => {

    const classes = useStyles();
    
    return (
      <div className={classes.grid}>
          <div className={classes.content} >Invoice List</div>
      </div>
    );
  };
  
  
  
  export default GridHeader;


