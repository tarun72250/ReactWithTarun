import React from "react";
import ArrayNameFunComp from "./10ArrayNameFunCOmp";
import HelloFunComp from "./01HelloFunComp";

class ArrayNameClassComp extends React.Component{

//Arrow Fun Used
    render()
    {
        return(
            <>
                <ul>
                    {this.props.names.map((name,index) =>(
                        <li key={index}> {name}</li>
                    ))}
                </ul>
            <HelloFunComp/>
            </>
        )
    }
}
export default ArrayNameClassComp;