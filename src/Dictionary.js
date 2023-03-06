import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos.js";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelResponse(response) {
    setPhotos(response.data.photos[0]);
  }

  function search() {
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);

    let pexelApiKey =
      "545Tv8Thi0ZSBCTBfkfVOIJoDeUeqdrVTaqLKvAx2oce3irZFBUfEfjn";
    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9
`;
    let headers = { Authorization: ` ${pexelApiKey}` };
    axios.get(pexelApiUrl, { headers: headers }).then(handlePexelResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function loadKeyword(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <h5>What word do you want to look up?</h5>
        <section>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={loadKeyword}></input>
          </form>
          <div className="hint">
            {" "}
            suggested words: clouds, sage, clay, hotspring...{" "}
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
