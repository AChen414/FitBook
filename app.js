const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const users = require("./routes/api/users");
const exercises = require("./routes/api/exercises");
const workouts = require("./routes/api/workouts");
const passport = require('passport');
const path = require('path');

const profile = require("./routes/api/profile");


mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));
    
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/profile", profile);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

// app.get('/', (req, res) => res.send('Hello World!'));
app.use(passport.initialize());
require('./config/passport')(passport);

app.use("/api/users", users);
app.use("/api/exercises", exercises);
app.use("/api/workouts", workouts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is runnning on port ${port}`));
