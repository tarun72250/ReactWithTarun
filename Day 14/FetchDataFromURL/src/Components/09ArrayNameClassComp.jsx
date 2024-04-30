import React from "react";
class ArrayNameClassComp extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ArrayNameClassComp;
