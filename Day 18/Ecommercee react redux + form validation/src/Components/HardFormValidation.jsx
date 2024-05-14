import { useReducer, useState } from "react"


//3.needed by useReducer - 
const initialState = {
    empid:{value:0,hasError:true,error:"",touched:false},
    ename:{value:"",hasError:true,error:"",touched:false},
    sal:{value:0,hasError:true,error:"",touched:false},
    dept:{value:0,hasError:true,error:"",touched:false},
    isFormValid:false
}

//2.needed by useReducer - 
const reducer = (state, action) => {
    switch(action.type) {
         case 'update':
            /*return {...state, [action.fld]:action.value } */
            const {name,value,hasError, error, touched, isFormValid} = action.data;
            return { ...state, [name]: {value, hasError, error, touched}, isFormValid }//name is a key 

         case 'reset':
            return initialState
    }

}
 

let HardFormValidation = () => {

    //1.
    const[emp, dispatch] = useReducer(reducer , initialState );

    
    //const [msg,setMsg] = useState("......")


    const handleChange=(name,value) => {
        //a. call validation logic
    const {hasError, error} = validateData(name, value)

        //b. check form validity status
        let isFormValid = true;
        for(const key in emp)
        {
            console.log(key+" : "+emp[key].hasError )
            if(emp[key].hasError === true)
            {
                isFormValid = false;
                break;
            }
        }         
        //c. call dispath method
        dispatch({type: 'update', data: {name,value,hasError, error,touched: true,isFormValid} })
    }


    const validateData = (name,value) => {
        let hasError = false;
        let error = "";
        switch(name){
            case 'empid':
                var exp = /^[0-9]{4,6}$/
                if(! exp.test(value))
                {
                    hasError = true;
                    error = "Empid should be 4-6 digits"
                }
                break;
            case 'ename':
                var exp1 = /^[A-Z][a-z]{2,15}$/;
                if(! exp1.test(value))
                {
                    hasError = true;
                    error = "Ename - first letter capital, rest small , range btw 2-15"
                }
                break;
            case 'sal':
                var exp2=/^[0-9]{6,8}$/;
                if(! exp2.test(value))
                {
                    hasError=true;
                    error="Salary digit contain 6-8 letters"
                }
                break;
            case 'dept':
                    var exp3=/^[0-9]{2,3}$/;
                    if(! exp3.test(value))
                    {
                        hasError=true;
                        error="Dept no is 2-3 letters"
                    }
                 break;    

        }
        return {hasError,error}

    }





    const submitData = (ev) => {
        ev.preventDefault()
        alert("Data Submitted successfully")
        console.log(JSON.stringify(emp))
        // send data to server to insert into db
    //     const reqOptions = {
    //         method:'POST',
    //         headers: {'content-type':'application/json'},
    //         body: JSON.stringify({
    //             empid: emp.empid.value,
    //             ename: emp.ename.value,
    //             sal: emp.sal.value,
    //             dept: emp.dept.value
    //         })
    //     }

        // fetch("http://localhost:9000/insertEmp",reqOptions)
        // .then(res => res.text())
        // .then(data => setMsg(data) )


    }


    return (
        <div style={{textAlign: 'center'}}>
            <h1> Emp Form </h1>
            <form>
            <div style={{marginBottom: '10px'}}>
                Enter empid :
                <input type="text" name="empid" value={emp.empid.value} 
                onChange={(e)=>{handleChange("empid",e.target.value)}} />
                <br/>
                <div style={{ display: emp.empid.touched && emp.empid.hasError?"block":"none", color:"red" }}>
                    {emp.empid.error}
                </div>
                </div>

                <div style={{marginBottom: '10px'}}>
                Enter ename :
                <input type="text" name="ename" value={emp.ename.value} 
                onChange={(e)=>{handleChange("ename",e.target.value)}} />
                <br/>
                <div style={{ display: emp.ename.touched && emp.ename.hasError?"block":"none", color:"red" }}>
                {emp.ename.error}
                </div>
                </div>

                <div style={{marginBottom: '10px'}}>
                Enter Employee sallary:
                <input type="number" name="salary" value={emp.sal.value} 
                 onChange={(e)=>{handleChange("sal",e.target.value)}} />
                <br/> 
                <div style={{display:emp.sal.touched && emp.sal.hasError?"block":"none", color:"red"}}>
                {emp.sal.error}
                </div>
                </div>



                
                 <div style={{marginBottom: '10px'}}>
                 Enter deptno  :
                <input type="number" name="deptno" value={emp.dept.value} 
                 onChange={(e)=>{handleChange("dept",e.target.value)}} />
                <br/>
                <div style={{display:emp.dept.touched && emp.dept.hasError?"block":"none", color:"red"}}>
                {emp.dept.error}
                </div>
                 </div>

                <input type="submit" value="Submit"
                onClick={(e)=>{ submitData(e) }} />
                
                <input type="button" value="Clear" disabled={emp.isFormValid?true:false}
                onClick={()=>{dispatch({type:'reset'})}} />
            </form>
            {JSON.stringify(emp)} 
            
        </div>
    )

}

export default HardFormValidation;
{/*
import { useReducer, useState } from "react"

const initialState = {
    empid:{value:0,hasError:true,error:"",touched:false},
    ename:{value:"",hasError:true,error:"",touched:false},
    sal:{value:0,hasError:true,error:"",touched:false},
    dept:{value:0,hasError:true,error:"",touched:false},
    isFormValid:false
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'update':
            const {name, value, hasError, error, touched, isFormValid} = action.data;
            return { ...state, [name]: {value, hasError, error, touched}, isFormValid }
        case 'reset':
            return initialState
    }
}

const FormValidation = () => {
    const [emp, dispatch] = useReducer(reducer, initialState);
    const [msg,setMsg] = useState("......")

    const handleChange=(name,value) => {
        const {hasError, error} = validateData(name, value)
        let isFormValid = true;
        for(const key in emp) {
            if(emp[key].hasError === true) {
                isFormValid = false;
                break;
            }
        }
        dispatch({type: 'update', data: {name, value, hasError, error, touched: true, isFormValid}})
    }

    const validateData = (name,value) => {
        let hasError = false;
        let error = "";
        switch(name){
            case 'empid':
                var exp = /^[0-9]{4,6}$/
                if(!exp.test(value)) {
                    hasError = true;
                    error = "Empid should be 4-6 digits"
                }
                break;
            case 'ename':
                var exp1 = /^[A-Z][a-z]{2,15}$/;
                if(!exp1.test(value)) {
                    hasError = true;
                    error = "Ename - first letter capital, rest small , range btw 2-15"
                }
                break;
            case 'sal':
                var exp2=/^[0-9]{6,8}$/;
                if(!exp2.test(value)) {
                    hasError=true;
                    error="Salary digit contain 6-8 letters"
                }
                break;
            case 'dept':
                var exp3=/^[0-9]{2,3}$/;
                if(!exp3.test(value)) {
                    hasError=true;
                    error="Dept no is 2-3 letters"
                }
                break;    
        }
        return {hasError,error}
    }

    const submitData = (ev) => {
        ev.preventDefault()
        alert("Data Submitted successfully")
        console.log(JSON.stringify(emp))
        // send data to server to insert into db
    }

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Emp Form</h1>
            <form>
                <div style={{marginBottom: '10px'}}>
                    Enter empid: 
                    <input type="text" name="empid" value={emp.empid.value} 
                    onChange={(e)=>{handleChange("empid",e.target.value)}} />
                    <div style={{display: emp.empid.touched && emp.empid.hasError ? "block" : "none", color: "red"}}>
                        {emp.empid.error}
                    </div>
                </div>

                <div style={{marginBottom: '10px'}}>
                    Enter ename: 
                    <input type="text" name="ename" value={emp.ename.value} 
                    onChange={(e)=>{handleChange("ename",e.target.value)}} />
                    <div style={{display: emp.ename.touched && emp.ename.hasError ? "block" : "none", color: "red"}}>
                        {emp.ename.error}
                    </div>
                </div>

                <div style={{marginBottom: '10px'}}>
                    Enter Employee sallary: 
                    <input type="number" name="salary" value={emp.sal.value} 
                    onChange={(e)=>{handleChange("sal",e.target.value)}} />
                    <div style={{display: emp.sal.touched && emp.sal.hasError ? "block" : "none", color: "red"}}>
                        {emp.sal.error}
                    </div>
                </div>

                <div style={{marginBottom: '10px'}}>
                    Enter deptno: 
                    <input type="number" name="deptno" value={emp.dept.value} 
                    onChange={(e)=>{handleChange("dept",e.target.value)}} />
                    <div style={{display: emp.dept.touched && emp.dept.hasError ? "block" : "none", color: "red"}}>
                        {emp.dept.error}
                    </div>
                </div>

                <input type="submit" value="Submit" onClick={(e)=>{ submitData(e) }} />
                <input type="button" value="Clear" disabled={emp.isFormValid ? true : false} onClick={()=>{dispatch({type:'reset'})}} />
            </form>
            {JSON.stringify(emp)} 
        </div>
    )
}

export default FormValidation;
*/}