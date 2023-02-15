import React from "react";

export default function Results(props) {
  if (props.results) {
    return (
      <div>
        {props.results.word}
        {props.results.meanings.map(function (definition, index) {
          return (
            <div key={index}>
              {definition.partOfSpeech}
              <br />
              {definition.definition}
            </div>
          );
        })}
        <br />
        {props.results.phonetic}
      </div>
    );
  } else return null;
}
