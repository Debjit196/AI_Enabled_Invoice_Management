import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import theme,{ pxToRem } from '../utils/theme';

const styles = theme => ({
  button: {
    marginTop:pxToRem(30),
    marginLeft:pxToRem(30),
    width: pxToRem(106),
    height: pxToRem(45),
    background: '#97A1A9 0% 0% no-repeat padding-box',
    borderRadius: pxToRem(10),
    opacity: '1',
    fontFamily: 'Ubuntu',
    fontWeight:'regular',
    fontSize:pxToRem(21),
    letterSpacing: pxToRem(0),
    color: '#FFFFFF',
    textTransform: 'none',
  },
  

  
 
});

function ContainedButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" color="primary"  className={classes.button}>
        Predict
      </Button>
    </div>
  );
}



export default withStyles(styles)(ContainedButtons);
