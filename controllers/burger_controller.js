const express = require("express")
const borger = require("../models/burger.js")
const router = express.Router()


router.get("/", function (req, res) {
    console.log("Viewing burgers")
    borger.selectAll(function (data) {
        console.log("in function")
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);

        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log("adding burger")
    borger.insertOne(["name"], [req.body.name], function (result) {
        // Send back the ID of the new quote
        res.json({
            id: result.insertId
        });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    console.log(req.body.devoured)
    let chosenId = req.params.id
    console.log(chosenId)
    borger.updateOne({
        devoured: req.body.devoured
    }, chosenId).then(function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;