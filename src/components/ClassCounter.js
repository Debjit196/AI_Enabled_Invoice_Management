import React from "react";

class ClassCounter extends React.Component{

    constructor(){
        super();
        this.state={
            counter:0
        }
    }

    componentDidUpdate(){
        console.log("lifecycle method called");
    }
    componentDidMount(){
        console.log("lifecycle method called");
    }

    componentWillUnmount(){
        console.log("execute before unmount!")
    }

    incrementHandler=()=>{
        this.setState((prevState)=>({
            counter:prevState.counter+1

        }))
    }
    render(){
        return (
        <div style={{textAlign:"center"}}>
        <h1>Class component :{this.props.name}</h1>
        <div onClick={this.incrementHandler}>Count:{this.state.counter}</div>
        </div>
        );
    }
}
export default ClassCounter;