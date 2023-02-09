require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const { cronTweet } = require("./tweet");
const { findUser } = require("./findUser");
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

findUser("OpenBookAI");
// cronTweet.start();
