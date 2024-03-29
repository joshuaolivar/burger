var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.all(function (data) {
        var burgerObject = {
            burger: data
        };
        console.log("Im the burger!")
        res.render("index", burgerObject);
    });
});

// Export routes for server.js to use.
module.exports = router;