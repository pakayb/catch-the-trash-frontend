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
        axios.post(`http://localhost:8080/auth/signin`,
            {
                username: this.state.username,
                password: this.state.password
            }
        ).then(resp => {
            console.log(resp.data);
            localStorage.setItem("token", resp.data.token);
            this.setState({redirect: true});
        }).catch((e) => {
            console.log(e.message)
        })

    };

    render() {
        return (
            <div className="container" style={{marginLeft: "auto", marginRight: "auto", marginTop: "5%", width: "28rem"}}>
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address/Username</label>
                                <input type="text" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" onChange={this.usernameOnChange} value={this.state.username}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={this.passwordOnChange} value={this.state.password}/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Stay logged in</label>
                            </div>
                            <button className="btn btn-dark" onClick={this.login}>Login</button>
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
