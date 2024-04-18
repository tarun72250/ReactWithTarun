import { useState } from "react";

function CountIncrementFunComp()
{
                                //useState(0) - String , integer , boolean 
    const [count , setCount] = useState(0);
    return(
        <>
            <h1>Fun Based Count Increment Comp</h1>
            <p>Count: {count} is {count % 2 === 0 ? "Even" : "Odd"}</p>
            
            <button onClick={()=>setCount(count + 1)}> Increment </button>
    
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    )
}

export default CountIncrementFunComp;