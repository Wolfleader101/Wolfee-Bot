const config = require('./config');
const twit = require('twit');
const T = new twit(config);

const chalk = require('chalk');

module.exports = (_TIME) => {
    console.log(chalk.red.bold.underline("\nStarting up Retweet Script..."));
    console.log(chalk.blue.bgBlue("================================================================================================="));
    console.log(chalk.yellow.bold("Retweets are set to retweet every 10 Minutes. This can be changed in the _TIME variable in app.js"));
    console.log(chalk.blue.bgBlue("================================================================================================="))
    
    
    // START OF SCRIPT
        const params = {
            q:'#100DaysOfCode OR #Nodejs OR #GameDev OR #100DaysOfCode OR #Programming OR #c++ OR #C# OR #Unity OR #UnrealEngine OR #Coding OR #JS OR #Javascript OR #WebDev',
            count: 10,
            result_type: 'recent',
            lang: 'en' 
        }
        
        function retweet() {
            searchTweets(params);
            
        }
        setInterval(retweet, _TIME);
        
        function searchTweets(params) {
            T.get('search/tweets', params, (err, data, response) => {
                let tweets = data.statuses;
                if (!err) {
                    for(let dat of tweets) {
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
            T.post('statuses/retweet/:id', {id: retweetID},(err, data, response) => {
                console.log(data);
                if (response) {
                    console.log("Retweeted tweet: " + retweetID);
                }
                if (err) {
                    console.log("An error occured when trying to retweet (The tweet probably already exsists)");
                    
                }
            });
        }
}

