import { useReducer } from "react";
//useState() - number , String , boolean
//useReducer() - array , object , array object {return array as well}
const initialState = 0;

const reducer = (state,action) => {
    switch(action)
    {
        case 'increment': return state + 1;
        case 'decrement': return state - 1;
        case 'reset': return initialState;
        default: return state;
     } 
}

function CounterUseReducer()
{
   const[count , dispatch] = useReducer(reducer, initialState);
    return(
        <>
        <h1> Count : {count} </h1>
            <button onClick={() => dispatch('increment')}> Increment </button>
            <button onClick={() => dispatch('decrement')}> Decrement </button>
            <button onClick={() => dispatch('reset')}> Reset </button>
        </>
    )
}
export default CounterUseReducer;