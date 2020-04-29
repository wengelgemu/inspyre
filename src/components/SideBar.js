import React from "react";
import {NavLink} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export default function SideBar() {
    return (
      <div className="SideBar">
        <nav
          style={{
            marginLeft: "3%",
            zIndex: 1,
            position: "relative"
          }}>
          <NavLink
            className="SearchTab"
            activeClassName="ActiveSearchTab"
            exact
            id="SearchTab"
            to="/">
            <font face="FuturaItalicBold" >
                <ListItem button>
                    <ListItemText primary="Home"></ListItemText>
                </ListItem>
            </font>
          </NavLink>
          <NavLink
            activeClassName="ActiveCollectionTab"
            id="CollectionTab"
            to="/Collection">
            <font face="FuturaItalicBold" >
                <ListItem button>
                    <ListItemText primary="Collection"></ListItemText>
                </ListItem>
            </font>
          </NavLink>
        </nav>
      </div>
    );
}