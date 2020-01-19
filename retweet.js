const config = require('./config');
const twit = require('twit');
const T = new twit(config);

const chalk = require('chalk');

var recent = (_TIME_RECENT) => {

    // START OF RECENT Retweets
    const params = {
        q: '#100DaysOfCode OR #Nodejs OR #GameDev OR #100DaysOfCode OR #Programming OR #c++ OR #C# OR #Unity OR #UnrealEngine OR #Coding OR #JS OR #Javascript OR #WebDev',
        count: 15,
        result_type: 'recent',
        lang: 'en'
    }

    function retweet() {
        searchTweets(params);

    }
    setInterval(retweet, _TIME_RECENT);

    function searchTweets(params) {
        T.get('search/tweets', params, (err, data, response) => {
            let tweets = data.statuses;
            if (!err) {
                for (let dat of tweets) {
                    let retweetID = dat.id_str;
                    postTweet(retweetID);
                }
            } else {
                console.log("ERROR");
                console.log(err);

            }
        });
    }

    function postTweet(retweetID) {
        let Passcounter = 0;
        let errCounter = 0;
        T.post('statuses/retweet/:id', {
            id: retweetID
        }, (err, data, response) => {
            if (response) {
                console.log("Retweeted tweet: " + retweetID);
            }
            if (err) {
                console.log("An error occured when trying to retweet (The tweet probably already exsists)");

            }
        });
        console.log(chalk.red("====================================================="));
        console.log(chalk.green(`Retweeted a total of: ${Passcounter} tweets!!!`));
        console.log(chalk.yellow(`Failed to retweet ${errCounter} tweets. Most likely already tweeted them`));
        
        console.log(chalk.red("====================================================="));
    }
};
var popular = (_TIME_POPULAR) => {

    // START OF POPULAR retweets
    const params = {
        q: '#100DaysOfCode OR #Nodejs OR #GameDev OR #100DaysOfCode OR #Programming OR #c++ OR #C# OR #Unity OR #UnrealEngine OR #Coding OR #JS OR #Javascript OR #WebDev',
        count: 100,
        result_type: 'popular',
        lang: 'en'
    }

    function retweet() {
        searchTweets(params);

    }
    setInterval(retweet, _TIME_POPULAR);

    function searchTweets(params) {
        T.get('search/tweets', params, (err, data, response) => {
            let tweets = data.statuses;
            if (!err) {
                for (let dat of tweets) {
                    let retweetID = dat.id_str;
                    postTweet(retweetID);
                }
            } else {
                console.log("ERROR");
                console.log(err);

            }
        });
    }

    function postTweet(retweetID) {
        let Passcounter = 0;
        let errCounter = 0;
        T.post('statuses/retweet/:id', {
            id: retweetID
        }, (err, data, response) => {
            if (response) {
                counter++;
                console.log("Retweeted tweet: " + retweetID);
            }
            if (err) {
                errCounter++;
                console.log("An error occured when trying to retweet (The tweet probably already exsists)");

            }
        });
        console.log(chalk.red("====================================================="));
        console.log(chalk.green(`Retweeted a total of: ${Passcounter} tweets!!!`));
        console.log(chalk.yellow(`Failed to retweet ${errCounter} tweets. Most likely already tweeted them`));
        
        console.log(chalk.red("====================================================="));
    }
};

module.exports = {
    retweet: (_TIME_RECENT, _TIME_POPULAR) => {
        console.log(chalk.red.bold.underline("\nStarting up Retweet Script..."));
        console.log(chalk.blue.bgBlue("================================================================================================="));
        console.log(chalk.yellow.bold("Retweets are set to retweet popular tweets every 30 Minutes and recent tweets every 10 Minutes.\n  This can be changed in the _TIME variables in app.js"));
        console.log(chalk.blue.bgBlue("================================================================================================="));
        recent(_TIME_RECENT);
        popular(_TIME_POPULAR);
    }
}