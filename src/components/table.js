import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import theme,{ pxToRem } from '../utils/theme';
import Checkboxes from './checkbox';

const styles = theme => ({
  
  table: {
    marginTop: pxToRem(30),
    marginLeft: pxToRem(0),
    width: pxToRem(1970),
    height: pxToRem(1),
    borderSpacing: pxToRem(4),
    opacity: '1',
    background: 'normal',
    padding:pxToRem(2),
    border:'normal'
  },
  row:{
    height:pxToRem(2),
    marginTop: pxToRem(2),
    marginLeft: pxToRem(2),
    width: pxToRem(1800),
    border:'normal'
  }
});

let id = 0;
function createData(name, custnumber, invnumber, invamount, duedate,predicted,bucket,notes) {
  id += 1;
  return { id, name, custnumber, invnumber, invamount, duedate,predicted,bucket,notes };
}

const rows = [
  createData('Andrea James', 2523532, 73457346735, '112.87K', '23-jan-2021','-','-','loremdolerum'),
  createData('Andrea James', 2523532, 73457346735, '112.87K', '23-jan-2021','-','-','loremdolerum'),
  createData('Andrea James', 2523532, 73457346735, '112.87K', '23-jan-2021','-','-','loremdolerum'),
  createData('Andrea James', 2523532, 73457346735, '112.87K', '23-jan-2021','-','-','loremdolerum'),
  createData('Andrea James', 2523532, 73457346735, '112.87K', '23-jan-2021','-','-','loremdolerum'),
  createData('Andrea James', 2523532, 73457346735, '112.87K', '23-jan-2021','-','-','loremdolerum'),
  createData('Andrea James', 2523532, 73457346735, '112.87K', '23-jan-2021','-','-','loremdolerum'),
  createData('Andrea James', 2523532, 73457346735, '112.87K', '23-jan-2021','-','-','loremdolerum'),
  createData('Andrea James', 2523532, 73457346735, '112.87K', '23-jan-2021','-','-','loremdolerum'),
  createData('Andrea James', 2523532, 73457346735, '112.87K', '23-jan-2021','-','-','loremdolerum'),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Customer Name</TableCell>
            <TableCell  align="right">Customer#</TableCell>
            <TableCell  align="right">Invoice#</TableCell>
            <TableCell  align="right">Invoice Amount</TableCell>
            <TableCell  align="right">Due Date</TableCell>
            <TableCell  align="right">Predicted Payment Date</TableCell>
            <TableCell  align="right">Predicted Aging Bucket</TableCell>
            <TableCell  align="right">Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow  key={row.id}>
              <Checkboxes/>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.custnumber}</TableCell>
              <TableCell align="right">{row.invnumber}</TableCell>
              <TableCell  align="right">{row.invamount}</TableCell>
              <TableCell  align="right">{row.duedate}</TableCell>
              <TableCell  align="right">{row.predicted}</TableCell>
              <TableCell  align="right">{row.bucket}</TableCell>
              <TableCell  align="right">{row.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  );
}



export default withStyles(styles)(SimpleTable);
