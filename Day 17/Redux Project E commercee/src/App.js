import products from "./products.json";
import "./App.css";
import Product from "./Components/Product";
import Cart from "./Components/Cart";

function App() {

 
  return (
    <div className="App">
      <Cart />
      <div className="products">
        {products.map((product) => (
          <Product {...product} />
        ))}
      </div>
    </div>
  );
}

export default App;


//1. install dep (npm install react-redux)
//2. another dep (npm install react-redux @reduxjs/toolkit)
//3. i will make use of  @reduxjs/toolkit
//4. make store so create redux folder and file store.js
//5. hmne phele store banne k lie creatStore() k use kia that 
//6. now in store.js import {configureStore} from '@reduxjs/toolkit' 
//7. abhi ham store ko export krke usme kuch key rakhne vale hai like reducer we have passed in previous project 
//8. but toolkit itna easy nhi hota use ham slices bnate hai 
//9. every features is there is a slices 
//10. in redux create one folder slices
//11. slice ky hota hai manlo cart me bhot sare features hai like search chat or scrool down to u create every slice for every features
//12. in slices create one file cartSlice.js or (import {createSlice} from '@reduxjs/toolkit';) then goto cartSlice.js
//13. in store.js import cartSlice from './slices/cartSlice'
//14. abhi index.js me me provider se store ko access krna hai 
//15. in index.js 
//16. selector k kam mjhe krna hai cart.js me 
//17. in Cart.js 
//18. in cartSlice.jsx add (export const { addItem } = cartSlice.actions; )
//19. in app.js mere pass ek <product/> comp hai 
//20. so Product.jsx me <button> hai 
//21. jese hi button p click karu , i want to run that action (add Item) me usko dispatch karu 
//22. in Product.js me import (import { useDispatch } from "react-redux";)
//23. ab hame card ko update krna hai or items ko display krna hai 
//24. in cart.jsx final changes 