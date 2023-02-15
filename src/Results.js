import React from "react";

export default function Results(props) {
  if (props.results) {
    return (
      <div>
        {props.results.word}
        <br />
        {props.results.phonetic}
      </div>
    );
  } else return null;
}
