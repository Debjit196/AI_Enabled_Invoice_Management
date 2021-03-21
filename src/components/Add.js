import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import theme,{ pxToRem } from '../utils/theme';
import AddIcon from '../assets/minus.svg';
const styles = theme => ({
  button: {
    marginTop: pxToRem(30),
    marginLeft: pxToRem(750),
    width: pxToRem(99),
    height: pxToRem(45),
    border: '1px solid #14AFF1',
    borderRadius: pxToRem(10),
    opacity: '1',
    textAlign: 'left',
    fontFamily: 'Ubuntu',
    fontSize:pxToRem(21),
    fontWeight:'Regular',
    letterSpacing: pxToRem(0),
    color: '#FFFFFF',
    opacity: '1',
    textTransform: 'none',
  },
  img:{
    background:'0% 0% no-repeat padding-box',
    opacity: '1', 
  }
 
});

function AddButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="outlined" className={classes.button}>
        <img className={classes.img} src={AddIcon}/>
        Add
      </Button>
      
    </div>
  );
}



export default withStyles(styles)(AddButton);
