import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import theme,{ pxToRem } from '../utils/theme';
import Editicon from '../assets/edit.svg';
const styles = theme => ({
  button: {
    marginTop: pxToRem(30),
    marginLeft: pxToRem(30),
    width: pxToRem(102),
    height: pxToRem(45),
    border: '1px solid  #97A1A9',
    borderRadius: pxToRem(10),
    opacity: '1',
    textAlign: 'left',
    fontFamily: 'normal normal Ubuntu',
    fontSize:pxToRem(21),
    fontWeight:'Regular',
    letterSpacing: pxToRem(0),
    color: '#97A1A9',
    textTransform: 'none',
  },
  img:{
    background:'0% 0% no-repeat padding-box',
    opacity: '1',

  }
 
});

function EditButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="outlined" className={classes.button}>
      <div className={classes.img}>
      <img src={Editicon} />
      </div>
        Edit
      </Button>
      
    </div>
  );
}



export default withStyles(styles)(EditButton);