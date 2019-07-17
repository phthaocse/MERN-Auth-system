const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); //used to parse incoming request bodies in a middleware

const app = express();

//Body parser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

//connect db
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port,() => console.log(`Sever up and running on port ${port}!`));