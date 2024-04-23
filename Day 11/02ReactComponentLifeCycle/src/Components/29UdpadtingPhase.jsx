import React, { Component } from "react";

export default class UdpadtingPhase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
    };
  }

  //1 always called from before and after state updated
//   static getDerivedStateFromProps = () => {
//     return { color: "blue" };
//   };

  //2 shouldComponentUpdate() this () is used in rare scenario

  //3
  render() {
    return (
      <>
        <h1>Fav Color : {this.state.color}</h1>
        <button
          onClick={() => {
            this.setState({ color: "yellow" });
          }}>
          Click To Change Color
        </button>
      </>
    );
  }

  //4 before update
  getSnapshotBeforeUpdate = (prevP, prevS) => {
    console.log("before update :" + prevS.color);
    return null;
    //simply return null not modified actual state of comp which is defined in constructor
  };

  //5 after update
  componentDidUpdate =()=>{
    console.log("after update:"+this.state.color);
  }
}
