import { useState } from "react";

let DynamicStyling=()=>{

    const[cl,setCl]=useState("blue");

    return(<div>
        
        <p style={{color:cl}}>Dynamic styling</p>
        <input type="text" name="cl" value={cl}
        onChange={(e)=>{setCl(e.target.value)}}/>
    </div>)

}
 
export default DynamicStyling;