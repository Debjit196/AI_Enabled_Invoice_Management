import React from 'react';
import DemoComponent from "./components/DemoComponent";
import './App.css';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import theme,{pxToRem} from '../src/utils/theme';
import { makeStyles } from '@material-ui/core';
import CollectorDashboard from '../src/views/CollectorDashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ROLL_NUMBER } from '../src/utils/constants';

const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
      height: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#6D7183',
      outline: '1px solid slategrey',
    },
  },
  mainBackground: {
    marginTop:pxToRem(0),
    marginLeft:pxToRem(0),
    width: pxToRem(2034),
    height: pxToRem(1230),
    background:' transparent radial-gradient(closest-side at 50% 50%, #58687E 0%, #39495E 100%) 0% 0% no-repeat padding-box',
    opacity:'1'
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
}));
const App = () => {
  console.log('theme', theme);
  const classes = useStyles();
  return (
    <div className={classes.mainBackground}>
      <Router basename={`/${ROLL_NUMBER}`}>
        <Route exact path="/" component={CollectorDashboard} />
      </Router>
    </div>
  );
};
//const arr =["some dynamic data"];
//lass App extends React.Component{
  //componentDidCatch(){
    //console.log("error occured")//for not displaying the screen errors doubt
  //}
  /*?render(){
  return(
  <>
   <Counter name="React"/> 
   <ClassCounter  name="react"/>
  </>
  );
  }
}*/

export default App;
