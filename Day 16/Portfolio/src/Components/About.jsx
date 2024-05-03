import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
    <h1>Hello from About Page</h1>
    <Link to={"/contact"}>Contact</Link><br/>
    <Link to={"/"}>Home</Link>
    
    </>
  )
}
