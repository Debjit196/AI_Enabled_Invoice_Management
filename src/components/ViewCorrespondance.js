import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import theme,{ pxToRem } from '../utils/theme';

const styles = theme => ({
  button: {
    marginTop: pxToRem(30),
    marginLeft: pxToRem(30),
    width: pxToRem(237),
    height: pxToRem(45),
    border: '1px solid #97A1A9',
    borderRadius: pxToRem(10),
    opacity: '1',
    textAlign: 'left',
    fontFamily: 'Ubuntu',
    fontWeight:'Regular',
    fontSize:pxToRem(21),
    letterSpacing: pxToRem(0),
    color: '#97A1A9',
    lineSpacing:'24',
    textTransform: 'none',
    
  },
 
});

function OutlinedButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="outlined" className={classes.button}>
        View Correspondance
      </Button>
      
    </div>
  );
}



export default withStyles(styles)(OutlinedButtons);
