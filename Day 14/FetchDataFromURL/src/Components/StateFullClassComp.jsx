import React, { Component } from 'react'

export default class StateFulClassComp extends Component {
  
  constructor(props){
    super(props);
    this.state={
        count : 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick()
  {
    this.setState({count:this.state.count + 1})
  }
    render() {
    return (
      <>
              <p>By Class Comp</p>
        <h1>Count :{this.state.count}</h1>
        <button onClick={()=>{this.handleClick()}}> Increment</button>
        <button onClick={() => {this.setState({count : this.state.count + 1})}}> Increment </button>
        <button onClick={() => {this.setState({count : this.state.count - 1})}}> Decrement </button>
      </>
    )
  }
}
