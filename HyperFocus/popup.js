let submitButton = document.getElementById("Submit Button");
let customDomainName = document.getElementById("Custom Domain Name");
var targets;

submitButton.addEventListener("click", function() {
  chrome.storage.sync.get("Blocked Domain Name List", function(BNDL) {
    BNDL["Blocked Domain Name List"].push(customDomainName.value);
    chrome.storage.sync.set({"Blocked Domain Name List": BNDL["Blocked Domain Name List"]});
  });
});