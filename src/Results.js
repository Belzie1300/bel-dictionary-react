import React from "react";
import Meanings from "./Meanings.js";
import Synonyms from "./Synonyms.js";
import Phonetics from "./Phonetics.js";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h4>{props.results.word}</h4>
          <Phonetics phonetics={props.results.phonetics} />
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <div className="partOfSpeech">{meaning.partOfSpeech}</div>
              <Meanings meanings={meaning} />

              <Synonyms synonyms={meaning.synonyms} />
            </section>
          );
        })}
      </div>
    );
  } else return null;
}
