const { twitterClient } = require("./twitterClient.js");
const like = async () => {
  const whereTakenTweets = await twitterClient.v2.search("#Worldle");

  console.log(whereTakenTweets);
  //   for await (const tweet of whereTakenTweets) {
  //     await twitterClient.v2.like(process.env.APP_ID, tweet.id);
  //   }
};

module.exports = { like };
