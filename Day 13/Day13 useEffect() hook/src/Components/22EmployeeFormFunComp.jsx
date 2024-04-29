import { useReducer } from "react";

let EmployeeFormByTarun =()=>{
    
    //complex state we maintain in initialState
    const initialState={
        empid:0,
        ename:" ",
        dept:0,
        salary:0
    }

    //
    const reducer=(state,action)=>{
        switch(action.type)
        {
                case 'update': return{
                    ...state,
                    [action.field] :action.value
                }
                case 'clear' : return initialState;
        }

    }

    const sendDate =(e)=>{
        e.preventDefault();
        alert("Submit data Successfully");
        console.log(emp);
    }

    const [emp , dispatch] = useReducer(reducer,initialState);
    
    return(
        <>
            <h1>Employee Form</h1>
            <form>
                <label>Empid :</label>
                    <input type="number" name="empid" value={emp.empid} onChange={(e)=>{dispatch({ type:'update', field :"empid" , value: e.target.value  })}}/><br/>
                <label>Ename :</label>
                    <input type="text" name="ename" value={emp.ename} onChange={(e)=>{dispatch({ type:'update', field :"ename" , value: e.target.value  })}}/><br/>
                <label>Dept :</label>
                    <input type="number" name="dept" value={emp.dept}  onChange={(e)=>{dispatch({ type:'update', field :"dept" , value: e.target.value  })}}/><br/>
                <label>Salary :</label>
                    <input type="number" name="salary" value={emp.salary} onChange={(e)=>{dispatch({ type:'update', field :"salary" , value: e.target.value  })}} /><br/>
                <input type="submit" value="Send" onClick={(e)=>{sendDate(e)}}/>
                <br/>
                <input type="reset" value="clear" onClick={()=>{dispatch({type:'clear'})}}/>
                <br/>
            </form>
            <p>{JSON.stringify(emp)}</p>
        </>
    )
}

export default EmployeeFormByTarun;