import React from "react";
import Meanings from "./Meanings.js";

export default function Results(props) {
  if (props.results) {
    return (
      <div>
        {props.results.word}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              {meaning.partOfSpeech}
              <Meanings meanings={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else return null;
}
