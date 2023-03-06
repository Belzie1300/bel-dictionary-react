import React from "react";
import "./Phonetics.css";
import Audio from "./Audio.js";

export default function Phonetics(props) {
  if (props.phonetics) {
    return (
      <div className="Phonetics">
        {props.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <span>{phonetic.text} </span>
              <Audio audio={phonetic.audio} />
            </div>
          );
        })}
      </div>
    );
  } else return null;
}
