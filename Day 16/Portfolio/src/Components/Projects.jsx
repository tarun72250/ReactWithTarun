import React from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function Projects() {

  const location = useLocation();

  return (
    <>
      <h1>Hello from Projects Page amd my id is {location.state.id}</h1>
      <Link to={"/"}>Home</Link>
    </>
  )
}
