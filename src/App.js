import React, {useState} from'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Login from './components/Login';
import Search from './components/Search';
import Collection from './components/Collection';
import SideBar from "./components/SideBar";

export default function App() {
    return (
      <div className="App">
        <Router>
          <div className="App">
            <SideBar className="SideBar" />
            <Login className = "login"/>
            <Switch>
              <Route exact path="/">
                <Search />
              </Route>
              <Route exact path="/Collection">
                <Collection />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
}





