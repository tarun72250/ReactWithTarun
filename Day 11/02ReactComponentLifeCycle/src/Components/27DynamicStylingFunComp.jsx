import React, { useState } from 'react'

export default function DynamicStylingFunComp() {

 const[cl,setCl]=useState("blue");

  return (
    <>
        <p style={{color: cl }}>
            DebugShala React Learning By Evening Batch
        </p>
        <input type='text' name='cl' value={cl} onChange={(e)=>{setCl(e.target.value)}} />
    </>
  )
}
