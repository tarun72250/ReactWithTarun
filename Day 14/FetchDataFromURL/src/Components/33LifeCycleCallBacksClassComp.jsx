// Assignment 2: Lifecycle callbacks for color change

import React from "react";
class ColorComponent extends React.Component {
   
    constructor(props) {
      super(props);
      // Initialize state with a default color
      this.state = {
        color: 'red'
      };
    }
  
    // Lifecycle method called after the component is mounted
    componentDidMount() {
      console.log('Component mounted');
    }
  
    // Lifecycle method called after the component's state or props are updated
    componentDidUpdate(prevProps, prevState) {
      console.log('Component updated');
      console.log('Previous color:', prevState.color);
      console.log('Current color:', this.state.color);
    }
  
    // Lifecycle method called before the component is unmounted
    componentWillUnmount() {
      console.log('Component will unmount');
    }
  
    // Function to handle color change on button click
    handleColorChange = () => {
      // Toggle between red and blue colors
      const newColor = this.state.color === 'red' ? 'blue' : 'red';
      // Update the color state
      this.setState({ color: newColor });
    }
  
    render() {
      // Render the component with the current color state
      return (
        <div>
          <h2>Color Component</h2>
          {/* Display a colored box based on the current color state */}
          <div style={{ backgroundColor: this.state.color, padding: '20px', margin: '10px' }}>
            Color: {this.state.color}
          </div>
          {/* Button to trigger color change */}
          <button onClick={this.handleColorChange}>Change Color</button>
        </div>
      );
    }
  }
  
  export default ColorComponent;
