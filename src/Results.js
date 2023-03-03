import React from "react";

export default function Results(props) {
  if (props.results) {
    return (
      <div>
        {props.results.meanings.map(function (meanings, index) {
          return <div key={index}>{meanings.partOfSpeech}</div>;
        })}
      </div>
    );
  } else return null;
}
