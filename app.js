const config = require('./config');
const retweet = require('./retweet');
const twit = require('twit');
const T = new twit(config);

var minutes = 10;
_TIME = Math.floor(minutes * 60000);

console.log("==============================");
console.log("=                            =");
console.log("=     STARTING Wolfee Bot    =");
console.log("=                            =");
console.log("==============================");

retweet(_TIME);