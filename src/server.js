const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const index = require('./routes/index');
const app = express();

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);

// Set Static Path
app.use(express.static(path.join(__dirname, '../../build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

var port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server has started on Port ${port}...`);
})