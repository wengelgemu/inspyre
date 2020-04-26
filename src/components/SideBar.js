import React from "react"
import "../styles/SideBar.css";

// // not sure if needed here or just in app.js but leaving it just in case
// import Login from "./Login"
// import Profile from "./Profile"
// import Home from "./Home"
// import ChatRoom from "./ChatRoom"

// import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


// import { BrowserRouter as Router, Switch, NavLink, Route } from "react-router-dom";
import {NavLink} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'; 

export default function SideBar() {
    return (
    <Router>
      <div className="Side">
        <nav style={{
            marginLeft: "3%",
            zIndex: 1,
            position: "relative"
          }}>

          <NavLink style={{
              textDecoration: "none",
              color: "rgba(2, 1, 66, 1)",
              paddingRight: "2%"
            }}

            className="HomeTab"
            activeClassName="ActiveHomeTab"
            exact
            id="HomeTab"
            to="/">
            <font face="FuturaItalicBold" >
                <ListItem button>
                    <ListItemText primary="Home"></ListItemText>
                </ListItem>
            </font>
          </NavLink>
          
          <NavLink style={{
              textDecoration: "none",
              color: "rgba(2, 1, 66, 1)",
              paddingRight: "2%"
            }}
            className="LoginTab"
            activeClassName="ActiveLoginTab"
            id="LoginTab"
            to="/Login">
            <font face="FuturaItalicBold" >
                <ListItem button>
                    <ListItemText primary="Login/Signup"></ListItemText>
                </ListItem>
            </font>
          </NavLink>
          
          <NavLink
            style={{
              textDecoration: "none",
              color: "rgba(2, 1, 66, 1)",
              paddingRight: "2%"
            }}
            className="ProfileTab"
            activeClassName="ActiveProfileTab"
            exact
            id="ProfileTab"
            to="/Profile">
            <font face="FuturaItalicBold" >
                <ListItem button>
                    <ListItemText primary="Profile"></ListItemText>
                </ListItem>
            </font>
          </NavLink>
          
          <NavLink
            style={{
              textDecoration: "none",
              color: "rgba(2, 1, 66, 1)",
              paddingRight: "2%"
            }}
            className="ChatRoomTab"
            activeClassName="ActiveChatRoomTab"
            exact
            id="ChatRoomTab"
            to="/ChatRoom">
            <font face="FuturaItalicBold" >
                <ListItem button>
                    <ListItemText primary="ChatRoom"></ListItemText>
                </ListItem>
            </font>
          </NavLink>

        </nav>
      </div>
      </Router>
    );
  }

// // Wengel
// export default function SideBar() {
//     return (
//     <div className="Side">
//         <List disablePadding dense>
//             <Router>
//                 <div className="s">
//                     <Switch>
//                         <ListItem button>
//                             <ListItemText primary="Signup/Login" secondary= {Login} ></ListItemText>
//                         </ListItem>
//                         <Route exact path="/Login" component={Login}></Route>
//                     </Switch>
//                 </div>
//             </Router>

//             <Router>
//                 <Switch>
//                     <ListItem button>
//                         <ListItemText primary="Profile" secondary= {Profile}></ListItemText>
//                     </ListItem>
//                     <Route exact path="/Profile" component={Profile}></Route>
//                 </Switch>
//             </Router>
            
//             <Router>
//                 <Switch>
//                     <ListItem button>
//                         <ListItemText primary="Home" secondary= {Home}></ListItemText>
//                     </ListItem>
//                     <Route exact path="/Home" component={Home}></Route>
//                 </Switch>
//             </Router>

//             <Router>
//                 <Switch>
//                     <ListItem button>
//                         <ListItemText primary="ChatRoom" secondary= {ChatRoom}></ListItemText>
//                     </ListItem>
//                     <Route exact path="/ChatRoom" component={ChatRoom}></Route>
//                 </Switch>
//             </Router>
//         </List>
//     </div>
//     );
// }