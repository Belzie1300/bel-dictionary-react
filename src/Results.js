import React from "react";
import "./App.css";
import Synonyms from "./Synonyms.js";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>

        <span>{props.results.phonetic}</span>
        {props.results.meanings.map(function (definition, index) {
          return (
            <div key={index}>
              <strong>{definition.partOfSpeech}</strong>
              <br />
              <p>{definition.definition}</p>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        })}
        <br />
      </div>
    );
  } else return null;
}
