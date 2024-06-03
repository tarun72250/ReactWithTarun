import React from "react";
//1.
import {useSelector} from 'react-redux'

const Cart = () => {
  //2.
  const items = useSelector(state => state)
  //as it is items ko console.log() kr dete hai 
  
  //3.
  console.log('Items ', items);
  //then check in inspect items object ara hoga 
  //agar me store.jsx me cart ko cart1 krduga then check in inspect to cart1 ajyga console pe
  // thne cartSlice.jsx me initialState() me  initialState :["abc"] dal dege 
  //so that's how u can acces the state 
  //so app.jsx


  //4.
  const total = items.cart.reduce((a,b) => a + b.price , 0);

  return (
    <div className="alert alert-success">
      <h3 className="text-center">
      {/* Total Items:0  */}
        {/* 4. */}
        Total Items: {items.cart.length} ( Rs.{total})
      </h3>
    </div>
  );
};

export default Cart;
