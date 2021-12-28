import React, { useState } from "react";
import './Dictionary.css';
import axios from "axios";

export default function () {
    const [searchWord, setSearchWord] = useState("");
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
    const onSubmit = (event) => {
        event.preventDefault();
        if (searchWord) {
            axios.get(url).then(response => {
                console.log(response)
            })
        }
    }


    return (
        <div className="dictionary">
            <form onSubmit={onSubmit}>
                <input type="search"
                    autoFocus={true}
                    value={searchWord}
                    onChange={(event) => { setSearchWord(event.target.value) }} />
            </form>
        </div>
    );
}
