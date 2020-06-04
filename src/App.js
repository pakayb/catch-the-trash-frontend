import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Login from './component/login/login';
import Registration from './component/login/registration';
import LeafMap from "./component/map/map";
import Navbar from "./component/navbar/navbar";
import PhotoUploader from "./component/photo/photoUploader";
import 'bootstrap/dist/css/bootstrap.css';
import StatementPage from "./component/pages/statementPage";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                    <div className="container-md" style={{marginTop: "30px"}}>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/login" component={Login}/>
                            <Route path="/registration" component={Registration}/>
                            <Route path="/statement" component={StatementPage}/>
                        </Switch>
                    </BrowserRouter>
                    </div>
            </div>

        );
    }
}

export default App;
