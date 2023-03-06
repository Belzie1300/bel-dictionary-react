import React from "react";
import Meanings from "./Meanings.js";
import Synonyms from "./Synonyms.js";
import Phonetics from "./Phonetics.js";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          {props.results.word}
          <Phonetics phonetics={props.results.phonetics} />
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              {meaning.partOfSpeech}
              <Meanings meanings={meaning} />

              <Synonyms synonyms={meaning.synonyms} />
            </section>
          );
        })}
      </div>
    );
  } else return null;
}
