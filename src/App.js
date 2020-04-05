import React from 'react';
import "./App.css";
import Logo from "./Logo"
import SideBar from "./SideBar"
import Home from "./Home"

// for the sidebar
import Login from "./Login"
import Profile from "./Profile"
// import Home from "./Home"
import ChatRoom from "./ChatRoom"

const items = [
  { name: Home, label: 'Home' },
  { name: Login, label: 'Login' },
  { name: Profile, label: 'Profile' },
  { name: ChatRoom, label: 'Chatroom' },
]

export default function App() {
  return (
    <div className="App">
      <Logo />
      <SideBar items = {items}/>
      <Home />
    </div>
  );
}


