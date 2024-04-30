import React, { Component } from "react";

export default class TimeDateClassComp extends Component {
  dt = new Date();
  render() {
    return (
      <div>
        <h1>Date : {this.dt.toDateString()}</h1>
      </div>
    );
  }
}
