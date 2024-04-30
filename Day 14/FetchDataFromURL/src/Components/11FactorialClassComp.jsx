import React from "react";

class FactorialClassCalculater extends React.Component{

    constructor(props)
    {
        super(props);
        this.state ={
            factorial : this.calFact(props.number)
        }
    }
    
    calFact =(n)=>{
        if(n===0 || n===1)
        {
            return 1;
        }
        else
        {
            return n * this.calFact(n-1);
        }
    };

    render()
    {
        const {number} = this.props;
        const {factorial} = this.state;
       
        return(
            <h1>Factorial by Class Based Comp of {number} is :{factorial}</h1>

        )
    }
}

export default FactorialClassCalculater;