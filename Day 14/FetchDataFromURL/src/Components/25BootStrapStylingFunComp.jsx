import React from 'react'
//For using Bootstrap Styling 
//install bootstrap in your react appln 
//npm install bootstrap --save
//and check in package.json file in dependency folder
// "bootstrap": "^5.3.3",
export default function BootStrapStylingFunComp() {
  return (<>  
            <h1 className="display-6"> BootStrapStylingFunComp </h1>
            <p className="text-danger"> React </p>
            <p className="text-success"> DebugShala React </p>
         </>
  )
    
}
