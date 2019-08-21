var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

// Get request
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var handlebarsObject = {
            burgers: data
        };
        res.render("index", handlebarsObject);
    });
});

// Post request for new inputs
router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name"
    ],
        [
            req.body.burger_name
        ],
        function (result) {
            res.json({ id: result.insertId })
        });
});

// Post request to update data
router.post("api/burgers/:id", function (req, res) {
    var burgerId = "id = " + req.params.id;

    console.log("New Burger Update", burgerId);

    burger.updateOne({
        devoured: 1
    },
        burgerId, function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            else {
                res.status(200).end()
            }
        });
});

module.exports = router;
