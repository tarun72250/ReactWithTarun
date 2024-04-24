import React from "react";

class MessageClassComp extends React.Component{

    constructor(props){
        super(props);
        this.state={message:"Welcome"};
    }

    changeMessage =() =>
    {
        this.setState({
            message:this.state.message === "Welcome"?"Hello":"Welcome"
        });
    }

    resetMessage =() =>
    {
        this.setState({
            message:"Welcome"
        });
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.setState({message:"Hello"})}>Change Message to Hello </button>
                <button onClick={this.changeMessage}>Change Message</button>
                <button onClick={this.resetMessage}>Change to original Message state</button>
                
            </div>
        )
    }
}

export default MessageClassComp;