import React, { useState } from 'react'

export default function MessageFunCOmp() {
 
     const[message , setMessage]=useState("Ramesh");
 
 return (<>

            <h1>{message}</h1>
            <button onClick={()=>{setMessage("Vicky")}}>Change Message</button>
            <button onClick={()=>{setMessage("Ramesh")}}>Original Message</button>
            <button onClick={ ()=>{setMessage(message === "Ramesh"?"Vicky":"Ramesh")}}>Change Message with one Button</button>
   </>
  )
}
