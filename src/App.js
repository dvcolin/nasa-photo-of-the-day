import React, { useState, useEffect } from "react";
import "./App.css";
import "./App.scss";
import { Header } from 'semantic-ui-react';
import ApodContainer from "./components/ApodContainer";
import {dateUrls} from './data'
import {Navbar, NavbarLogo} from './components/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar>
        <NavbarLogo>NASA</NavbarLogo>
      </Navbar>
      <Header className='apod-header' as='h1'>Nasa's Astronomy Picture of the Day (APOD)</Header>

      {dateUrls.map(url => <ApodContainer dateUrl={url} />)}
    </div>
  );
}

export default App;

