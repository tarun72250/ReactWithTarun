import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {

   const navigate = useNavigate();

    function goToProjects()
    {
        navigate("/projects")
    }

    function goToEducation()
    {
        navigate("/education")
    }

  return (
    <>
    <h1>Hello from Home Page</h1>
    <Link to={"/about"}>About</Link><br/>
    <Link to={"/contact"}>Contact</Link><br/>
    <button onClick={goToProjects}>Projects</button><br/>
    <button onClick={goToEducation}>Education</button>
    </>
  )
}
