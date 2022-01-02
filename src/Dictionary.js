import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results.js";
import Photos from "./Photos.js"
import axios from "axios";

export default function Dictionary() {
    const [searchWord, setSearchWord] = useState("");
    const [results, setResults] = useState({});
    const [dataReady, setDataReady] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [errorResolution, setErrorResolution] = useState("");
    const [photos, setPhotos] = useState(null);
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
    const pexelsApiKey = "563492ad6f9170000100000124ffa11b13504e688d89e8f9b3f48b57";
    const pexelUrl = `https://api.pexels.com/v1/search?query=${searchWord}&per_page=6`;
    const onSubmit = (event) => {
        event.preventDefault();
        setDataReady(false);
        if (searchWord) {
            axios
                .get(url)
                .then((response) => {
                    if (response.status === 200) {
                        setResults(response.data[0]);
                        setDataReady(true);
                        setError(false);
                    }
                })
                .catch((error) => {
                    setError(error);
                    setErrorMessage(error.response.data.message);
                    setErrorResolution(error.response.data.resolution);
                });

            axios.get(pexelUrl, { headers: { "Authorization": `Bearer ${pexelsApiKey}` } }).then((response) => {
                setPhotos(response.data.photos)
            })
        }
    };

    return (
        <div className="dictionary">
            <form onSubmit={onSubmit}>
                <input
                    className="input-search"
                    type="search"
                    value={searchWord}
                    placeholder="What are you looking for?"
                    onChange={(event) => {
                        setSearchWord(event.target.value);
                    }}
                />
                <input className="input-submit" type="submit" value="Check it out!" />
            </form>
            {error && (
                <div className="error">
                    Oops! {errorMessage} {errorResolution}
                </div>
            )}
            {dataReady && <>
                <Results results={results} />
                <Photos photos={photos} />
            </>}
        </div>
    );
}
