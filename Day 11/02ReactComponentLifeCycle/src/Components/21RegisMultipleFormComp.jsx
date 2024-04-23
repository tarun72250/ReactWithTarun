import React from 'react';


class MyForm extends React.Component{

    constructor(props)
    {
        super(props);
        this.state ={
            emailid : '',
            gender : '',
            flag : false
        }
        this.handleInput = this.handleInput.bind(this);
        this.submitForm = this.submitForm.bind(this)
    }

    handleInput(e){
        const input = e.target;
        const nm = input.name;
        let val ;

        if(input.type === 'checkbox')
        {
                val = input.checked;
        }
        else
        {
                val = input.value;
        }

        this.setState({[nm] : val })
    }

    submitForm(e)
    {
        e.preventDefault();
        //handle form submission here
        alert("Successfully Form Submitted");
        console.log(this.state);
    }

    render()
    {
        return(
            <>
                 <h1>Registration Form</h1>
                <form onSubmit={this.submitForm}>
                      <label htmlFor='emailid'>Enter Email id :</label>
                            <input  type="text" name="emailid" value={this.state.emailid} onChange={this.handleInput} />
                      <br/> 
                      <label> Select Gender :</label>
                            <input type="radio" onChange={this.handleInput} name="gender" value="male" />Male  
                            <input type="radio" onChange={this.handleInput} name="gender" value="female" />Female
                      <br/>
                            <input type="checkbox" name="flag" onChange={this.handleInput}/>{' '}I agree
                      <br/> 
                            <input type="submit" value="Register"/>
                </form>
            </>
        )
    }
}

export default MyForm;