const express = require('express');

const router = express.Router();

var anime = [ 
    { Title: 'Tokyo Ghoul', ImageAsset: 'tg.jpg', Link: 'https://www.hulu.com/tokyo-ghoul' },
    { Title: 'Seven Deadly Sins', ImageAsset: 'tsds.jpg', Link: 'http://watch7deadlysins2.net/' },
    { Title: 'Darling In The Franxxx', ImageAsset: 'ditf.jpg', Link: 'https://otakustream.tv/anime/darling-in-the-franxx/' },
    { Title: 'Code geass', ImageAsset: 'cg.jpeg', Link: 'http://www.crunchyroll.com/code-geass' },
    { Title: 'Jojo\'s Bizarre Adventure', ImageAsset: 'sdc.jpg', Link: 'http://www.crunchyroll.com/jojos-bizarre-adventure' },
    { Title: 'Konosuba', ImageAsset: 'kono.jpg', Link: 'http://www.crunchyroll.com/konosuba-gods-blessing-on-this-wonderful-world' },
    { Title: 'Kimi no wa', ImageAsset: 'knw.png', Link: 'http://kissanime.xyz/watch/kimi-no-na-wa-2016-hd-720p.989OODCC.html/' },
    { Title: 'One Punch Man', ImageAsset: 'opm.jpg', Link: 'https://www.hulu.com/onepunch-man' },
    { Title: 'Shokugeki no soma', ImageAsset: 'sns.jpg', Link: 'http://www.crunchyroll.com/food-wars-shokugeki-no-soma' },
    { Title: 'Gate', ImageAsset: 'gate.jpg', Link: 'http://www.crunchyroll.com/gate' },
    { Title: 'Kill la kill', ImageAsset: 'klk.jpg', Link: 'http://www.crunchyroll.com/kill-la-kill' },
    { Title: 'Kuroko no basket', ImageAsset: 'knb.png', Link: 'http://www.crunchyroll.com/kurokos-basketball' },
    { Title: 'No game no life', ImageAsset: 'ngnl.jpg', Link: 'http://www.crunchyroll.com/no-game-no-life' },
    { Title: 'Devil is a part timer', ImageAsset: 'diapt.jpg', Link: 'http://www.crunchyroll.com/the-devil-is-a-part-timer/videos' },
    { Title: 'Bungo Stray Dogs', ImageAsset: 'bsd.jpg', Link: 'http://www.crunchyroll.com/bungo-stray-dogs' },
    { Title: 'Seraph of the End', ImageAsset: 'sote.png', Link: 'https://www.hulu.com/seraph-of-the-end-vampire-reign' },  
    { Title: 'Attack on Titan', ImageAsset: 'aot.jpg', Link: 'http://www.crunchyroll.com/attack-on-titan' },
    { Title: 'Mirai Nikki', ImageAsset: 'mn.jpg', Link: 'http://www.crunchyroll.com/the-future-diary' } 
]
router.get('/test', function (req, res, next) {
    console.log(anime);
    res.json(anime);
});

module.exports = router;