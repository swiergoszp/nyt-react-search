const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const router = require("./routes");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes
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
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});