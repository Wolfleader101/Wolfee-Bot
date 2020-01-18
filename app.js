const config = require('./config');
const twit = require('twit');
const T = new twit(config);

console.log("==============================");
console.log("=                            =");
console.log("=     STARTING Wolfee Bot    =");
console.log("=                            =");
console.log("==============================");
const params = {
    q:'#100DaysOfCode, #Nodejs, #GameDev, #100DaysOfCode, #Programming, #c++, #C#, #Unity, #UnrealEngine, #Coding, #JS, #Javascript',
    count: 10,
    result_type: 'popular',
    lang: 'en' 
}

function retweet() {
    searchTweets(params);
    
}
setInterval(retweet, 10000);

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