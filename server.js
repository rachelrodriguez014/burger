var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var methodOver = require("method-override");


var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.use("/", routes);

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});




