import React from "react";
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <>
      <h1>Hello from Contact Page</h1>
      <Link to={"/about"}>About</Link><br/>
      <Link to={"/"}>Home</Link>
    </>
  );
}
