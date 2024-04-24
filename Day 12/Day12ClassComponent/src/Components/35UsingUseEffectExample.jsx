import React, { useEffect, useState } from 'react'

export default function UsingUseEffectExample() {
    const [count , setCount] = useState(0);

    //1. this will update how many times we update state
    // useEffect(()=>{
    //     console.log("component mounted")
    // })

    //2. my need is mera comp bar bar update  n ho state update krne pe
    // useEffect(()=>{console.log("component mount / updated")
    // },[])    


    //3. 
    const[data , setData]= useState("Ram")


      // //5.
      // useEffect(()=>{console.log("component mount / updated")
      // },[data])  

    //6.
      useEffect(()=>{console.log("component mount / updated")
    },[count])  

    function updateCount()
    {
        setCount(count + 1);
    }

    //4.
    function updateData()
    {
        setData("Seeta");
    }
  
  return (
<>
    <h1>Button Clicked {count} UsinguseEffectExample</h1>
    <button onClick={updateCount}> Click </button>
    <button onClick={updateData}> Updata data </button>
</>
  )
}