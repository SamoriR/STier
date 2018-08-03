import React, { Component } from 'react';
import GalleryImg from "./GalleryImg.jsx";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { 
        images[item.replace('./', '')] = r(item);
    });
    return images;
}
const images = importAll(require.context('../ImgAssets', false, /\.(png|jpe?g|svg)$/));

const divStyle= {
    "margin" : "auto",
    "margin-top" : "10px",
    "width" : "95%"
}

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animeDB: []
        };

        this.getAnime = this.getAnime.bind(this);
        this.addAnime = this.addAnime.bind(this);
    }

    componentDidMount(){
        this.getAnime();
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

    render() {
        var arr = this.addAnime();

        return (
            <div className="AnimeGallery" style={divStyle}>{arr}</div>

        );
    }
}

export default Gallery;