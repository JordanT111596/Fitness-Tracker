//Dependencies
const db = require("../models");

module.exports = app => {
    //find all route
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.json(data);
            }
        });
    });
};