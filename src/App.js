import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Login from './component/login/login';
import Registration from './component/login/registration';
import LeafMap from "./component/map/map";
import Navbar from "./component/navbar/navbar";
import PhotoUploader from "./component/photo/photoUploader";
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                    <div className="container-md">
                    <BrowserRouter>
                        <Switch>
                            <Route path="/login" component={Login}/>
                            <Route path="/registration" component={Registration}/>
                            <Route path="/map" component={LeafMap}/>
                            <Route path="/uploader" component={PhotoUploader}/>
                        </Switch>
                    </BrowserRouter>
                    </div>
            </div>

        );
    }
}

export default App;
