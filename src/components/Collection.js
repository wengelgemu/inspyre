import React, { Component } from 'react';
import { auth } from '../firebase.js';
import Typography from '@material-ui/core/Typography';
import "../styles/Collection.css"
import { db } from '../firebase.js';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: sans-serif;
    }
`;
const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(300px, 0.5fr));
  grid-auto-rows: 300px;
`;
export default class Collection extends Component {
  state = {
    user: null,
    photos: []
  }  
  
  componentDidMount = () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          this.setState({ user });
        } 
      });
      db.collection("user_collection").doc("JkSC2oiStffnojm07TIc").get().then(snap => 
        {
          let newPhotos = snap.data()
          console.log(newPhotos)
          this.setState({
            photos: [...newPhotos.photos]
          })
        })
  }
  displayPhotos = () => {
    return (this.state.photos.map((photo, i) => {
      return <img className = "images" key = {i} src = {photo} alt = "Your Collection"/>
    }))
  }

  render() {
      return (
          <div className = "Collection">
              {
                this.state.user ?
                <div>
                  <Typography className= "collectionName" variant = "h4">{this.state.user.displayName}'S COLLECTION</Typography>
                  <div className = "imageGrid">
                    <GlobalStyle />
                    <WrapperImages>
                      { this.displayPhotos() }
                    </WrapperImages>
                  </div>
                </div>
                :
                <div>
                  <Typography  className = "reminderLogin" variant = "h4">LOGIN TO SAVE YOUR COLLECTION</Typography>
                  </div>
              }
              
          </div>
      );
  }
}