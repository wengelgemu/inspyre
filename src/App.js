import React from 'react';
import "./App.css";
import Logo from "./Logo"
import SideBar from "./SideBar"
import Home from "./Home"


export default function App() {
  return (
    <div className="App">
      <Logo />
      <SideBar/>
      <Home />
    </div>
  );
}


