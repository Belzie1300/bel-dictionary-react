import React from "react";

export default function Meanings(props) {
  return (
    <div>
      {props.meanings.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {definition.partOfSpeech}
            {definition.definition}
            <br />
            {definition.example}
          </div>
        );
      })}
    </div>
  );
}
