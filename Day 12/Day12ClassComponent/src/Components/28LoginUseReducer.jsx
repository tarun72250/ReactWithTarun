//this component sets up a login form where users can input their userid and password. As of now, it doesn't have any login functionality implemented, but it captures the input values and displays the userid in a welcome message.

import React, { useReducer } from 'react';
//useState() - number , String , boolean
//useReducer() - array , object , array object {return array as well}
export default function LoginUseReducer() {
  
    const initialState={
        userid:"",
        password:""
    }
 
    const reducer=(state,action)=>{
        switch(action.type)
        {
            case 'update' :
              return{
                ...state,[action.feild]:action.value
              }
            case 'clear' :
                return initialState
        }
    }
  
  
  const [emp,dispatch]=useReducer(reducer, initialState);
  return (<>
            <form>
                <input type="text" name="userid" value={emp.userid} onChange={(e)=>{dispatch({type:'update', feild:'userid', value:e.target.value})}} ></input><br/>

                <input type="text" name="password" value={emp.password} onChange={(e)=>{dispatch({type:'update', feild:'password', value:e.target.value})}} ></input><br/>

                <input type="button" value={"login"}/>

            </form>
            <h1>Welcome{emp.userid}</h1>
    </>
  )
}
