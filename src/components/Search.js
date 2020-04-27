import React, { useState } from 'react';
import axios from 'axios';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import "../styles/Search.css";
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


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
    // TODO: actually make a collection and add to it
    console.log(`You added ${url} to your collection`);
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
        />
        <Input type="submit" value="Search"></Input>
      </form>
      <GlobalStyle />
        <WrapperImages>
          {/* {result.length > 0 && 'Click on an image to add to collection'} */}
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