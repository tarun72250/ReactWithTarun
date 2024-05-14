//Make some feild input
//get data from input feild
//Check some Validation
//Show Validation error message

import React, { Component } from 'react'

export default class FormValidation extends Component {

    constructor()
    {
        super()
        this.state={
            name : "",
            password : "",
            nameError:"",
            passwordError:""
        }
    }

    valid()
    {
        if(!this.state.name.includes("/^[A-Z][a-z][@]{2,15}$/") && this.state.password.length == "/^[0-9]{4,6}$")
        {
            this.setState({nameError:"First letter capital , userid length should be 2-15", passwordError:"Password length should be more than 4-6"})
        }
        else if(!this.state.name.includes("@"))
        {
            this.setState({nameError:"Invalid name"})
        }
        else if( this.state.password.length < 5)
        {
            this.setState({passwordError:"Password length should be more than 5"})
        }
        else
        {
            return true;
        }
    }
    submit()
    {
        this.setState(
            {
                nameError :"",passwordError:""
            }
        )

        if(this.valid())
        {
                alert("form has been submitted...!");
        }

    }
  render() {
    return (
      <>
        <h1>Form validation</h1>
        
        <input type='text' onChange={(e)=>this.setState({name : e.target.value})}/>
        <p style={{color:"red", fontSize:"14px"}}>{this.state.nameError}</p>
        
        <input type='password' onChange={(e)=>this.setState({password : e.target.value})}/>
        <p style={{color:"red", fontSize:"14px"}}>{this.state.passwordError}</p>
        
        <button onClick={()=>this.submit()}>Submit</button>
      </>
    )
  }
}
