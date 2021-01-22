var express = require("express");
var path = require("path");

var app = express();
var PORT = 6060;

app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname + "/view.html"))
});

app.get("/tables", function(req,res) {
    res.sendFile(__dirname + "/tables.html")
});

app.get("/reserve", function(req,res) {
    res.sendFile(__dirname + "/reserve.html")
})

app.listen(PORT, function() {
    console.log("App is listening on port "+ PORT)
})