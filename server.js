const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('It works')
})

app.get('/test', (req, res) => {
    res.send('test')
})

app.listen(process.env.PORT || 5000);
module.exports = app