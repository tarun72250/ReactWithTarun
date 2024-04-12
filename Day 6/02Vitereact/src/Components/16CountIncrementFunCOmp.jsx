import { useState } from "react";

function CountIncrementFunComp()
{

    const [count , setCount] = useState(0);

    return(
        <div>
                <h1>Fun Based Count Increment Comp</h1>
                <p>Count :{count}</p>
                <button onClick={() => {setCount(count +1)} }>Increment</button>
                <button onClick={()=>{setCount(count-1)}}> Decrement </button>
        </div>
    )
}

export default CountIncrementFunComp;