import React, { useState } from 'react';
import axios from 'axios';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import "../styles/Search.css";
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import firebase, { db } from '../firebase.js';

export default function Search() {
  const [photo, setPhoto] = useState('');
  // TODO:
  // Ask Masao how to put this in an environment so it is not in GitHub
  // Also get a new key bc people scrape GitHub for keys
  const [clientId, setClientId] = useState('2gFzcGJwfBY7lcEXlfTlqFluMFZnr1IEF2JBI5OeCHo');
  const [result, setResult] = useState([]);
  const baseUrl = 'https://api.unsplash.com/search/photos?page=1&query=';
  function handleChange(event) {
    setPhoto(event.target.value);
  }
  function addToCollection(url) {
    db.collection("users").add ({
      photos: {url}
    })
    // db.collection("users").doc("photos").get().then(function(doc) {
    // if (doc.exists) {
    //   console.log("Document data:", doc.data());
    // } else {
    //   console.log("No such document!");
    // }
    // }).catch(function(error) {
    //   console.log("Error getting document:", error);
    // });
  }
  function handleSubmit(event) {
    const url = baseUrl + photo + '&client_id=' + clientId;
    axios.get(url).then(response => {
      setResult(response.data.results);
    });
    event.preventDefault();
  }

  // Styling images
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

  return (
    <div className="App">
      
      <form onSubmit={handleSubmit} className = "searchbox">
      <Typography variant = "h1">INSYPRE</Typography >
        <Input
          onChange={handleChange}
          type="text"
          name="photo"
          autoComplete = "off"
        />
        <Input type="submit" value="Search"></Input>
      </form>
      <GlobalStyle />
        <WrapperImages>
          {result.map(photo => (
            <img
              className = "images"
              key={photo.id}
              onClick={() => addToCollection(photo.urls.small)}
              src={photo.urls.small}
              alt={photo.description}
            />
          ))}
        </WrapperImages>

    </div>
  );
}