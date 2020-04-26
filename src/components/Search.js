import React, { useState } from 'react';
import axios from 'axios';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import "../styles/Search.css";
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
  return (
    <div className="App">
      {/* <h1>UnSplash Search</h1> */}
      <form onSubmit={handleSubmit} class = "searchbox">
        <Input
          onChange={handleChange}
          type="text"
          name="photo"
          placeholder="Search for Photos..."
        />
        <Input type="submit" value="Search"></Input>
      </form>
      <Grid container spacing = {1}>
        {result.length > 0 && 'Click on an image to add to collection'}
        {result.map(photo => (
          <img
            key={photo.id}
            onClick={() => addToCollection(photo.urls.small)}
            src={photo.urls.small}
            alt={photo.description}
          />
        ))}
      </Grid>
    </div>
  );
}