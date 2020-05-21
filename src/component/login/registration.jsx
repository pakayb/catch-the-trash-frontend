import React, {Component} from "react";
import axios from "axios";

class Registration extends Component{

    state = {
        username : "",
        password : "",
        email : ""
    }

    usernameOnChange = (event) => {
        this.setState({username: event.target.value})
    }

    passwordOnChange = (event) => {
        this.setState({password:event.target.value})
    }

    emailOnChange = (event) => {
        this.setState({email: event.target.value})
    }

    registration = () => {
        axios.post("http://localhost:8080/registration", {
            username : this.state.username,
            password : this.state.password,
            email : this.state.email
        }).then((response) => {
            console.log(response);
        }).catch((e)=>{
            console.log(e.message);
        })
    }

    render(){
        return(
            <div>
                <span>Username</span>
                <input type="text" value={this.state.username} onChange={this.usernameOnChange} name="username" />

                <span>Password</span>
                <input type="password" value={this.state.password} onChange={this.passwordOnChange} name="password" />

                <span>E-mail</span>
                <input type="email" value={this.state.email} name="email" onChange={this.emailOnChange} />

                <button onClick={this.registration} >Registration</button>
            </div>
        )
    }
}
export default Registration;