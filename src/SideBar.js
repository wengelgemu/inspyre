import React from "react"

import Login from "./Login"
import Profile from "./Profile"
import Home from "./Home"
import ChatRoom from "./ChatRoom"
// Wengel
export default function SideBar() {
    return <div>
        <ul>
            <Login />
            <Profile />
            <Home />
            <ChatRoom />
        </ul>
        </div>
}