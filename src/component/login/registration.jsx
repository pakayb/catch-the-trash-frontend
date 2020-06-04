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
            <div className="container" style={{marginLeft: "auto", marginRight: "auto", marginTop: "5%", width: "28rem"}}>
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" onChange={this.emailOnChange} value={this.state.email}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Username</label>
                                <input type="text" className="form-control" id="exampleInputUsername" onChange={this.usernameOnChange} value={this.state.username}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.passwordOnChange} value={this.state.password}/>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">I read terms & conditions!</label>
                            </div>
                            <button type="submit" className="btn btn-dark">Registration</button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
export default Registration;