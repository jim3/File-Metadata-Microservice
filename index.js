const express = require("express");
const cors = require("cors");

// Create an instance of express
const app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public")); // app.use(express.static('public')); ???

// Set up middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", require("./routes/indexRoute"));

const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log("Your app is listening on port " + port);
});
