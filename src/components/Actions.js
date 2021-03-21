import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import RemoveIcon from '@material-ui/icons/Remove' ;
import React, {Component, useState} from 'react';
import Delete from './Delete';
import DataTable from './DataTable';
import ModalADD from './ModalAdd';
import ModalEDIT from'./ModalEdit';
import Form from './form';
import FormEdit from './FormEdit';
import SearchField from'./SearchField';
export default function Actions()
{

    const useStyles = makeStyles((theme) => ({

        grid:
        {
            backgroundColor: '#273d49cc',
            marginTop:"3vh",
            paddingTop:"1.3vh",
            width: "96vw",
            height: "80vh",
            borderRadius: '0.4rem',
        },

        predict:
        {
            variant: 'contained',
            disableRipple: 'true',
            height: '4.7vh',
            width: '5.5vw',
            paddingLeft: '0.5vw',
            verticalAlign: 'middle',
            fontSize: '1.056vw',
            fontFamily: 'Ubuntu',
            color: '#FFFFFF',
            backgroundColor:'#97A1A9',
            textTransform: 'none',
            letterSpacing: '0px',
            borderRadius: '0.5rem',
        },

        corres:
        {
            variant: 'outlined',
            disableRipple: 'true',
            marginLeft: '1vw',
            height: '4.7vh',
            width: '12.4vw',
            paddingLeft: '0.5vw',
            fontSize: '1.056vw',
            verticalAlign: 'middle',
            fontFamily: 'Ubuntu',
            color: '#97A1A9',
            borderRadius: '0.5rem',
            border: '0.04rem solid #97A1A9',
            textTransform: 'none',
        },

        add:
        {
            variant: 'outlined',
            disableRipple: 'true',
            marginLeft: '37.2vw',
            height: '4.7vh',
            width:'5.15vw',
            paddingLeft: '2px',
            fontSize: '1.056vw',
            fontFamily: 'Ubuntu',
            color: '#FFFFFF',
            borderRadius: '0.5rem',
            border: '0.04rem solid #14AFF1',
            textTransform: 'none',
        },

        edit:
        {
            variant: 'outlined',
            disableRipple: 'true',
            marginLeft: '1.05vw',
            height: '4.7vh',
            width: '5.3vw',
            paddingLeft: '5px',
            fontSize: '1.056vw',
            fontFamily: 'Ubuntu',
            color: '#97A1A9',
            borderRadius: '0.5rem',
            border: '0.04rem solid #97A1A9;',
            letterSpacing: '0px',
            textTransform: 'none',
        },

        delete:
        {
            variant: 'outlined',
            disableRipple: 'true',
            marginLeft: '1.05vw',
            height: '4.7vh',
            width: '6.4vw',
            paddingLeft: '1px',
            fontSize: '1.056vw',
            fontFamily: 'Ubuntu',
            color: '#97A1A9',
            borderRadius: '0.5rem',
            border: '0.04rem solid #97A1A9',
            letterSpacing: '0px',
            textTransform: 'none',
        },

    }));
    
    const [addPopup,setAddPopup] = React.useState(false);
    const [editPopup, setEditPopup] = React.useState(false);
    


    const classes = useStyles();
    return (
        <Paper className={classes.grid} >
            <Toolbar>
                <Button className={classes.predict} >Predict</Button>
                {/* <Button className={classes.corres} onClick={this.showModal}>View Correspondence</Button>
                <ViewCor show={this.state.show} handleClose={this.hideModal}></ViewCor> */}
                <Button className={classes.corres}>View Correspondence</Button>
                <Button className={classes.add} variant = "outlined" startIcon={<AddIcon style={{marginBottom: '0px', fontSize: '19px',marginLeft:'12px' }}/>} onClick={()=>setAddPopup(true)}>
                <span style={{marginLeft: '4px'}}>
                            Add
                            </span>
                        </Button>
                {/* <Button className={classes.add}  ><AddIcon style={{marginBottom: '0px', fontSize: '19px' }} /><span style={{marginLeft: '4px'}}>Add</span></Button>  */}
                <Button className={classes.edit} onClick={()=>setEditPopup(true)}><EditIcon style={{marginBottom: '0px', fontSize: '16.8px' }} /><span style={{paddingLeft: '6px'}}>Edit</span>
                
                </Button>                
                <Delete />
                <SearchField/>

                <ModalADD title="Add Invoices" addPopup={addPopup} setAddPopup={setAddPopup}>
                    <Form/>
                </ModalADD>

                <ModalEDIT title="Edit Invoice" editPopup={editPopup} setEditPopup={setEditPopup}>
                    <FormEdit/>
                </ModalEDIT>
                
            </Toolbar>
            
             <DataTable /> 
            {/* <Table1 /> */}
        </Paper>
    )
}