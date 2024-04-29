import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import logo from "./logo.svg";
import HelloClassComp from "./Components/01HelloClassComp.jsx";
import HelloFunComp from "./Components/01HelloFunComp.jsx";
import ImageComp from "./Components/02ImageClassComp";
import ImageFunComp from "./Components/02ImageFunComp";
import TimeDate from "./Components/05TimeDateFun";
import FactClassComp from "./Components/07FactClassComp";
import FactFunComp from "./Components/08FactFunComp";
import ArrayNameClassComp from "./Components/09ArrayNameClassCOmp";
import ArrayNameFunComp from "./Components/10ArrayNameFunCOmp";
import FactorialClassClaculater from "./Components/11FactorialCalculaterClassComp";
import FactorialFunComp from "./Components/12FactorialCalculaterFunComp";
import EmpFunComp from "./Components/14EmpFunComp";
import CountIncrementClassComp from "./Components/15CountIncrementClassComp";
import CountIncrementFunComp from "./Components/16CountIncrementFunCOmp";
import PropsFunComp from "./Components/17PropsFunComDefault";
import ImageCheckFunComp from "./Components/18ImageCheckFunComp";
import MessageFunCOmp from "./Components/19MessageFunCOmp";
import RegistrationForm from "./Components/20RegistrationForm.jsx";
import MyForm from "./Components/21RegisMultipleFormComp.jsx";
import EmployeeFormByTarun from "./Components/22EmployeeFormFunComp.jsx";
import CounterUseReducer from "./Components/23CounterUseReducer.jsx";
import StyleComp from "./Components/26ChangeStylinFunComp.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import BootStrapStylingFunComp from "./Components/25BootStrapStylingFunComp.jsx";
import DynamicStylingFunComp from "./Components/27DynamicStylingFunComp.jsx";
import MountingPhase from "./Components/28MountingPhase.jsx";
import UdpadtingPhase from "./Components/29UdpadtingPhase.jsx";
import MessageComponent from "./Components/31MessageComp.jsx";
import UseEffect from "./Components/30UseEffect.jsx";
import UseEffect2 from "./Components/33UseEffect2.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <img src={logo} className="App-logo" alt="logo" />
              <p>hello from the world of coding</p>
              <a className = "App-link" href = "https://reactjs.org" target = "_blank" rel = "noopenernoreferrer" > {/*target="_blank" rel="noopenernoreferrer"HTML attribute commonly used in anchor (<a>) tags to open a link in a new browser tab  Learn React
              </a>
              <HelloClassComp/>
              <HelloFunComp/>
              <ImageComp/>
              <ImageFunComp/>
              <TimeDate/> 
              <FactClassComp num ={7}/>
              <FactFunComp num={5}/>
              <ArrayNameClassComp names={["A","B","C","D"]}/>
              <ArrayNameFunComp names={["Ashu","Ankit","Ram","Mohan"]} />
              <FactorialFunComp number={5} message="Calculate Factorial of fun based Comp : " />
              <EmpFunComp empid="101" ename="Amit" age="22" sal="200000"/>
              <CountIncrementClassComp />
              <CountIncrementFunComp />
              <PropsFunComp />
              <ImageCheckFunComp />
              <MessageFunCOmp/>
              <App/>
              <RegistrationForm />
              <MyForm />
              <EmployeeFormByTarun />
              <CounterUseReducer />  
              <StyleComp />
              <BootStrapStylingFunComp />
              <DynamicStylingFunComp />
              
              <MountingPhase />
    <UdpadtingPhase />
    <MessageComponent message={"Faisal Rathore"}/>
    <UseEffect />*/}
    <UseEffect2 />
  </React.StrictMode>
);
