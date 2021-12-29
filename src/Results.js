import React from "react";
import "./Results.css";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props);
  return (
    <div className="results">
      {props.results ? (
        <div>
          <h2>{props.results.word}</h2>
          {props.results.meanings.map(function(meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
