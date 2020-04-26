import React from 'react';
import "./App.css";
import Logo from "./Logo"
import SideBar from "./SideBar"
import Search from "./Search"

import Login from "./Login"
import Profile from "./Profile"
import ChatRoom from "./ChatRoom"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
        <Router>
            <div className="SideBar"> 
            {/* <AppTabs className="testing" /> */}
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                
                <Route exact path="/Login">
                    <Login />
                </Route>

                <Route exact path="/Profile">
                    <Profile />
                </Route>

                <Route exact path="/ChatRoom">
                    <ChatRoom />
                </Route>

            </Switch>
            </div>
        </Router>
        <Logo />
        <SideBar/>
        <Search/>
    </div>
  );
  // return (
  //   <div className="App">
  //     <Logo />
  //     <SideBar/>
  //     <Home />
  //     <Search/>
  //   </div>
  // );
}





