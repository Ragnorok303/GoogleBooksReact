const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require('./routes');
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
} else {
  app.use(express.static("./client/public"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {useNewUrlParser: true, useUnifiedTopology: true});
console.log("mongo is connected")

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});