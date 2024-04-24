import React from "react";

class ChangetextColorClassComp extends React.Component {

  // Constructor method to initialize the component's state
  constructor(props) {
    super(props); // Call the constructor of the parent class (React.Component)
    
    // Initialize the state with a property 'flag' set to "black"
    this.state = {
      flag: "black"
    };

    // Binding the handleChange method to the current instance of the component
    this.handleChange = this.handleChange.bind(this);
  }

  // Method to handle changes in the input field
  handleChange(e) {
    // Update the 'flag' state with the new value entered in the input field
    this.setState({ flag: e.target.value });
  }

  // Render method to define the component's UI
  render() {
    return (
      <div>
        <h1>
          {/* Display "Tarun Rathore" with text color based on the 'flag' state */}
          <p style={{ color: this.state.flag }}> Tarun Rathore</p> 
          
          {/* Input field to allow users to change the text color */}
          <input 
            type="text" 
            name="c1" 
            value={this.state.flag} 
            onChange={this.handleChange} // Call handleChange method when input changes
          />
          <br/>

          {/* Display the current value of 'flag' */}
          <h1>{this.state.flag.toString()}</h1>
        </h1>
      </div>
    );
  }
}

export default ChangetextColorClassComp; // Export the component for use in other files
