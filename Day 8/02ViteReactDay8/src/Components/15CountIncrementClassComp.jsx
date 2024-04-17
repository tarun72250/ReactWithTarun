import React from "react";
class CountIncrementClassComp extends React.Component{

    constructor(props)
    {
        super(props)
        this.state ={
            count : 0
        }
    }

    render()
    {
        return(
            <div>
                <h1>Class Based Count Increment Comp</h1>
                <p>Count : {this.state.count}</p>

                <button onClick={ () => {this.setState({count : this.state.count +1 })} }> Increment </button>
                <button onClick={ ()=>{this.setState({count : this.state.count-1 })} }> Decrement </button>
            </div>
        )
    }

}

export default CountIncrementClassComp;