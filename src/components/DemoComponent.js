import React from "react";
class DemoComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            counter:1
            
        };
        
       }

    
    onClickHandler1=()=>{
        console.log("Increment button clicked!");
        this.setState((prevState)=>({
            counter:prevState.counter+1

        }))
    }
    onClickHandler2=()=>{
        console.log("Decrement button clicked!");
        this.setState((prevState)=>({
            counter:prevState.counter-1

        }))
    }

    componentDidUpdate=(prevProps,prevState,snapshot)=>{
        if(prevState.counter>5)
          console.log("component updated!");
        console.log(snapshot)
    }

   /* shouldComponentUpdate=(prevProps,nextState)=>{
        if (nextState.counter===3)
        {
            return false
           
        }

    }*/


    

    componentDidMount=()=>{
       console.log("Inside component mount!");

       //api calls
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        return"update value"
    }
    render()
    {
        console.log("rendered!");
        return(
        <div style={{textAlign:"center"}}>
        <div>{this.props.data}</div>
        <div>{this.state.counter}</div>
        <button onClick={this.onClickHandler1}>Increment</button>
        <button onClick={this.onClickHandler2}>Decrement</button>
        </div>
        );
    }


}
export default DemoComponent;