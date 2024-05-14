import products from "./products.json";
import "./App.css";
import Product from "./Components/Products";
import Cart from "./Components/Cart";
import FormValidation from "./Components/BasicFormValidation";
import HardFormValidation from "./Components/HardFormValidation";
import UseRefDemo from "./Components/UseRefDemo";

function App() {
  return (
    <div className="App">
       {/* <Cart />
      <div className="products">
        {products.map((product) => (
          <Product {...product} />
        ))}
      </div>  */}
      {/* <FormValidation /> 
      <HardFormValidation /> 
      <UseRefDemo />*/}
      <HardFormValidation />
    </div>
  );
}

export default App;

//install dep (npm install react-redux)
//npm i react-redux @reduxjs/toolkit
//create two normal comp Cart.jsx and Product.jsx
//