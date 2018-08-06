import React, { Component } from 'react';
import GalleryImg from "./GalleryImg.jsx";
import styled from 'styled-components';
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { 
        images[item.replace('./', '')] = r(item);
    });
    return images;
}
const images = importAll(require.context('../ImgAssets', false, /\.(png|jpe?g|svg)$/));


const Container = styled.div`
    margin : auto;
    margin-top : 10px;
    width : 95%;
`;

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animeDB: [],
            width: 0,
            height: 0,
            class: "fiveCard",
            style: {
                "margin" : "auto",
                "margin-top" : "10px",
                "width" : "95%",
                "margin-left" : "3%"
            }
        };

        this.getAnime = this.getAnime.bind(this);
        this.addAnime = this.addAnime.bind(this);
        this.updateGallery = this.updateGallery.bind(this);
    }

    componentDidMount(){
        this.getAnime();
        this.updateGallery();
        window.addEventListener('resize', this.updateGallery, false);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.updateGallery, false);
    }

    getAnime() {
        fetch('/api/anime')
        .then((res) => (res.json()))
        .then((data) => {
            this.setState({animeDB: data});
        })        
    }

    addAnime(){
        var len = this.state.animeDB.length;
        var gArray = [];


        for (var i = 0; i < len; i++){
            var asset = this.state.animeDB[i].ImageAsset;
            var link = this.state.animeDB[i].Link;
            var title = this.state.animeDB[i].Title;
            
            console.log("Asset used: ", asset);
            console.log("Link used: ", link);
            gArray.push(<GalleryImg href={link} src={images[asset]} alt={title}/>)
        }

        return gArray;
    }

    updateGallery(){
        this.setState({ width: window.innerWidth, height: window.innerHeight });

        let newGallery = {
            "margin" : "auto",
            "margin-top" : "10px",
            "width" : "95%",
            "margin-left" : "3%"
        }

        let scale = 0;

        if (window.innerWidth > 1279){
            scale = -.05;
            
        } else if (window.innerWidth > 1002 && window.innerWidth <= 1279) {
            const diff = window.innerWidth - 1002;
            scale = diff * .018;
            
        } else if (window.innerWidth > 737 && window.innerWidth <= 1002) {
            const diff = window.innerWidth - 737;
            scale = diff * .034;
            
        } else if (window.innerWidth > 482 && window.innerWidth <= 737) {
            const diff = window.innerWidth - 482;
            scale = diff * .047;

        } else {
            scale = 17;
            
        }
        const percent = 3 + scale;
        const pString = '' + percent + '%';
        newGallery["margin-left"] = pString;
        this.setState({style: newGallery});
        
    }

    render() {
        var arr = this.addAnime();

        return (
            <div style={this.state.style} >{arr}</div>

        );
    }
}

export default Gallery;