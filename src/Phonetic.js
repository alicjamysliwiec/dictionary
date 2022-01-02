import React from "react";
import "./Phonetic.css"

export default function Phonetic(props) {
    return (
        <div className="Phonetic">
            {props.phonetic.audio &&
                <a className="listen-button" rel="noopener noreferrer" href={props.phonetic.audio} rel="noreferrer" target="_blank" >
                    <span aria-label="listen-emoji" role="img">
                        🔊
                    </span>
                </a>}
            {props.phonetic.text}
        </div>
    )
}
