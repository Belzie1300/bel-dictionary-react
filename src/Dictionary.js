import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyboard] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Just a moment, searching for "${keyword}"`);
  }
  function loadKeyword(event) {
    setKeyboard(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div>What word do you want to look up?</div>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={loadKeyword}></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}
