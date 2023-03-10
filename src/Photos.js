import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photo) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.orginal} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt="definition"
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else return null;
}
