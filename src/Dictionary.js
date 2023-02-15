import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyboard] = useState("");

  function handleResponse(response) {
    console.log(response);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "34b7a5f9e78b04eob5f3acad597t59d2";
    let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
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
        <input type="submit" value="Enter"></input>
      </form>
    </div>
  );
}
