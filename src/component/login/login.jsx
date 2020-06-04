import React, {Component} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

class Login extends Component {
    state = {
        username: "",
        password: "",
    };

    usernameOnChange = (event) => {
        this.setState({username: event.target.value});
    };

    passwordOnChange = (event) => {
        this.setState({password: event.target.value});
    };

    login = () => {
        axios
            .post("http://localhost:8080/login", {
                username: this.state.username,
                password: this.state.password,
            })
            .then((response) => {
                console.log(response);
            })
            .catch((e) => {
                console.log(e.message);
            });
    };

    render() {
        return (
            <div className="container" style={{marginLeft: "auto", marginRight: "auto", marginTop: "5%", width: "28rem"}}>
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp"/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                    anyone
                                    else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-dark">Login</button>
                        </form>
                    </div>
                    <div className="card-footer text-muted">
                        <span>If you don't registered yet <a href="/registration">click here!</a></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
