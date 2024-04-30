import { useReducer, useState } from "react"
import { json } from "react-router-dom";
//useState() - number , String , boolean
//useReducer() - array , object , array object {return array as well}
let EmployeeFormByTarun =()=>{

    //in last exmaple we seen data may recieved in form of Object so here we maintain complex state so we used Object
    const initialstate={
        empid:0,
        ename:" ",
        dept:0,
        salary:0
    }
// reducer()-take the current state and an action as arguments, and return the new state based on that action.
    const reducer=(state,action)=>{
           switch(action.type){
            case'update':
            return{...state,[action.feild]:action.value};
            case'clear':return initialstate;
           } 
    }

    const[emp,dispatch]=useReducer(reducer,initialstate);
    
    const sendData=(e)=>{
        //actually submit the data to server
        //stopiing the dafault behaviour of form
        //preventDefault() is used for submit data and clear the form
        e.preventDefault();
        alert("Data Submitted succesfully")
        console.log(emp);
    }

    return(
        <div>
            <h1>Employee Form </h1>
            <form>
                <label>empid :</label>
                <input type="number" name="empid" value={emp.empid} onChange={(e)=>{dispatch({type:'update',feild:"empid",value:e.target.value})}}/>
                <br/>
                <label> ename: </label>
                 <input type = "text" name ="ename" value={emp.ename} onChange={(e)=>{dispatch({type:'update',feild:"ename",value:e.target.value})}}/>
                 <br/>
                 <label> dept: </label>
                <input type = "number" name = "dept" value={emp.dept} onChange={(e)=>{dispatch({type:'update',feild:'dept',value:e.target.value})}}/> 
                <br/>
                <label > salary: </label>
                <input type = "number"name = "salary" value={emp.salary} onChange={(e)=>{dispatch({type:'update',feild:'salary',value:e.target.value})}}/>
                <br/>
                <input type="submit" value="Send" onClick={(e)=>{sendData(e)}}/>
                <br/>
                <input type="reset" value="clear" onClick={()=>{dispatch({type:'clear'})}}/>
            </form>
             <p>empid :{emp.empid} ename :{emp.ename} dept :{emp.dept} salary :{emp.salary} </p> 
            <p>{JSON.stringify(emp)}</p>
            
        </div>
    )
    //JSON.stringify() is a JavaScript function that converts a JavaScript object or value into a JSON string.
    //In this case, emp is the state object of the component. By passing emp to JSON.stringify(), it converts the state object into a JSON string representation.
}

export default EmployeeFormByTarun;