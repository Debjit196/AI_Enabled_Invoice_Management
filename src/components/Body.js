import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Actions from './Actions'


function Body() {

    const useStyles = makeStyles((theme) => ({
        invclst:
        {
            paddingTop : '2vh',
            paddingBottom : '2vh',
            paddingLeft : '1.6vw',
            paddingRight : '1.6vw',
            textAlign : 'left',
            letterSpacing : '0px',
            fontSize : '3vh',
            fontFamily : 'Ubuntu',
            color : '#FFFFFF',
            opacity : '1',
        },
    }));
    
    const classes = useStyles();

    return (
        <div className = {classes.invclst} >
            Invoice List
            <Actions />
        </div>
    )
}

export default Body
