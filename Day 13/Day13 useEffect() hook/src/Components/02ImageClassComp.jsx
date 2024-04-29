import React from "react";
import Pic from "../Images/img2.jpg";

class ImageComp extends React.Component
{
    render()
    {
        return(
            <>
                <h2>Hello From Image Class Comp</h2>
                <img src={Pic}/>
                
            </>
        )
    }
} 

export default ImageComp;