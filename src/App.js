import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import ApodContainer from "./components/ApodContainer";

function App() {


  return (
    <div className="App">
      <Header text={`Nasa's Astronomy Picture of the Day (APOD)`} />

      <ApodContainer />
    </div>
  );
}

export default App;

