import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import FecthData from "./Components/FecthData";
import ImageComp from "./Components/ImageComp";
import FetchDataAxiosPost from "../../../viteProjectReactRouter/src/Components/FetchDataAxiosPost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/education" element={<Education/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/fetchData" element={<FecthData/>}/>
      <Route path="/imageComp" element={<ImageComp/>}/>
      <Route path="/employeeForm" element={<FetchDataAxiosPost/>}/>
    </Routes>
  );
}

export default App;
//check in browser
//http://localhost:5173/about
//http://localhost:5173/contact