require("dotenv").config({ path: __dirname + "/.env" });

const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const { TweetTimer } = require("./tweet");
const { findUser } = require("./findUser");
const { like } = require("./like");
const { followersLookup } = require("./followersLookup");

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// like();

// followersLookup();

// findUser("ExampleUser");

// TweetTimer.start();
