//Chapter = 6 Assignment 3
import { useState } from "react";

function CountIncreaseFunComp()
{
    const [count,setCount] = useState(0);

    return(<div>
        <h1>Count Increase by Fun Comp: -{count}</h1>
        <button onClick={()=>{setCount(count+1)}} >Increment </button>
        <button onClick={()=>{setCount(count-1)}} >Decrement </button>
        
    </div>)
}
export  default CountIncreaseFunComp;
//here we don't create class comp further bcoz its complex to maitain state so we use hooks functionalityh to maintain state and other functionality 