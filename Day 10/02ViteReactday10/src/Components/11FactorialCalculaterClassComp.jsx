//before learning this understand class based architecture of component
//but ater these we will not used class based comp as of no used further because iit is too complex to write.

import React from"react";

class FactorialClassClaculater extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            factorial : this.calFact(props.number)
        }
    }


    calFact =(n)=>
    {
        if(n===0 || n === 1)
        {
            return 1;
        }
        else
        {
            return n * this.calFact(n -1);
        }
    }

    render()
    {
        const {number} =this.props;
        const {factorial} = this.state;
        return(
            <h1>Factorial  by Class Based Comp of {number} is : {factorial} </h1>

        )
    }
}

export default FactorialClassClaculater

