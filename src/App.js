import logo from "./images/logo.png";
import "./App.css";
import Dictionary from "./Dictionary.js";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <h1 className="title">Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          This project was coded by{" "}
          <a
            className="coded-by-link"
            href="https://www.linkedin.com/in/alicja-my%C5%9Bliwiec-b8b160201/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alicja Myśliwiec
          </a>
          {" "}and is{" "}
          <a className="coded-by-link"
            href="https://github.com/alicjamysliwiec/dictionary"
            target="_blank"
            rel="noopener noreferrer">
            open sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
