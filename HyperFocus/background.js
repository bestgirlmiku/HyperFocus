const targets = [
    "www.youtube.com",
    "www.imdb.com",
    "www.cnn.com", 
    "www.netflix.com",
    "weather.com",
    "www.twitch.tv",
    "soundcloud.com",
    "genius.com",
    "www.dailymotion.com",
    "www.reddit.com",
    "www.amazon.com", //add tiktok back "www.tiktok.com",
    "www.twitter.com",
    "discord.com"   
  ];

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({"Blocked Domain Name List": targets});
});