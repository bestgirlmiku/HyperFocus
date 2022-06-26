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

const customDomainNameList = [];

let yes = [];

let submitButton = document.getElementById("Submit Button");
submitButton.addEventListener("click", function() {
  let customDomainName = document.getElementById("Custom Domain Name").value;
  customDomainNameList.push(customDomainName);
  yes = targets.concat(customDomainNameList);
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {CDNL: yes}, function(response) {
    });
  });
})


// let submitButton = document.getElementById("Submit Button");
// submitButton.addEventListener("click", function() {
//   let customDomainName = document.getElementById("Custom Domain Name").value;
//   localStorage["Custom Domain Name"] = customDomainName;

//   // setTimeout(() => {
//   //   alert(localStorage["Custom Domain Name"]);
//   // }, 5000);
// });

// // let submitButton = document.getElementById("Submit Button");
// // submitButton.addEventListener("click", function() {
// //   let customDomainName = document.getElementById("Custom Domain Name").value;
// //   chrome.storage.local.set({"Custom Domain Name": customDomainName}, function() {
// //     return; 
// //   });
// //   setTimeout(() => {
// //     alert(chrome.storage.local.get("Custom Domain Name", (CDN) => {
// //       return CDN;
// //     }),5000);
// //   })
// // });