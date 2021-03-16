//Dependencies
const db = require("../models");

module.exports = app => {
    //find all route
    app.get("/api/workouts", (req, res) => {
        db.Workout.find().then(data => {
            res.json(data);
        }).catch(err => {
            res.json(err);
        });
    });

    // display all workouts within a range of the past seven
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).limit(7).then(data => {
            res.json(data);
        }).catch(err => {
            res.json(err);
        });
    });

    //post route for a new workout
    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body).then(data => {
            res.json(data);
        });
    });

    // add exercise
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }).then(data => {
            res.json(data);
        }).catch(err => {
            res.json(err);
        });
    });
};