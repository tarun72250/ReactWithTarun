import {createSlice} from '@reduxjs/toolkit';
//1.
 const cartSlice = createSlice({
    name : "Cart" ,//slice name 
    initialState :[] , //isme kuch item anne vale hai
    reducers :{//iske ander hm reducers banne vale hai , ek cart ke reducers ky ho skte hai 
        //cart me item ko add krna 
        //addItem which is a fn , which initialized some initialState and action
        addItem: (state, action) => { //state hmare khali array hai means initialState :[]
            //let say jab hm is addItem() ko call krege 
            //phele k item hai unke to daluga hi baki new item ko add karuga hmare state me 
            //or new item action.payload ko last me dal dia 
            //then iss cart ko export krdege
            state.push(action.payload);
        }

    }
 })

//2.
export const { addItem } = cartSlice.actions; 


 //1.
 //hame ky export krna h yaha 
 // cartSlice.reducer;
 export default cartSlice.reducer;