import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [pic, setPic] = useState([]);

  return (
    <div className="App">
      <Header text={`Nasa's Astronomy Picture of the Day (APOD)`} />
    </div>
  );
}

export default App;

