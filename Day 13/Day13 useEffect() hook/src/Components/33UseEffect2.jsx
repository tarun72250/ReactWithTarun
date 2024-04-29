import React, { useEffect, useState } from 'react'

export default function UseEffect2() {
  
  const[cdate,setCdate]=useState(new Date());

  //Runs once , at the time of mounting
    useEffect(()=>{
        console.log("mounted");

        const interval = setInterval(()=>{
            setCdate(new Date()); // update the current state at every render
        },1000);

        //clean up fn to clear the interval  when the component unmounts
        return ()=> clearInterval(interval)
    },[])//empty dependency array to ensure it runs only once
  return (
    <>
        <p>Time : {cdate.getHours()}:{cdate.getMinutes()}:{cdate.getSeconds()}</p>
    
    </>
  )
}
