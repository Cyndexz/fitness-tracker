const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Gamers!');
});

app.listen(5001, () => {
    console.log('Running on port 5001');
});