//Dependencies
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// The program searches for the online mongodb connection first, then it will just run locally if it is not found
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
  

require("./routes/html-routes.js")(app)
require("./routes/api-routes.js")(app)
// Un-comment the line directly below in order to provide seed data locally
// require('./seeders/seed')

// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});