import React, { Component } from 'react';
import Gallery from "./Gallery.jsx";
import NavBar from "./NavBar.jsx";
import BootNav from "./BootNav.jsx";
import Slides from "./Slides.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Slides />
        <Gallery />
      </div>
    );
  }
}

export default App;
