import React, { useState } from 'react'
import axios from 'axios';

export default function FetchDataAxiosPost() {

  const data ={fname:"",lname:""};

  const[inputData,setInputData]=  useState(data);

  const handleSubmit =(e)=>{
    e.preventDefault();
    
    axios.post("https://jsonplaceholder.typicode.com/users",inputData)
    .then((resp) =>{
      console.log(resp)
      alert("Data Submit succesfully");
    })
  }

  const handleData =(e)=>{

    setInputData({...inputData,[e.target.name]:e.target.value});
  }

  return (
    <>
      <label> First name :</label>
      <input type="text" name="fname" value={inputData.fname} onChange={handleData}></input>
      <br/>
      <label> Last name :</label>
      <input type="text" name="lname" value={inputData.lname} onChange={handleData}></input>
      <br/>
      <button onClick={handleSubmit}>Submit </button>

    </>
  )
}





// import axios from 'axios';
// import React, { useState } from 'react'

// //use for login 
// export default function FetchDataAxiosPost() {

//   const data ={fname: "" , lname :""};

//   const[inputData, setInputData] = useState(data);

//   const handleData =(e)=>
//   {
//       setInputData({...inputData , [e.target.name] : e.target.value})
//   }

//   const handleSubmit =(e)=>{
//     e.preventDefault();
//     axios.post("https://jsonplaceholder.typicode.com/users",inputData)
//     .then((resp)=>{
//       console.log(resp)
//       alert("Submit Data Successfully")
//     })

//   }
//   return (
//     <>
//         <label>First Name :</label>
//         <input type='text' name='fname' value={inputData.fname} onChange={handleData}></input>
//         <br/>
//         <label>Last Name :</label>
//         <input type='text'name='lname' value={inputData.lname} onChange={handleData}></input>
//         <br/>
//         <button onClick={handleSubmit}> Submit </button>
//     </>
    
//   )
// }
