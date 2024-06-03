import React from "react";
//4.
import { addItem } from "../redux/slices/cartSlice";

//1
import { useDispatch } from "react-redux";

const Product = (props) => {
   //2.
   const dispatch =  useDispatch();

  return (
    <div className="card" style={{ width: "18rem;", margin: "10px" }}>
      <img className="card-img-top" src={props.image} alt={props.productName} />
      <div className="card-body">
        <h5 className="card-title">{props.productName}</h5>
        <p className="card-text">Rs. {props.price}/-</p>
        {/* 3. dispatch me hame action chahiye vo hm cartSlice.jsx (export const { addItem } = cartSlice.actions; )jo export kia h vo leker ayge import krege yha Product.jsx me  */}
           
       
        <button onClick={e => dispatch(addItem({ name :props.productName , price : props.price}))} className="btn btn-primary"> Add to cart </button>
        
      </div>
    </div>
  );
};

export default Product;
