import React from 'react';
import Logo from "./components/Logo"
import SideBar from "./components/SideBar"
import Search from "./components/Search"

import Login from "./components/Login"
import Profile from "./components/Profile"
import ChatRoom from "./components/ChatRoom"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
        <Router>
            <div className="SideBar"> 
            {/* <AppTabs className="testing" /> */}
            <Switch>
                <Route exact path="/">
                    <Search />
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





