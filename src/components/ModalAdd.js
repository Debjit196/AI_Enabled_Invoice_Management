import { Button, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, Grid } from '@material-ui/core'
import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import { Typography } from '@material-ui/core';
import theme,{ pxToRem } from '../utils/theme';

const useStyles = makeStyles({
    dialogBox:{
        minWidth:"60.125rem",
        minheight: "2.813rem",
        background:' #2A3E4C 0% 0% no-repeat padding-box',
        borderRadius: pxToRem(6),
        opacity: '1',
        marginTop:pxToRem(140),
        marginLeft:pxToRem(40)
        
    },
    dialogTitle:{
        margin:"1.875rem",
        padding:"0px",
        color: '#FFFFFF',
        height:'5vh'
        
    },
})


function ModalADD(props) {

    const classes = useStyles()

    const{title,children, addPopup,setAddPopup} = props
    return (
        <div>
            <Dialog open={addPopup} classes = {{paper: classes.dialogBox}}>
                <DialogTitle className = {classes.dialogTitle}>
                    <div style={{display:"flex"}}>
                        <div style={{flexGrow:1}}>
                            <Typography style={{textAlign: 'left',fontFmily:'Ubuntu',letterSpacing: '0px',textTransform: 'capitalize',opacity: '1',fontSize:'28px'}}>
                            {title}
                            </Typography>
                        </div>
                        <Button onClick={()=>{setAddPopup(false)}}>
                            <CloseIcon style={{color:'#FFFFFF',background: 'transparent 0% 0% no-repeat padding-box',opacity: '1'}}/>
                        </Button>
                    </div>
                </DialogTitle>
                <hr style={{border: "0.03px solid #1d2830", width: "99.9%"}}/>
                <DialogContent>
                    <div>{children}</div>
                </DialogContent>
                <hr style={{border: "0.03px solid #1d2830", width: "99.9%"}}/>
                <DialogActions style={{padding:"1.875rem",height:"2.5vh"}}>
                    <Grid justify="space-between" container spacing={0}>
                        <Grid item>
                            <Button onClick={()=>{setAddPopup(false)}} style={{color:"#14AFF1",textTransform:'none',fontFamily:'Ubuntu',fontSize:'20px',width: '87px',height: '45px',textAlign: 'left',letterSpacing: '0px',opacity: '1'}}>
                                Cancel
                            </Button>
                        </Grid>

                        <Grid item justify="space-between">
                            <div>
                                <Button variant="contained" style={{marginRight:"1.25rem",textTransform:'none',background: '#14AFF1 0% 0% no-repeat padding-box',width:'87px',height:'45px',borderRadius: '10px',opacity: '1'}}>
                                   <Typography style={{textAlign: 'left',fontFamily:'Ubuntu',fontSize:'20px',letterSpacing: '0px',color: '#FFFFFF',opacity: '1'}}>
                                    Add
                                    </Typography>
                                </Button>
                                <Button variant="outlined" style={{textTransform:'none',border: '1px solid #14AFF1',borderRadius: '10px',opacity: '1',width: '87px',height: '45px'}}>
                                    <Typography style={{textAlign: 'left',fontFamily:'Ubuntu',fontSize:'20px',letterSpacing: '0px',color: '#FFFFFF',opacity: '1'}}>
                                    Clear
                                    </Typography>
                                </Button>
                            </div>
                        
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default ModalADD