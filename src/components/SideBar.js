import React from "react";
import {NavLink} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import '../styles/SideBar.css'


export default function SideBar() {
    return (
      <div className="SideBar">
        <nav
          style={{
            marginLeft: "3%",
            zIndex: 1,
            position: "relative",
            width: "180px"
          }}>
          <NavLink style = {{
            textDecoration: "none",
            color: "rgba(2, 1, 66, 1)",
            paddingRight: "2%"
            }}
            className="SearchTab"
            activeClassName="ActiveSearchTab"
            exact
            id="SearchTab"
            to="/">
            <font face="FuturaItalicBold" >
                <ListItem button>
                    <HomeIcon className = "homeButton" color = "black"/>
                </ListItem>
            </font>
          </NavLink>
          <NavLink style={{
            textDecoration: "none",
            color: "rgba(2, 1, 66, 1)",
            paddingRight: "2%"
            }}
            activeClassName="ActiveCollectionTab"
            id="CollectionTab"
            to="/Collection">
            <font face="FuturaItalicBold" >
                <ListItem button alignItems = "center">
                    <ListItemText primary="COLLECTION"></ListItemText>
                </ListItem>
            </font>
          </NavLink>
        </nav>
      </div>
    );
}