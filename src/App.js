import React from 'react';
import "./App.css";
import Logo from "./Logo"
import SideBar from "./SideBar"
import Home from "./Home"
import Search from "./Search"


export default function App() {
  return (
    <div className="App">
      <Logo />
      <SideBar/>
      <Home />
      <Search/>
    </div>
  );
}





