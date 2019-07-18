import React, { useState, useEffect } from "react";
import "./App.css";
import "./App.scss";
import ApodContainer from "./components/ApodContainer";
import { dateUrls } from "./data";
import {
  Navbar,
  NavbarLogo,
  NavbarLinks,
  NavbarLink
} from "./components/Navbar";
import { Card, Icon, Image, Header } from "semantic-ui-react";
function App() {
  return (
    <div className="App">
      <Navbar>
        <NavbarLogo>NASA</NavbarLogo>
        <NavbarLinks>
          <NavbarLink href="#" status="active">Home</NavbarLink>
          <NavbarLink href="#">About</NavbarLink>
          <NavbarLink href="#">Gallery</NavbarLink>
          <NavbarLink href="#">Contact</NavbarLink>
        </NavbarLinks>
      </Navbar>
      <Header className="apod-header" as="h1">
        Nasa's Astronomy Picture of the Day (APOD)
      </Header>

      {dateUrls.map(url => (
        <ApodContainer dateUrl={url} />
      ))}
    </div>
  );
}

export default App;
