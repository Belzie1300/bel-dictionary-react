import React from "react";
import Meanings from "./Meanings.js";
import Synonyms from "./Synonyms.js";
import Phonetics from "./Phonetics.js";

export default function Results(props) {
  if (props.results) {
    return (
      <div>
        {props.results.word}
        <Phonetics phonetics={props.results.phonetics} />
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <section>
                {meaning.partOfSpeech}
                <Meanings meanings={meaning} />
              </section>
              <Synonyms synonyms={meaning.synonyms} />
            </div>
          );
        })}
      </div>
    );
  } else return null;
}
