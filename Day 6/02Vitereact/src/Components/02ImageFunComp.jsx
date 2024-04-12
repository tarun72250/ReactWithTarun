import React from 'react'
import Pic from "../Images/img2.jpg";


export default function ImageFunComp() {

    let h = 300;
    let w = 300;

  return (
    <div>
        <h1>Hello from FUn Image Comp<img src={Pic} height={h} width={w}/></h1>
       
    </div>
  )
}
