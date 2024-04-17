import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import logo from './logo.svg';
import HelloClassComp from './Components/01HelloClassComp.jsx'
import HelloFunComp from './Components/01HelloFunComp.jsx'
import ImageComp from './Components/02ImageClassComp';
import ImageFunComp from './Components/02ImageFunComp';
import TimeDate from './Components/05TimeDateFun';
import FactClassComp from './Components/07FactClassComp';
import FactFunComp from './Components/08FactFunComp';
import ArrayNameClassComp from './Components/09ArrayNameClassCOmp';
import ArrayNameFunComp from './Components/10ArrayNameFunCOmp';
import FactorialClassClaculater from './Components/11FactorialCalculaterClassComp';
import FactorialFunComp from './Components/12FactorialCalculaterFunComp';
import EmpFunComp from './Components/14EmpFunComp';
import CountIncrementClassComp from './Components/15CountIncrementClassComp';
import CountIncrementFunComp from './Components/16CountIncrementFunCOmp';
import PropsFunComp from './Components/17PropsFunComDefault';
import ImageCheckFunComp from './Components/18ImageCheckFunComp';
import MessageFunCOmp from './Components/19MessageFunCOmp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
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
              <MessageFunCOmp/>*/}
              <App/>
  </React.StrictMode>,
)
