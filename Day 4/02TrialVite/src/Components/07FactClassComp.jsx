import React from "react";

class FactClassComp extends React.Component{

    render()
    {

        const n = this.props.num;
        let fact = 1;
        for(let i=1 ; i<=n ; i++)
        {
            fact = fact * i;
        }
        return(
            <>
                <h1>Factorial by Class Based Comp if {n} is : {fact} </h1>
            </>
        )
    }
}

export default FactClassComp;