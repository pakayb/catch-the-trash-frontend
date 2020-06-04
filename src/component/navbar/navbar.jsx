import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Redirect} from "react-router";

class Navbar extends Component{




    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">CTT</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Bejelentés</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Bejelentett</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Szemétszedés</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                            <button className="btn btn-outline-success my-2 my-sm-0">Login</button>
                    </form>
                </div>
            </nav>
        )
    }

}
export default Navbar