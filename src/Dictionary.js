import React from "react";

export default function Dictionary() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("searching");
  }
  function loadKeyword(event) {
    console.log(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div>What word do you want to look up?</div>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={loadKeyword}></input>
      </form>
    </div>
  );
}
