import React from "react";

const Count = props =>{
    console.log("count rendered!")
    return(
    <div>Count:{props.count}</div>
    );

}
export default React.memo(Count);