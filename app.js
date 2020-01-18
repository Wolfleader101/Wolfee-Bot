const config = require('./config');
const retweet = require('./retweet');
const twit = require('twit');
const T = new twit(config);

var minutes = 10;
_TIME = Math.floor(minutes * 60000);

const chalk = require('chalk');
console.log(chalk.green("=============================="));
console.log(chalk.green("=                            ="));
console.log(chalk.green("=    "),chalk.magenta("STARTING Wolfee Bot"), chalk.green("   ="));
console.log(chalk.green("=                            ="));
console.log(chalk.green("=============================="));

retweet(_TIME);