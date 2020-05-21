import Rect, {Component} from "react";
import axios from "axios";

class Login extends Component{

    state = {
        username : "",
        password : "",
    }

    usernameOnChange = (event) => {
        this.setState({ username : event.target.value})
    }

    passwordOnChange = (event) => {
        this.setState({ password : event.target.value})
    }

    login = () => {
        axios.post("http://localhost:8080/login", {
            username : this.state.username,
            password : this.state.password 
        }).then((response) =>{
        console.log(response);
        }).catch((e)=>{
            console.log(e.message);
        })
    }

    render(){
        return(
            <div>
                <span>username</span>
                <input type="text" onChange={this.usernameOnChange} name="username" value={this.state.username}/>

                <span>password</span>
                <input type="password" onChange={this.passwordOnChange} name="password" value={this.state.password}/>

                <button onClick={this.login}>Login</button>
            </div>
        )
    }

}
export default Login;