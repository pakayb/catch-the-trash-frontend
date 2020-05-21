import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Login from './component/login/login';
import Registration from './component/login/registration';

class App extends Component {
  render(){
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/registration" component={Registration}/>
        </Switch>
      </BrowserRouter>
    </div>
    
  );
}
}

export default App;
