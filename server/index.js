const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Gamers!');
});

app.listen(5003, () => {
    console.log('Running on port 5003');
});