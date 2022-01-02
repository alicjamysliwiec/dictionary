import "./Meaning.css";
import React from "react";

export default function Meaning(props) {
    return (
        <div className="meaning">
            <h2>{props.meaning.partOfSpeech}</h2>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <hr />
                        <p>
                            <span className="definition">
                                {definition.definition}
                            </span>
                            {definition.example &&
                                <>
                                    <br />
                                    <em className="example">{definition.example}</em>
                                </>}
                            {definition.synonyms.length !== 0 &&
                                <>
                                    <br />
                                    <br />
                                    {definition.synonyms.map(function (synonym, index) {
                                        return (
                                            <span className="synonym" key={index}>
                                                <em>
                                                    {synonym + " "}
                                                </em>
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
