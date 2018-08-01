import React, { Component } from 'react';

const imgStyle= {
    "max-height": "310px",
    "border": "outset",
    "border-color": "#006992",
    "border-width": "4px",
    "width": "100%",
    
    "margin": "0px",
    "margin-bottom": "0px"
}

const divStyle= {
    "float": "left",
    "width": "18%",
    "margin-right": ".75%",
    "margin-left": "1%",
    "margin-bottom": ".5em"
}

const textStyle= {
    "font-family": "Aldrich",
    "border": "outset",
    "border-color": "#006992",
    "width": "100%",
    "margin": "0px",
    "text-align": "center",
    "color": "white",
    "background-color": "#006992",
    "border-width": "4px",
    "background": "linear-gradient(to top, #001D4A, #006992)"
}

const linkStyle= {
    "margin": "0px",
    "height": "0px",
    "width": "0px"
}

class GalleryImg extends Component {
    constructor(props) {
        super(props);        
    }
    
    hoverOver(e) {
        e.target.style.border = "inset";
        e.target.style.borderColor = "#EAF8BF";
        e.target.style.borderWidth = "4px";
    }

    hoverOut(e) {
        e.target.style.border = "outset";
        e.target.style.borderColor = "#006992";
        e.target.style.borderWidth = "4px";
    }

    render() {
        return (<div style={divStyle}>
                    <a href={this.props.href} style={linkStyle}>
                    <img src={this.props.src} style={imgStyle} alt={this.props.alt} onMouseEnter={this.hoverOver} onMouseLeave={this.hoverOut}/>
                    </a>
                    <h5 style={textStyle}>{this.props.alt}</h5>
                </div>)
        ;
    }
}

export default GalleryImg;