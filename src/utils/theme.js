import { createMuiTheme } from '@material-ui/core/styles';


export const pxToRem = px => `${px / 22.5}rem`;
export const pxToVw = px =>
  `${(100 / document.documentElement.clientWidth) * px}vw`;

export const pxToVh = px =>
  `${px / (document.documentElement.clientHeight * 0.01)}vh`;

export default createMuiTheme({
  palette: {
    primary: {
      main: '#1B1F38',
      light: 'rgb(93,175,240,0.5)',
      dark: 'rgb(93,175,240,0.2)'
    }
  },
  overrides:{
    MuiInputBase:{
      root:{
        color:'#ffffff',
        
      }
     },
     MuiOutlinedInput:{
       notchedOutline:{
         borderColor:' #356680',
         padding:'6px 2rem 7px',
       }
     }

    },
    MuiPickersBasePicker:{
      pickerView:{
        background:'#283A46 0% 0% no-repeat padding-box'
      }
    },
    
  
});
