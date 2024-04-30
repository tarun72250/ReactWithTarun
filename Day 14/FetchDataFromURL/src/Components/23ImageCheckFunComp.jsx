import React, { useState } from 'react'
import pic from "../Images/img2.jpg"
//Chapter = 6 Assignment 4
//This functional component, named ImageCheckFunComp, renders an image and a checkbox. The visibility of the image is controlled by the state variable flag, which is initialized to false using the useState hook. 
export default function ImageCheckFunComp() {
  
  const [flag,setFlag]= useState(false);
  
  
    return(
    <div>
        <img src={pic} style={{display:flag?"block":"none"}}/>
        <input type="checkbox" name="nm" checked={flag} onChange={(e)=>setFlag(e.target.checked)}/>
        <br/>
        {flag.toString()}
    </div>
  )
}
