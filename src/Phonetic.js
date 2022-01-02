import react from "react"
import "./Phonetic.css"

export default function Phonetic(props) {
    return (
        <div className="Phonetic">
            {props.phonetic.audio &&
                <a className="listen-button" href={props.phonetic.audio} rel="noreferrer" target="_blank" >
                    🔊
                </a>}
            {props.phonetic.text}
        </div>
    )
}
