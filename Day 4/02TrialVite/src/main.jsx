import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Tarun from './Tarun.jsx'
import HelloClassComp from './Components/01HelloClassComp.jsx'
import HelloFunComp from './Components/02HelloFunComp.jsx'
import ImageClassComp from './Components/03ImageClassComp.jsx'
import ImageFunComp from './Components/04ImageFunComp.jsx'
import TimeDate from './Components/06TimeDateFunComp.jsx'
import TimeDateClassComp from './Components/05TimeDateClassComp.jsx'
import FactClassComp from './Components/07FactClassComp.jsx'
import Fact from './Components/08FactFunComp.jsx'
import FactArrowFun from './Components/08FactFunComp.jsx'
import ArrayName from './Components/09ArrayName.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    {/* <App/>
    <Tarun/> 
    <HelloClassComp/>
    <HelloFunComp/>
    <ImageClassComp/>
    <ImageFunComp/>
    <TimeDate/>
    <TimeDateClassComp/>
    <FactClassComp num={5}/>
    <Fact num={5}/>
    <FactArrowFun n ={5}/>*/}
    <ArrayName names={["manas","abhinav","kapil","nikhil"]}/>
   
  </React.StrictMode>,

)
