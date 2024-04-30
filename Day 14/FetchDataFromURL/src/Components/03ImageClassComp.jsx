import pic from '../Images/img2.jpg'
import React from "react";

class ImageClassComp extends React.Component
{
    render()
    {
        return(
           <div>
            <h1>Hello From Class Image Component</h1>
            <img src={pic} height={200} width={200}/>
           </div>
        )
    }
}

export default ImageClassComp;



