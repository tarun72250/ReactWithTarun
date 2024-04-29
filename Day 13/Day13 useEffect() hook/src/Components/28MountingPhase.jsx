import React, { Component } from "react";

export default class MountingPhase extends Component {
  //1 gets claled only once , render comp initialState
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
    };
  }

   //2 gets called before render but every ender
  static getDerivedStateFromProps = () => {
    return { color: "blue" };
  };

  //3 display UI part
  render() {
    return (
      <>
        <h1>Fav Color :{this.state.color}</h1>
      </>
    );
  }

  //4 gets called after render ,server interaction
  componentDidMount = () => {
    this.setState({ color: "green" });
  };


}
