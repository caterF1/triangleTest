var express = require("express");
var bodyParser = require("body-parser");
var app = express();

//requiring routes
var triangulationRoutes = require("./routes/triangulations");

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}));
app.use("/public", express.static(__dirname + "/public"));

app.use("/triangulations", triangulationRoutes);

var port = process.env.PORT || 3000;
app.listen(port, process.env.IP, function(){
    console.log("The Triangulation server has started.");
});