import React from "react";

const ButtonComponent = props =>{
    console.log("count rendered!")
    return(
    <div>Count:{props.count}</div>
    );

}
export default React.memo(ButtonComponent);