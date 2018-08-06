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
        { Title: 'My Hero Academia', ImageAsset: 'mha.jpg', Link: 'http://ww7.heroacademia2.com/' },
        { Title: 'Code Geass', ImageAsset: 'cg.jpeg', Link: 'http://www.crunchyroll.com/code-geass' },
        { Title: 'Jojo\'s Bizarre Adventure', ImageAsset: 'sdc.jpg', Link: 'http://www.crunchyroll.com/jojos-bizarre-adventure' },
        { Title: 'Seven Deadly Sins', ImageAsset: 'tsds.jpg', Link: 'http://watch7deadlysins2.net/' },
        { Title: 'Tokyo Ghoul', ImageAsset: 'tg.jpg', Link: 'http://tokyoghoulre.net/' },
        { Title: 'No Game No Life', ImageAsset: 'ngnl.jpg', Link: 'http://www.crunchyroll.com/no-game-no-life' },
        { Title: 'Konosuba', ImageAsset: 'kono.jpg', Link: 'http://www.crunchyroll.com/konosuba-gods-blessing-on-this-wonderful-world' },
        { Title: 'Darling In The Franxxx', ImageAsset: 'ditf.jpg', Link: 'https://otakustream.tv/anime/darling-in-the-franxx/' },
        { Title: 'Kimi No Wa', ImageAsset: 'knw.png', Link: 'http://kissanime.xyz/watch/kimi-no-na-wa-2016-hd-720p.989OODCC.html/' },
        { Title: 'Kuroko No Basket', ImageAsset: 'knb.png', Link: 'http://www.crunchyroll.com/kurokos-basketball' },
        { Title: 'One Punch Man', ImageAsset: 'opm.jpg', Link: 'https://www.hulu.com/onepunch-man' },
        { Title: 'Shokugeki No Soma', ImageAsset: 'sns.jpg', Link: 'http://www.crunchyroll.com/food-wars-shokugeki-no-soma' },
        { Title: 'Gate', ImageAsset: 'gate.jpg', Link: 'http://www.crunchyroll.com/gate' },
        { Title: 'Kill La Kill', ImageAsset: 'klk.jpg', Link: 'http://www.crunchyroll.com/kill-la-kill' },
        { Title: 'Devil Is a Part Timer', ImageAsset: 'diapt.jpg', Link: 'http://www.crunchyroll.com/the-devil-is-a-part-timer/videos' },
        { Title: 'Bungo Stray Dogs', ImageAsset: 'bsd.jpg', Link: 'http://www.crunchyroll.com/bungo-stray-dogs' },
        { Title: 'Seraph of The End', ImageAsset: 'sote.png', Link: 'https://www.hulu.com/seraph-of-the-end-vampire-reign' },  
        { Title: 'Attack on Titan', ImageAsset: 'aot.jpg', Link: 'http://www.crunchyroll.com/attack-on-titan' },
        { Title: 'Future Diary', ImageAsset: 'mn.jpg', Link: 'http://www.crunchyroll.com/the-future-diary' }
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