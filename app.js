const config = require('./config');
const { retweet } = require('./retweet');
const twit = require('twit');
const T = new twit(config);

// Set how often to retweet recent tweets
const _TIME_RECENT_MINS = 10;

// Set how often to retweet recent tweets
const _TIME_POPULAR_MINS = 30;


const chalk = require('chalk');
console.log(chalk.green("=============================="));
console.log(chalk.green("=                            ="));
console.log(chalk.green("=    "),chalk.magenta("STARTING Wolfee Bot"), chalk.green("   ="));
console.log(chalk.green("=          "),chalk.magenta("V0.2.0"), chalk.green("          ="));
console.log(chalk.green("=============================="));

        /* IGNORE EVERYTHING BELOW THIS LINE */

const _TIME_RECENT = Math.floor(_TIME_RECENT_MINS * 60000);
const _TIME_POPULAR = Math.floor(_TIME_POPULAR_MINS * 60000);
retweet(_TIME_RECENT, _TIME_POPULAR);