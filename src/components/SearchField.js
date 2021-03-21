import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '../assets/search.svg';
import theme,{ pxToRem } from '../utils/theme';

const styles = {
  root: {
    marginTop: pxToRem(10),
    marginLeft: pxToRem(30),
    width: pxToRem(320),
    height: pxToRem(42),
    background: '#283A46 0% 0% no-repeat padding-box',
    border: '1px solid #356680',
    borderRadius: pxToRem(14),
    opacity: '1'
  },
  input: {
    marginTop:pxToRem(1),
    marginBottom:pxToRem(3),
    marginLeft:pxToRem(28),
    textAlign: 'left',
    font: 'normal normal normal 18px/21px Ubuntu',
    fontSize:pxToRem(20),
    letterSpacing: pxToRem(0),
    color: '#97A1A9',
    opacity: '1'
  },
  iconButton: {
    padding:pxToRem(6),
    background:'0% 0% no-repeat padding-box',
    
    
  }
  
};

function SearchField(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root} elevation={1}>
     
      <InputBase className={classes.input} placeholder="Search by Invoice Number" />
      <IconButton className={classes.iconButton} aria-label="Search">
        <img src={SearchIcon}/>
      </IconButton>
    </Paper>
  );
}



export default withStyles(styles)(SearchField);
