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
        
    }

    render() {

        return (
            <div className="AnimeGallery" style={divStyle}>
                <GalleryImg href="https://www2.gogoanime.xyz/category/code-geass-lelouch-of-the-rebellion-dub" src={images["cg.jpeg"]} alt="Code Geass"/>
                <GalleryImg href="http://heroacademia2.net/" src={images["mha.jpg"]} alt="My Hero Academia"/>
                <GalleryImg href="http://tokyoghoulre.net/" src={images["tg.jpg"]} alt="Tokyo Ghoul"/>
                <GalleryImg href="http://watch7deadlysins2.net/" src={images["tsds.jpg"]} alt="Seven Deadly Sins"/>
                <GalleryImg href="http://www.crunchyroll.com/jojos-bizarre-adventure" src={images["sdc.jpg"]} alt="Jojo's Bizarre Adventure"/>
                <GalleryImg href="http://www.crunchyroll.com/konosuba-gods-blessing-on-this-wonderful-world" src={images["kono.jpg"]} alt="Konosuba"/>
                <GalleryImg href="http://kissanime.xyz/watch/kimi-no-na-wa-2016-hd-720p.989OODCC.html/" src={images["knw.png"]} alt="Kimi no wa"/>
                <GalleryImg href="http://www1.watchopm.net/" src={images["opm.jpg"]} alt="One Punch Man"/>
                <GalleryImg href="http://shokugekinosoma.net/" src={images["sns.jpg"]} alt="Shokugeki no soma"/>
                <GalleryImg href="http://www.crunchyroll.com/no-game-no-life" src={images["ngnl.jpg"]} alt="No game no life"/>
                <GalleryImg href="http://www.crunchyroll.com/gate" src={images["gate.jpg"]} alt="Gate"/>
                <GalleryImg href="http://www.crunchyroll.com/kurokos-basketball" src={images["knb.png"]} alt="Kuroko no basket"/>
                <GalleryImg href="http://www.crunchyroll.com/kill-la-kill" src={images["klk.jpg"]} alt="Kill la kill"/>
                <GalleryImg href="http://www.crunchyroll.com/the-devil-is-a-part-timer/videos" src={images["diapt.jpg"]} alt="Devil is a part timer"/>
                <GalleryImg href="http://www.crunchyroll.com/bungo-stray-dogs" src={images["bsd.jpg"]} alt="Bungo Stray Dogs"/>
                <GalleryImg href="http://www.crunchyroll.com/seraph-of-the-end-vampire-reign" src={images["sote.png"]} alt=""/>
                <GalleryImg href="http://shingekikyojin3.net/" src={images["aot.jpg"]} alt="Attack on Titan"/>
                <GalleryImg href="http://www.crunchyroll.com/the-future-diary" src={images["mn.jpg"]} alt="Mirai Nikki"/>
            </div>

        );
    }
}

export default Gallery;