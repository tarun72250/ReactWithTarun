import React from "react";
//component has mounted(inserted/added) on Node Tree
export default class MountingPhase extends React.Component {
  //1 Constructor gets called only once and purpose to initialized state
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
    };
  }

  //2 gets called before every render , this is static fn
  // static getDerivedStateFromProps=()=>{
  //     return {color: "blue"}  //to return the object
  // }

  //3 displaying the UI or again and again rendering
  render() {
    return (
      <div>
        <h1>
          <p> Fav color : {this.state.color}</p>
        </h1>
      </div>
    );
  }

  //4 gets called after comp get mounted for permissing any server interaction or loading data  from your class component
  //setting some refreshes through this component use
  //(setTimeout(),setInterval()) , (clearTimeOut(),clearTimeInterval())

  // componentDidMount=()=>{
  //     //call to server side API
  //     //modify state and re-render
  //     this.setState({color: "green"});
  // }
}
