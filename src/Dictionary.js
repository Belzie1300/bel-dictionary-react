import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyboard] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);
  }
  function loadKeyword(event) {
    setKeyboard(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div>What word do you want to look up?</div>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={loadKeyword}></input>
      </form>
      <Results results={results} />
    </div>
  );
}
