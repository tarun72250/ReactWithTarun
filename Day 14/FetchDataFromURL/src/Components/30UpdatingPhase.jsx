import React, { Component } from "react";
//component state gets updated and re-rendered in comp
export default class UpdatingPhase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
    };
  }

  //1 always called from before and after state updated
  static getDerivedStateFromProps = () => {
    return { color: "blue" }; //to return the object
  };

  //2 shouldComponentUpdate //return boolean    we avoid that method , in rare cases uses that method

  //4
  getSnapshotBeforeUpdate = (prevP, prevS) => {
    console.log("before update : " + prevS.color); //before update
    return null;
    //simply return null not modified actual state of comp which is defined in constructor
    //that y class comp are statefull because it have some to maintain the state not update directly
  };

  //5
  componentDidUpdate = (prevP, prevS) => {
    console.log("After Update : " + this.state.color); //after update
  };

  //3
  render() {
    return (
      <>
        <h1>
          <p>Fav Color :{this.state.color}</p>
        </h1>
        <button
          onClick={() => {
            this.setState({ color: "yellow" });
          }}>
          Click to changes
        </button>
      </>
    );
  }
}
