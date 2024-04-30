//Chapter = 6 Assignment 1
import React, { useState } from 'react'

export default function MessageFunComp() {

    const [msg,setMsg] = useState("XXXXX");
 
    return(
    <div>
        <h1>{msg}</h1>
        <button onClick={()=>{setMsg("Hello")}}>Change Name</button>
        <button onClick={()=>{setMsg("Welcome")}}>Original Name</button>
        <button onClick={()=>{setMsg(msg == "Welcome"?"Hello":"Welcome")}}>Change name with one Button</button>
    </div>
  )
} 
