import React, { Component } from 'react';

// Assignment 1 chapter =8:- Display message from props 
class MessageComponent extends Component {
 
    constructor(props) {
    super(props);
    this.state ={
      message: 'Initial message from constructor'
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.message !== state.message) {
      return {
        message: props.message
      };
    }
    //simply return null not modified actual state of comp which is defined in constructor
    //that y class comp are statefull because it have some to maintain the state not update directly 
    return null;
  }

  render() {
    const { message } = this.state;

    return (
      <div>
        <h2>Message Component</h2>
        <ul>
          <li>{message}</li>
        </ul>
      </div>
    );
  }
}
 export default MessageComponent;