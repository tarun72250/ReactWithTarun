import React, { useEffect, useState } from 'react'
//this component illustrates how useEffect can be used to execute side effects in response to changes in state or on component mount, and how the dependencies array affects when those side effects are triggered.
export default function UsingUseEffectExample() {
    const [count , setCount] = useState(0);

    //1. this will update how many times we update state
    // useEffect(()=>{
    //     console.log("component mounted")
    // })

    //2. my need is mera comp bar bar state update n ho state update krne pe useEffect() ek bar hi call ho , so i will pass empty array
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