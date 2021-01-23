var express = require("express");
var path = require("path");
const { getMaxListeners } = require("process");

var app = express();
var PORT = 6060;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var currentReservations = [
    {
        id: 123,
        name: "Matt Courtney",
        email: "matt@gmail.com",
        phone: "607-111-1111"
    },
    {
        id: 321,
        name: "Kelly Courtney",
        email: "kelly@gmail.com",
        phone: "607-222-1111"
    },
    {
        id: 333,
        name: "Brian Courtney",
        email: "brian@gmail.com",
        phone: "607-111-3333"
    },
]

var waitlist = [
    {
        id: 456,
        name: "Gus",
        email: "gus@yahoo.com",
        phone: "704-111-1111"
    }
]

// Three main pages
app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname + "/view.html"))
});

app.get("/tables", function(req,res) {
    res.sendFile(__dirname + "/tables.html")
});

app.get("/reserve", function(req,res) {
    res.sendFile(__dirname + "/reserve.html")
})

// display all current reservations
app.get("/api/reservations", function(req,res) {
    res.json(currentReservations);
})

// displays WaitList
app.get("/api/waitlist", function(req,res) {
    res.json(waitlist)
})

// adding a new reservation 
app.post("/api/waitlist", function(req,res) {
    var newReservation = req.body;

    console.log(newReservation);
})

app.listen(PORT, function() {
    console.log("App is listening on port "+ PORT)
})