//What is UseRef - with the help of these hook we can directly manipulate our DOM
//How it use it
//useRef returns  
//1 import { useRef } from 'react'
//2 const refElement = useRef(""); console.log(refElement); check in console 
//3 create one input feild
//4 name ko kisi state me rkhna hai (const[name,setName] = useState("");)
//5 onChange={(e) =>setName(e.target.value)}
//6 create reset button
//7 define reset fn
//8 add ref tag in input feild
//9 in reset fn we use refElement.current.focus()   so ese hm dom ko manipulate kr skte hai 
//10 I will create one more button which actually change the color
//11 define handleInput() fn
//12


import React, { useState } from 'react'
//1
import { useRef } from 'react'


export default function UseRefDemo() {


    //2
    const refElement = useRef("");
    console.log(refElement);

    //4
    const[name,setName] = useState("Tarun");

    //7. here focus is gone so I want to refocus my input feild again
    //so here we use our refElement 
    
    function reset()
    {
        setName("")
        // 9.
        refElement.current.focus()
    }

    //12.
    function handleInput()
    {
        refElement.current.style.color="Blue";
    }
  return (
    <>
        <h1>Learningn UseRef()</h1>
        {/* 3. */}
        {/* <input type='text' value={name}></input> */}

        {/* 5. */}
        {/* <input type='text' value={name} onChange={(e) =>setName(e.target.value)}></input><br/> */}

        {/* 8. in input feild we have ref tag in html*/}
        <input ref={refElement} type='text' value={name} onChange={(e) =>setName(e.target.value)}></input><br/>

        {/* 6. */}
        <button onClick={reset}>Reset</button>

        {/*10. */}
        <button onClick={handleInput}>Handle input</button>
    </>
  )
}


//import first