const { twitterBearer } = require("./twitterClient.js");

const followersLookup = async () => {
  const foundUsers = await twitterBearer.v2.followers();
  for await (const user of foundUsers) {
    console.log("User is a follower:", user.screen_name);
  }
};

module.exports = { followersLookup };
