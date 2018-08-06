import React, { Component } from 'react';
import styled from 'styled-components';

let current = 0;
const bannerImgs = [require("../ImgAssets/cgbanner.jpg"), require("../ImgAssets/mhabanner.jpg"), require("../ImgAssets/tgbanner.jpg")];
const bannerLinks = ["http://www.crunchyroll.com/code-geass", "http://ww7.heroacademia2.com/", "http://tokyoghoulre.net/"];

const Slide = styled.img`
    margin-top: 0;
    margin-bottom: 10px;
    width: 100%;
`

class Slides extends React.Component {
    constructor(props) {
      super(props); 
      this.state = {currentImg: bannerImgs[0], currentLink: bannerLinks[0]};
    }
  
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            2500
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        current++;
        if (current > 2){
            current = 0;
        }
        this.setState({currentImg: bannerImgs[current]});
        this.setState({currentLink: bannerLinks[current]});
    }

    render() {
      return (
        <div>
          <a href={this.state.currentLink}><Slide src={this.state.currentImg}/></a>
        </ div>
      );
    }
}


export default Slides;