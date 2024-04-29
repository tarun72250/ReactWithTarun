//Chapter =8   Assignment-1
import React, { Component } from "react";

// Assignment 1 chapter =8:- Display message from props
class MessageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Tarun Rathore",
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.message !== state.message) 
    {
      return {
        message: props.message,
      };
    }
    else
    {
    return null;
    }
  }

  render() {

    const {message} = this.state;
    
    return (
      <>
        <h1>Message Component</h1>
        <ul>
          <li>{message}</li>
        </ul>
      </>
    );
  }
}
export default MessageComponent;
