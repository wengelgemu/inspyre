import React from "react"
import "./SideBar.css";

// not sure if needed here or just in app.js but leaving it just in case
import Login from "./Login"
import Profile from "./Profile"
import Home from "./Home"
import ChatRoom from "./ChatRoom"

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Wengel
export default function SideBar() {
    return (
    <div className="Side">
        <List disablePadding dense>
            <Router>
                <div className="s">
                    <Switch>
                        <ListItem button>
                            <ListItemText primary="Signup/Login" secondary= {Login} ></ListItemText>
                        </ListItem>
                        <Route exact path="/Login" component={Login}></Route>
                        </Switch>
                </div>
            </Router>

            <Router>
                <Switch>
                    <ListItem button>
                        <ListItemText primary="Profile" secondary= {Profile}></ListItemText>
                    </ListItem>
                    <Route exact path="/Profile" component={Profile}></Route>
                </Switch>
            </Router>
            
            <Router>
                <Switch>
                    <ListItem button>
                        <ListItemText primary="Home" secondary= {Home}></ListItemText>
                    </ListItem>
                    <Route exact path="/Home" component={Home}></Route>
                </Switch>
            </Router>

            <Router>
                <Switch>
                    <ListItem button>
                        <ListItemText primary="ChatRoom" secondary= {ChatRoom}></ListItemText>
                    </ListItem>
                    <Route exact path="/ChatRoom" component={ChatRoom}></Route>
                </Switch>
            </Router>
        </List>
    </div>
    );
}