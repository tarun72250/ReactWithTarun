import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from "react-dom/client";
import {Image , DogCard } from "./Cards/01DogCard.jsx";
import App from "./App.jsx";
import Tarun from "./Tarun.jsx";
import HelloClassComp from "./Components/01HelloClassComp.jsx";
import HelloFunComp from "./Components/02HelloFunComp.jsx";
import ImageClassComp from "./Components/03ImageClassComp.jsx";
import ImageFunComp from "./Components/04ImageFunComp.jsx";
import TimeDateFunComp from "./Components/06TimeDateFunComp.jsx";
import TimeDateClassComp from "./Components/05TimeDateClassComp.jsx";
import FactClassComp from "./Components/07FactClassComp.jsx";
import Fact from "./Components/08FactFunComp.jsx";
import FactArrowFun from "./Components/08FactFunComp.jsx";
import ArrayNameClassComp from "./Components/09ArrayNameClassComp.jsx";
import ArrayName from "./Components/10ArrayNameFunComp.jsx";
import Aname from "./Components/10ArrayNameFunComp.jsx";
import FactorialClassCalculater from "./Components/11FactorialClassComp.jsx";
import FactorialFunCalculater from "./Components/12FactorialFunComp.jsx";
import ArrayOfNamesClassComp from "./Components/13ArrayOfNamesClassComp.jsx";
import ArrayFunComp from "./Components/14ArrayOfNamesFunComp.jsx";
import EmpClassComp from "./Components/15EmployeeClassComp.jsx";
import EmpFuncComp from "./Components/16EmployeeFunComp.jsx";
import MessageClassComp from "./Components/17MessageClassComp.jsx";
import MessageFunComp from "./Components/18MessageFunComp.jsx";
import ChangetextColorClassComp from "./Components/19ChangeTextColorClassComp.jsx";
import ChangeTextColorFunComp from "./Components/20ChangeTextColorFunComp.jsx";
import CountIncreaseClassComp from "./Components/21CountIncreaseClassComp.jsx";
import CountIncreaseFunComp from "./Components/22CountIncreaseFunComp.jsx";
import ImageCheckFunComp from "./Components/23ImageCheckFunComp.jsx";
import StudentList from "./Components/24StudentList";
import BootStrapStylingFunComp from "./Components/25BootStrapStylingFunComp";
import StyleComp from "./Components/26ChangeStyleFunComp";
import LoginUseReducer from "./Components/28LoginUseReducer";
import CounterUseReducer from "./Components/27CounterUseReducer";
import MountingPhase from "./Components/29MountingPhase";
import UpdatingPhase from "./Components/30UpdatingPhase";
import UsingEffect from "./Components/31UsingEffect";
import PropsFunComp from "./Components/PropsFunComp";
import StateFulClassComp from "./Components/StateFullClassComp";
import StateLessFunComp from "./Components/StateLessFunComp";
import MessageComponent from "./Components/32DisplayMessageClassComp";
import ColorComponent from "./Components/33LifeCycleCallBacksClassComp";
import TimeComponent from "./Components/34DisplayTimeUsingUseEffect";
import UsingUseEffectExample from "./Components/35UsingUseEffectExample";
import { BrowserRouter, Link, Route } from "react-router-dom";
import RegistrationForm from "./Chapter7(HandlingFormsAndEvents)/01RegistrationForm";
import MyForm from "./Chapter7(HandlingFormsAndEvents)/02RegistrationFromMultipleClassComp";
import DynamicStyling from "./Components/26DynamicStylingFunComp";
import EmployeeFormByTarun from "./Chapter7(HandlingFormsAndEvents)/03EmployeeFromFunComp";
import GetDummyComp1 from "./Components/36GetDummyDataFetchUseEffect()";
import GetDummyComp2 from "./Components/37GetDummyData";
import FetchDataFromAPI from "./Components/38FetchDataFromApi";

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <React.StrictMode>
     <BrowserRouter >
            {/* <App/>
            <Tarun/> 
            <HelloClassComp/>
            <HelloFunComp/>
            <ImageClassComp/>
            <ImageFunComp/>
            <TimeDateClassComp/>
            <TimeDateFunComp/>
            <FactClassComp num={5}/>
            <Fact num={5}/>
            <FactArrowFun n ={5}/>
            <ArrayName names={["manas", "abhinav", "kapil", "nikhil"]} />
            <Aname names={["Tarun", "Rathore", "Debugshala"]} />
            <ArrayNameClassComp ps={{ names: ["a", "b", "c", "d"] }} />
            <FactorialCalculater number={5} />   
            <FactorialFunComp number={5}/>
            <FactorialClassCalculater number={5}/>
            <ArrayOfNamesClassComp names={["a","b","c","d"]} />
            <ArrayFunComp names={["A","B","B","C"]}/>
            <EmpClassComp empid="101" ename="Tarun" age="22" sal="800000"/>  
            <MessageClassComp /> 
            <MessageFunComp/>
            <ChangetextColorClassComp />
            <ChangeTextColorFunComp/>
            <CountIncreaseClassComp/>
            <CountIncreaseFunComp/>
            <ImageCheckFunComp/>
            <StudentList />
            <FactorialFunCalculater number={5}/>  
            <BootStrapStylingFunComp />
            <StyleComp /> 
            <CounterUseReducer /> 
            <LoginUseReducer/>
            <MountingPhase />
            <UpdatingPhase/>
            <App />
            <PropsFunComp />
            <StateFulClassComp/>
            <StateLessFunComp/>
            <UsingEffect />
            
            <MessageComponent message="Message from props"/>
            <ColorComponent />
            <TimeComponent /> 
            <UsingUseEffectExample />
            <RegistrationForm />
            <MyForm />
            <DynamicStyling />
            <CounterUseReducer />
            <EmployeeFormByTarun />
            <UsingUseEffectExample/>
            <UsingEffect />
            <GetDummyComp1 />
            <GetDummyComp2 />
            <FetchDataFromAPI />
           
          */}
         
            {/* <UsingUseEffectExample /> */}
            {/*<ul className="nav navbar">
                <li className="nav-item">
                  <div className="nav-link">
                    <Link to="/Home"> Home </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link">
                    <Link to="/About"> About </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link">
                    <Link to="/Contact"> Contact </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link">
                    <Link to="/DisplayTime"> Display Time Component</Link>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link">
                    <Link to="/TimeDate"> Time Date and Component </Link>
                  </div>
                </li>
            </ul>

            <Routes>
                <Route path="/" element={<HelloFunComp/>}/>
                <Route path="/TimeDate" element={<TimeDateFunComp/>}/>
                <Route path="/DisplayTime" element={<TimeDateFunComp/>}/>
                <Route path="*" element={<InvalidURL/>}/>
          </Routes>*/}
      </BrowserRouter>
  </React.StrictMode>
 
);
