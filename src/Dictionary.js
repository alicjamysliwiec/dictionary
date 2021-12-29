import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results.js";
import axios from "axios";

export default function () {
  const [searchWord, setSearchWord] = useState("");
  const [results, setResults] = useState({});
  const [dataReady, setDataReady] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorResolution, setErrorResolution] = useState("");
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
  const onSubmit = (event) => {
    event.preventDefault();
    setDataReady(false);
    if (searchWord) {
      axios
        .get(url)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            console.log(response.data[0]);
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
    }
  };

  return (
    <div className="dictionary">
      <form onSubmit={onSubmit}>
        <input
          type="search"
          autoFocus={true}
          value={searchWord}
          onChange={(event) => {
            setSearchWord(event.target.value);
          }}
        />
      </form>
      {error && (
        <div className="error">
          Oops! {errorMessage} {errorResolution}
        </div>
      )}
      {dataReady && <Results results={results} />}
    </div>
  );
}
