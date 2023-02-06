import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  //   console.log(props.definition);
  if (props.definition) {
    return (
      <div className="results">
        <h2>{props.definition.word}</h2>
        <h3>{props.definition.phonetic}</h3>
        {props.definition.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
