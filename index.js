var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/testeDelivery', (req, res) => {
    var intentName = request.body.queryResult.intent.displayName;
    
if (intentName == "intentTest") {
 

 response.json({"fulfillmentText" : "Isso aqui é um Teste"});
 } 
   
})

app.listen(3000, () => {console.log("Servidor Rodando")})