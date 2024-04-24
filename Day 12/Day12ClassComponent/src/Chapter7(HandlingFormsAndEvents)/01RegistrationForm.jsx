import React, { Component } from 'react';

class RegistrationForm extends Component {
  
  
    state = {
    emailid: '',
  };

  handleInput = (e) => {
    const email = e.target.value;
    this.setState({ emailid: email });
  }

  render() {
    return (
      <div>
        <p>Registration Form</p>
        <form>
          <label>Enter emailid: </label>
          <input
            type="text"
            name="emailid"
            value={this.state.emailid}
            onChange={this.handleInput}
          />
          <br />
        </form>
      </div>
    );
  }
}

export default RegistrationForm;