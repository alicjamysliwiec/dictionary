import "./Meaning.css";
import React from "react";

export default function Meaning(props) {
    return (
        <div className="meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <hr />
                        <p>
                            <strong>
                                Definition:
                            </strong> {definition.definition}
                            {definition.example &&
                                <>
                                    <br />
                                    <strong>
                                        Example:
                                    </strong>
                                    <em>{definition.example}</em>
                                </>}
                            {definition.synonyms.length !== 0 &&
                                <>
                                    <br />
                                    <strong>
                                        Synonyms:
                                    </strong>
                                    {definition.synonyms.map(function (synonym, index) {
                                        return (
                                            <span key={index}>
                                                {synonym + " "}
                                            </span>
                                        )
                                    })}
                                </>}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
