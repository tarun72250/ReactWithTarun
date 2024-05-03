import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const id = 5;

  const navigate = useNavigate();

  function goToProjects() {
    navigate("/projects", { state: { id: id } });
  }

  function goToEducation() {
    navigate("/education");
  }

  function fetchData()
  {
    navigate("/fetchData");
  }

  function imageComp()
  {
    navigate("/imageComp");
  }

  function employeeForm()
  {
    navigate("/employeeForm")
  }
  return (
    <>
      <h1>Hello from Home Page</h1>
      <Link to={"/about"}>About</Link>
      <br />
      <Link to={"/contact"}>Contact</Link>
      <br />
      <button onClick={goToProjects}>Projects</button>
      <br />
      <button onClick={goToEducation}>Education</button>
      <button onClick={fetchData}> FetchData </button>
      <button onClick={imageComp}>ImageComp </button>
      <button onClick={employeeForm}>Employee Form</button>
    </>
  );
}
