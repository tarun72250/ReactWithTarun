import React, { useEffect, useState } from 'react'

export default function UseEffect() {
  
  const[count , setCount]=useState(0);
  const[data,setData] = useState("Ram")
  //1
//   useEffect( ()=>{console.log("Component Mounted")} )


  //2
//   useEffect( ()=>{console.log("Component Mounted")},[] )

  //3
  useEffect( ()=>{console.log("Component mount / Updated")},[count] )

  useEffect( ()=>{console.log("Component mount / Updated")},[data] )


  function updateCount()
  {
    setCount(count + 1);
  }

  function updateData()
  {
        setData("Seeta")
  }
    return (
        <>
            <h1>
                Button Clicked {count} times
            </h1>
            <h1>{data}</h1>
            <button onClick={updateCount}> Click </button>
            <button onClick={updateData}> Update </button>
        </>
  )
}
