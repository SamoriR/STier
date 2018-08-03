import React, { Component } from 'react';
import './Bonus.css';


class GalleryImg extends Component {
    constructor(props) {
        super(props);        
    }

    render() {
        return (
        <div className="container">
            <a href={this.props.href}>
            <img className="image" src={this.props.src} alt={this.props.alt} />
            </a>
            <div className="overlay">
                <div className="text">{this.props.alt}</div>
            </ div>
        </ div>
        );
    }
}

export default GalleryImg;
