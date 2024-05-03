import React from "react";
import { Link } from 'react-router-dom'
import { useState } from 'react'
import pic from '../img2.jpg'

export default function ImageComp() {
    
    const[flag,setFlag]=useState(false)

  return (
    <>
      <h1>Image Comp</h1>
      <img src={pic} style={{display:flag?"block":'none'}} />
        <input type="checkbox" name="nm" checked={flag} onChange={(e)=>{setFlag(e.target.checked)}}/>
        <br/>
        {flag.toString()}
      <Link to={"/"}>Home</Link>
    </>
  );
}
