const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors({
  origin: ['http://localhost:3001',],
  credentials: true
}));
// npm install cloudinary

// app.use(express.json());
app.use(cookieParser());
app.use("/test", (req, res) => {
  res.send("Hello world!");
});

// app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" })); // Add limit here as well
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

// import routes
const user = require("./controllers/userController");
const message = require("./controllers/messageController")
const adoption = require('./controllers/adoptionController');


app.use("/api/users", user);
app.use("/api/message", message);
app.use("/api/adopt", adoption);


// it's for ErrorHandling
app.use(ErrorHandler);

module.exports = app;
