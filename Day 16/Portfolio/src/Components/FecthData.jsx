import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function FecthData() {

    const[userDate , setData]=useState([]);
    
    
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((resp) =>setData(resp.data));
    },[])

  return (
   <>
   <h1>Fetch Data From Api</h1>
   <table border={3}>
        <tbody>
            {
                userDate.map((v)=>(
                    <tr key={v.id}>
                        <td>{v.id}</td>
                        <td>{v.name}</td>
                        <td>{v.email}</td>
                    </tr>
                ))
            }
        </tbody>
   </table>
     <Link to={"/"}>Home</Link>
   </>
  )
}
