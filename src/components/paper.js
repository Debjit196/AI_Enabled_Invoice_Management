import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import theme,{ pxToRem } from '../utils/theme';
import Typography from '@material-ui/core/Typography';
import ContainedButtons from './predictButton';
import OutlinedButtons from'./ViewCorrespondance';
import AddButton from './Add';
import EditButton from'./Edit';
import DeleteButton from'./Delete';
import SearchField from'./SearchField';
import SimpleTable from'./table';

const styles = theme => ({
  root: {
    marginTop: pxToRem(30),
    marginLeft: pxToRem(30),
    width: pxToRem(1970),
    height: pxToRem(980),
    background: '#273D49CC 0% 0% no-repeat padding-box',
    borderSpacing: pxToRem(10),
    opacity: '1',
    

  },
  start:{
    display:'flex',
    flexDirection:'row',
    alignItems:'left'
  },
  end:{
      display:'flex',
      flexDirection:'rowreverse',
      alignItems:'left'
  },
  table: {
    marginTop: pxToRem(30),
    marginLeft: pxToRem(0),
    width: pxToRem(1800),
    height: pxToRem(1),
    borderSpacing: pxToRem(4),
    opacity: '1',
    background: 'normal',
    padding:pxToRem(2),
    border:'normal'
  },
 
    
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <div className={classes.start}>
        <ContainedButtons/>
        <OutlinedButtons/>
        <AddButton />
        <EditButton/>
        <DeleteButton/>
        <SearchField/>
        </div>
        <div className={classes.table}>
        <SimpleTable/>
        </div>
      </Paper>
    </div>
  );
}



export default withStyles(styles)(PaperSheet);
