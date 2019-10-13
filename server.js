var express = require ("express");
var app = express();
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'text/html '}))



app.use(bodyParser.urlencoded({ extended: true }));
 

app.listen(PORT, function() {
	console.log("listening on port: " + PORT);
});