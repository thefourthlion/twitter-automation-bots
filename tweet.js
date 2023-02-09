const { twitterClient } = require("./twitterClient.js");
const CronJob = require("cron").CronJob;
const tweet = async () => {
  try {
    await twitterClient.v2.tweet("Hello world!");
  } catch (e) {
    console.log(e);
  }
};

const cronTweet = new CronJob("30 * * * * *", async () => {
  console.log("Started cronjob...✅");
  try {
    tweet();
    console.log("Tweeted 💩");
  } catch (e) {
    console.log({ error: e });
  }
});

module.exports = { cronTweet };
