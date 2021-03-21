import { Grid, makeStyles, TextField, Typography,InputBase } from '@material-ui/core'
import React from 'react'
import {pxToVw,pxToRem} from '../utils/theme'

const defaultValues = {
    totalOpenAmount:"",
    notes:""
}
const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '94.5',
            margin: theme.spacing(2),
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
        letterSpacing: pxToVw(0.05),
        opacity: 1,
        color:"#97A1A9"
    }

}))


function FormEdit() {

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
            <Grid container spacing = {0}>
                    <Grid item xs = {6}>
                        <div className={classes.inputs}>
                        <label className = {classes.label}>totalopenamount</label>
                        <InputBase
                            variant="outlined"
                            name="customerName"
                            autoComplete="off"
                            value={values.totalOpenAmount}
                            onChange = {handleInputChange}
                            style={{
                                background: '#283A46 0% 0% no-repeat padding-box',
                                border: '1px solid #356680',
                                borderRadius: '10px',
                                opacity: '1',
                                width: pxToRem(500),
                                height: pxToRem(50),
                                marginTop:pxToRem(50),
                                marginBottom:pxToRem(50),
                            

                            }}
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
                                width: pxToRem(450),
                                height: pxToRem(170),
                                marginTop:pxToRem(50),
                                marginBottom:pxToRem(50),
                                marginLeft:pxToRem(50)

                            }}
                        />
                        </div>
                    </Grid>

                        
            </Grid>
        </form>
    )
}

export default FormEdit