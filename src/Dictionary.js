import React, { useState } from "react";
import './Dictionary.css'

export default function () {
    const [searchWord, setSearchWord] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        alert(`Searching for ${searchWord}`);
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
