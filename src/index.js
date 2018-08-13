window.console.log('hello world');
var emojaddress = require('emojaddress').default;

var btc_addr = "1thMirt546nngXqyPEz532S8fLwbozud8";
var english_mn = emojaddress.mnemonic(btc_addr, {"emoji": false, "coin": "btc", "language":"English"});
window.console.log("English mnemonic " + english_mn);
var chinese_mn = emojaddress.mnemonic(btc_addr, {"emoji": false, "coin": "btc", "language":"Chinese"});
window.console.log("English mnemonic " + chinese_mn);
var emoji_mn = emojaddress.mnemonic(btc_addr, {"coin": "btc"});
window.console.log("Emoji mnemonic " + emoji_mn);

var addP = (txt) => {
  var newP = document.createElement("p");
  var text = document.createTextNode(txt);
  newP.appendChild(text);
  return newP;
}

var app = document.getElementById("app");
var p = addP(`English mnemonic [${english_mn}]`);
app.appendChild(p);
p = addP(`Chinese mnemonic [${chinese_mn}]`);
app.appendChild(p);
p = addP(`Emoji mnemonic [${emoji_mn}]`);
app.appendChild(p);



