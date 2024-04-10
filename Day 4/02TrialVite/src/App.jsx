import logo from './logo.svg';
import HelloClassComp from './Components/01HelloClassComp.jsx'
import HelloFunComp from './Components/01HelloFunComp.jsx'
import ImageComp from './Components/02ImageClassComp';
import ImageFunComp from './Components/02ImageFunComp';
import TimeDate from './Components/05TimeDateFun';
import FactClassComp from './Components/07FactClassComp';
import FactFunComp from './Components/08FactFunComp';

function App() {
  return (
    <>
     <div className = "App" >
     <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" />
              <p>hello from the world of coding</p>
              <a className = "App-link" href = "https://reactjs.org" target = "_blank" rel = "noopenernoreferrer" > {/*target="_blank" rel="noopenernoreferrer"HTML attribute commonly used in anchor (<a>) tags to open a link in a new browser tab  Learn React
              </a>
              <HelloClassComp/>
              <HelloFunComp/>
              <ImageComp/>
              <ImageFunComp/>
              <TimeDate/> 
              <FactClassComp num ={7}/>*/}
              <FactFunComp num={5}/>
              
     </header>
    </div>
    </>
  )
}
export default App
