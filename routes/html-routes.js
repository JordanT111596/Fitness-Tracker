//Dependencies
// const db = require("../models");
const path = require('path');

module.exports = app => {
    //exercise route loads exercise.html
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    //stats route loads stats.html
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
};
