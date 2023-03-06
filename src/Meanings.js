import React from "react";
import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      {props.meanings.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {definition.definition}
            <br />
            <div className="example">{definition.example}</div>
          </div>
        );
      })}
    </div>
  );
}
