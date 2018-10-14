const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const router = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(router);

// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact", { useNewUrlParser: true }, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.error(error);
  } else {
    console.log("mongoose connection is successful");
  }
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
});