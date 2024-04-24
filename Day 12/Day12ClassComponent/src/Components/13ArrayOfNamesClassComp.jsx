import React, { Component } from 'react'

export default class ArrayOfNamesClassComp extends Component {
  render()
   {
    const names = this.props.names;

    return (
      <div>
            <h1>
                Name of the Array by Class Comp 
                <ul>{names.map((names,index)=><li key={index}>{names}</li>)}</ul>
            </h1>
      </div>
    )

  }
}
