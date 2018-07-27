import React, { Component } from 'react';
import Gallery from "./Gallery.jsx";
import NavBar from "./NavBar.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Gallery />
      </div>
    );
  }
}

export default App;
