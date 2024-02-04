const express = require('express');
const app = express();
const port = 5000;
const routes = require('./api/api');

app.get('/', (req, res) => {
    res.send('Hello World!')
});


app.use(routes);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});