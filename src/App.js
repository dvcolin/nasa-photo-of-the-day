import React, { useState, useEffect } from "react";
import "./App.css";
import "./App.scss";
import Header from "./components/Header";
import ApodContainer from "./components/ApodContainer";
import {dateUrls} from './data'

function App() {


  return (
    <div className="App">
      <Header text={`Nasa's Astronomy Picture of the Day (APOD)`} />

      {dateUrls.map(url => <ApodContainer dateUrl={url} />)}
    </div>
  );
}

export default App;

