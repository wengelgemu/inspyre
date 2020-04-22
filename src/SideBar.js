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

// Wengel
export default function SideBar() {
    return (
    <div className="Side">
        <List disablePadding dense>
            <div className="s">
                <ListItem button>
                    <ListItemText primary="Signup/Login" secondary= {Login} ></ListItemText>
                </ListItem>
            </div>
            <ListItem button>
                <ListItemText primary="Profile" secondary= {Profile}></ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemText primary="Home" secondary= {Home}></ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemText primary="Chatroom" secondary= {ChatRoom}></ListItemText>
            </ListItem>
        </List>
    </div>
    );
}