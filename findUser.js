const { twitterBearer } = require("./twitterClient.js");

// const username = "OpenBookAI";

const findUser = async (username) => {
  const foundUsers = await twitterBearer.v1.searchUsers(username);

  for await (const user of foundUsers) {
    console.log("User matching search:", user.screen_name);
  }
};

module.exports = { findUser };
