import React ,{ Component } from "react";

class RegistrationForm extends Component{

    state ={
        emailid : ''
    }

    handleInput=(e)=>
    {
        const email = e.target.value;
        this.setState({emailid : email})
    }


    render()
    {
        return(
            <>
                <h1>Registration Form</h1>
                <form>
                      <label>Enter Email id :</label>
                        <input  type="text" name="emailid" value={this.state.emailid} onChange={this.handleInput} />
                        <br/>
                </form>
            </>
        )
    }

}
export default RegistrationForm;