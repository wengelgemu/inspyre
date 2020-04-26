import React from "react"
import "./SideBar.css";

<<<<<<< HEAD
// not sure if needed here or just in app.js but leaving it just in case
import Login from "./Login"
import Profile from "./Profile"
import ChatRoom from "./ChatRoom"
=======
// // not sure if needed here or just in app.js but leaving it just in case
// import Login from "./Login"
// import Profile from "./Profile"
// import Home from "./Home"
// import ChatRoom from "./ChatRoom"
>>>>>>> f56fa614aa668db62a8abe51228718cc6d6f39de

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


// import { BrowserRouter as Router, Switch, NavLink, Route } from "react-router-dom";
import {NavLink} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'; 

export default function SideBar() {
    return (
<<<<<<< HEAD
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
            
            {/* <Router>
                <Switch>
                    <ListItem button>
                        <ListItemText primary="Home" secondary= {Home}></ListItemText>
                    </ListItem>
                    <Route exact path="/Home" component={Home}></Route>
                </Switch>
            </Router> */}

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
=======
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
            className="AboutUsTab"
            activeClassName="ActiveAboutUsTab"
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
            ClassName="ProfileTab"
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
            ClassName="ChatRoomTab"
            activeClassName="ActiveChatRoomTab"
            exact
            id="ChatRoom"
            to="/ChatRoom">
            <font face="FuturaItalicBold" >
                <ListItem button>
                    <ListItemText primary="Chatroom"></ListItemText>
                </ListItem>
            </font>
          </NavLink>

        </nav>
      </div>
      </Router>
>>>>>>> f56fa614aa668db62a8abe51228718cc6d6f39de
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