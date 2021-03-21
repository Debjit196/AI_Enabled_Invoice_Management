import { Grid, makeStyles, TextField, Typography,InputBase } from '@material-ui/core'
import React from 'react'
import DatePicker from './DatePick'
import {pxToVw} from '../utils/theme'
import {pxToRem} from '../utils/theme'

const defaultValues = {
    customerName:"",
    customerNo:"",
    invoiceNo:"",
    invoiceAmount:"",
    dueDate:new Date(),
    notes:""
}
const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '94.5',
            margin: theme.spacing(2),
        },
        '&.MuiDialogActions-root':{
            height:'5vh'
        }
        
    },
    inputs: {
        display: "flex",
        alignItems: "center",
        justifyContent:"space-between"
    },
    label:{
        textAlign: "left",
        font: "normal normal normal 1.25rem/1.5rem Ubuntu",
        letterSpacing: pxToVw(0.09),
        opacity: 1,
        color:"#97A1A9"
    }

}))


function Form() {

    const classes = useStyles()
    const[values,setValues]=React.useState(defaultValues)
    const handleInputChange= e=>{
        const{name,value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }


    return (
        <form className = {classes.root}>
            <Grid container spacing = {2}>
                    <Grid item xs = {6}>
                        <div className={classes.inputs}>
                        <label className = {classes.label}>Customer Name.<span style={{color:'#FF5B5B'}}>*</span></label>
                        <InputBase
                            variant="outlined"
                            name="customerName"
                            autoComplete="off"
                            value={values.customerName}
                            onChange = {handleInputChange}
                            style={{
                                background: '#283A46 0% 0% no-repeat padding-box',
                                border: '1px solid #356680',
                                borderRadius: '10px',
                                opacity: '1',
                                width: pxToRem(400),
                                height: pxToRem(50),
                                marginBottom:pxToRem(20),
                                marginTop:pxToRem(20),
                                paddingLeft:'2rem',

                            }}
                        />
                        </div> 

                        <div className={classes.inputs}>
                        <label className = {classes.label}>Customer No.<span style={{color:'#FF5B5B'}}>*</span></label>
                        <InputBase
                            variant="outlined"
                            color="#356680"
                            name="customerNo"
                            autoComplete="off"
                            value={values.customerNo}
                            onChange = {handleInputChange}
                            style={{
                                background: '#283A46 0% 0% no-repeat padding-box',
                                border: '1px solid #356680',
                                borderRadius: '10px',
                                opacity: '1',
                                width: pxToRem(400),
                                height: pxToRem(50),
                                marginBottom:pxToRem(20),
                                marginTop:pxToRem(20),
                                paddingLeft:'2rem',


                            }}
                        />  
                        </div>

                        <div className={classes.inputs}>
                        <label className = {classes.label}>Invoice No. <span style={{color:'#FF5B5B'}}>*</span></label>
                        <InputBase
                            variant="outlined"
                            name="invoiceNo"
                            autoComplete="off"
                            value={values.invoiceNo}
                            onChange = {handleInputChange}
                            style={{
                                background: '#283A46 0% 0% no-repeat padding-box',
                                border: '1px solid #356680',
                                borderRadius: '10px',
                                opacity: '1',
                                width: pxToRem(400),
                                height: pxToRem(50),
                                marginBottom:pxToRem(20),
                                marginTop:pxToRem(20),
                                paddingLeft:'2rem',


                            }}
                        />
                        </div>

                        <div className={classes.inputs}>
                        <label className = {classes.label}>Invoice Amount <span style={{color:'#FF5B5B'}}>*</span></label>
                        <InputBase
                            variant="outlined"
                            name="invoiceAmount"
                            autoComplete="off"
                            value={values.invoiceAmount}
                            onChange = {handleInputChange}
                            style={{
                                background: '#283A46 0% 0% no-repeat padding-box',
                                border: '1px solid #356680',
                                borderRadius: '10px',
                                opacity: '1',
                                width: pxToRem(400),
                                height: pxToRem(50),
                                marginBottom:pxToRem(20),
                                marginTop:pxToRem(20),
                                paddingLeft:'2rem',

                            }}
                        />
                        </div>
                    </Grid>
                    <Grid item xs = {6}>
                        <div className={classes.inputs}>
                        <label className = {classes.label}>Due Date <span style={{color:'#FF5B5B'}}>*</span></label>   
                        <DatePicker
                            name="dueDate"
                            value={values.dueDate}
                            onChange = {handleInputChange}
                            style={{width: pxToRem(400),
                                height: pxToRem(195),
                                marginBottom:pxToRem(20),
                                marginTop:pxToRem(20),
                                borderRadius: pxToRem(10),}}
                            


                        />
                        </div>

                        <div className={classes.inputs}>
                        <label className = {classes.label}>Notes</label>
                        <InputBase
                            variant="outlined"
                            name="notes"
                            multiline
                            autoComplete="off"
                            value={values.notes}
                            onChange = {handleInputChange}
                            placeholder = "Lorem Ipsum dolor..."
                            style={{
                                background: '#283A46 0% 0% no-repeat padding-box',
                                border: '1px solid #356680',
                                borderRadius: '10px',
                                opacity: '1',
                                width: pxToRem(400),
                                height: pxToRem(195),
                                marginBottom:pxToRem(20),
                                marginTop:pxToRem(20),
                                borderRadius: pxToRem(10),
                                paddingLeft:'2rem',
                        

                            }}
                        />
                        </div>
                    </Grid>

                        
            </Grid>
        </form>
    )
}

export default Form