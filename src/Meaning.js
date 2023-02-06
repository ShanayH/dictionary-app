import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  //   console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3> {props.meaning.partOfSpeech}</h3>;
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />

              <Example example={definition.example} />

              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}

//https://www.shecodes.io/learn/workshops/1069/units/69/lessons/257 just watch this video seriously
