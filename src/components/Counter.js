import React from "react";
import Count from"./Count";
const Counter = props => {
    const[obj,setCounter]=React.useState({1:"First",2:0});
    const counter=obj['2'];

    const[name,setName]=React.useState("React");

    const incrementHandler1=()=>{
         setCounter({
             1:"First",
             2:counter+1
         });
        }

        const incrementHandler2=()=>{
            setCounter({
                1:"First",
                2:counter-1
            });
           }
        
        React.useEffect(()=>{       //passing an array only didmount will be called
            console.log("Mounted!") //u cannot put a hook inside a class or function always a top level container
        },[name,counter])           //in this didmount always will be called 

        React.useEffect(()=>{     //hook inside a hook or functinal component like Counter here
        console.log("some other side effect")
        return()=>{
            console.log("execute before unmount!")
        }
        },[])
    
        return(//if 0 will be provided instead of counter prop will never change
        <div style={{textAlign:"center"}}>
        <h1>Functional Component:{props.name}</h1>
        <Count count={counter} />
        <button onClick={incrementHandler1}>Increment</button>
        <button onClick={incrementHandler2}>Decrement</button>
        </div>
    );
}
export default Counter;
