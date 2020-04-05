import React from "react"
import "./SideBar.css";

// not sure if needed here or just in app.js but leaving it just in case
// import Login from "./Login"
// import Profile from "./Profile"
// import Home from "./Home"
// import ChatRoom from "./ChatRoom"

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

// Wengel
export default function SideBar({ items }) {
    return (
    // <div>
    //     <ul>
    //         <Login/>
    //         <Profile />
    //         <Home />
    //         <ChatRoom />
    //     </ul>
    // </div>
    <div className="Side">
        <List disablePadding dense>
            {items.map(({ label, name, ...rest }) => (
                <ListItem key={name} button {...rest}>
                    <ListItemText>{label}</ListItemText>
                </ListItem>
            ))}
        </List>
    </div>
    );
}