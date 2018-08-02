const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const index = require('./Routes/index');
const app = express();

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.use('/', index);



// Set Static Path
app.use(express.static(`${__dirname}/build`));

app.get('/api/anime', function (req, res, next) {
    let anime = [ 
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
    ];
    
    res.json(anime);
    console.log(anime);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

var port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server has started on Port ${port}...`);
})