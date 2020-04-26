import React, {Component, useState} from "react";
import ReactDOM from"react-dom";
import axios from 'axios';

function Search() {
  const [photo, setPhoto] = useState("");
  const[clientId, setClientId] = useState("2gFzcGJwfBY7lcEXlfTlqFluMFZnr1IEF2JBI5OeCHo");
  const [result, setResult] = useState([]);

  function handleChange(event) {
    setPhoto(event.target.value);
  }

  function handleSubmit(event) {
    const url = "https://api.unsplash.com/search/photos?page=1&query="+photo+"&client_id="+clientId;
    axios.get(url).then(response => {
      console.log(response);
      setResult(response.data.results);
    })

  }

  return (
    <div className="App">
      <h1>UnSplash Search</h1>
      <input onClick={handleChange} type="text" name="photo" placeHolder="Search for Photos..."/>
      <button onClick={handleSubmit} type="submit">Search</button>
      
      {result.map((photo) => (
        <img src={photo.urls.small} />
      ))}
    </div>
  );
}
export default Search;

const rootElement = document.getElementById("root");
ReactDOM.render(<Search/>, rootElement);
