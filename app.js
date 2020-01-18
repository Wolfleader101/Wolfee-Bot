const config = require('./config');
const twit = require('twit');
const T = new twit(config);

const params = {
    q:'#nodejs, #Nodejs, #GameDev, #100DaysOfCode, #Programming, #c++, #C#, #Unity, #UnrealEngine, #Coding, #JS, #Javascript', 
    result_type: 'recent',
    lang: 'en' 
}

console.log("==============================");
console.log("=                            =");
console.log("=     STARTING Wolfee Bot    =");
console.log("=                            =");
console.log("==============================");
function retweet() {
    console.log("TEST1111");
    searchTweets(params);
    console.log("TEST");
    
}
setInterval(retweet, 5000);

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
        }
    });
}
function postTweet(retweetID) {
    T.post('statuses/retweet/:id', {id: retweetID},(err, response) => {
        if (response) {
            console.log("Retweeted tweet: " + retweetID);
        }
        if (err) {
            console.log("An error occured when trying to retweet");
            
        }
    });
}