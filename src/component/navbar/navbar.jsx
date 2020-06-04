import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Redirect} from "react-router";

class Navbar extends Component {

    renderRedirect = () => {
        return <Redirect to="/login"/>
    };

    render() {
        return (
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
                            <a className="nav-link" href="/statement">Bejelentés</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Bejelentett</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Szemétszedés</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                    <a href="/login">Login</a>
                    </span>
                </div>
            </nav>
        )
    }

}

export default Navbar