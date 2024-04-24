import React, { Component } from 'react';

class MyForm extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      emailid: '',
      gender: '',
      flag: false
    };

    this.handleInput = this.handleInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleInput(e) {
    const input = e.target;
    const nm = input.name;
    let val;

    if (input.type === 'checkbox') 
    {
      val = input.checked;
    }
    else
    {
      val = input.value;
    }

    this.setState({ [nm]: val });
  }

  submitForm(e) {
    e.preventDefault();
    // Handle form submission here
    alert("Form is getting submitted");
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <label htmlFor="emailid">Enter emailid:</label>
        <input type="text" name="emailid" value={this.state.emailid} onChange={this.handleInput}/>
        <br />
        <label>Select gender:</label>
          <input type="radio" onChange={this.handleInput} name="gender" value="male"/>Male
          <input type="radio" onChange={this.handleInput} name="gender"value="female"/>Female
        <br />
        <input type="checkbox" name="flag" onChange={this.handleInput}/>{' '}I agree
        <br />
        <input type="submit" value="Register" />
      </form>
    );
  }
}

export default MyForm;