var test = require('ava');
var emojaddress = require('../dist/bundle-back').default;

var eth_addr = "0x5e575279bf9f4acf0a130c186861454247394c06";
var eth_addr_0 = "0x0000000000000000000000000000000000000001";
var btc_addr = "1thMirt546nngXqyPEz532S8fLwbozud8";

test('btc to words', t => {
    t.is(emojaddress.mnemonic(btc_addr, {"emoji": false, "coin": "btc", "language":"English"}), 
        'fragile choice safe filter nose ginger toast hero laugh seven hockey bag soda immune able');
});

test('eth to Chinese', t => {
    t.is(emojaddress.mnemonic(eth_addr, {"emoji": false, "coin": "btc", "language":"Chinese"}), 
        '欧棚增环偶件毫质阅才芯舞绕凝们');
});

test('btc to Chinese', t => {
    t.is(emojaddress.mnemonic(btc_addr, {"emoji": false, "coin": "btc", "language":"Chinese"}), 
        '停车荒载麻挥茎穿险暂脸心浸架是');
});

test('eth to emoji', t => {
    t.is(emojaddress.mnemonic(eth_addr), "🥔🇨🇬👸🏿💏📡👨🏻‍💻🤚🏻👩🏿‍⚕️🇦🇸🧚‍♀️⏫⌚💧🚒😐");
});

test('eth_0 to emoji', t => {
    t.is(emojaddress.mnemonic(eth_addr_0), "😁");
});

test('eth to emoji', t => {
    t.is(emojaddress.mnemonic(btc_addr), "🖖🏿🤱📏👨‍👨‍👧‍👧🚗✍🏿🇧🇯🧤🌾🛒👝🧓🏿⛎🐃😂");
});
