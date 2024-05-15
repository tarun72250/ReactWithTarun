import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <div className="App">
      {/* <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/testimonial" element={<Testimonial />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/footer" element={<Footer />}/>
       </Routes> */}
         
          <Home />
          <About/>
          <Work />
          <Testimonial />
          <Contact />
          <Footer /> 
      
    </div>
    </>
  );
}

export default App;
//https: //www.youtube.com/watch?v=GVjIflROwJ4