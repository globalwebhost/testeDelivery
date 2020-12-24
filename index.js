var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello World');
})

app.listen(3000, () => {console.log("Servidor Rodando")})