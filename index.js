const BigNumber = require('bignumber.js');
const English = require('./english');
const Chinese = require('./Chinese');
const Emoji   = require('./unicode_codes');

const SUPPORTED_COINS = ['btc', 'eth'];
const LIMIT = 24;
const B58_CODE_STR = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const B256_CODE_STR = (() => {
    var codes = [];
    for (var i=0; i<256; i++) {
      // no multibytes char
      codes = codes.concat(String.fromCharCode(i));
    }
    return codes.join("");
})();

const emojaddress = {

  mnemonic(val, opts) {
    // e.g. opts = {"coin": "eth", "emoji": true, "language": null}
    var options = opts || {};
    if (options.hasOwnProperty('coin') && !SUPPORTED_COINS.includes(options.coin.toLowerCase())) {
      throw "Only supports " + SUPPORTED_COINS;
    } 
    var coin = (options['coin'] || '').toLowerCase();
    var _nr;
    if (coin == 'eth' || val.startsWith("0x")) {
      _nr = new BigNumber(val, 16);
    } else {
      _nr = this._b58decode(val);
    }
    if (isNaN(_nr)) {
      throw "Error in decoding input encoding";
    }
    var emoji = true;
    if (options.hasOwnProperty('emoji')) {
      var emoji = options['emoji'];
    } 
    var mnemonics, join_sep;
    if (emoji) {
      mnemonics = Emoji;
      join_sep = '';
    } else {
      if (['chinese', 'Chinese'].includes(options['language'])) {
        mnemonics = Chinese;
        join_sep = '';
      } else {
        mnemonics = English;
        join_sep = ' ';
      }
    }
    var size = mnemonics.length;
    var i = _nr;
    var words = [];
    while (i > 0 && words.length < LIMIT) {
      var rem = i.modulo(size);
      i = i.dividedToIntegerBy(size);
      words.push(mnemonics[rem]);
    }
    return words.join(join_sep);
  },

  _b58decode(b58_str) {
    let base = 58;
    var nr_1_s = b58_str.match(/^1*/g)[0].length;
    let acc = this._decode_base(b58_str, base, B58_CODE_STR);
    // skip checksum validation
    var r_bytes = Array(nr_1_s).fill(String.fromCharCode(0));
    r_bytes = r_bytes.concat(this._encode_base256(acc));
    r_bytes = r_bytes.slice(1, r_bytes.length-4).join("");
    return this._decode_base(r_bytes, 256, B256_CODE_STR);
  },

  _decode_base(str, base, code_str) {
    let acc = new BigNumber(0);
    for (var i=0; i < str.length; i++) {
      let ch = str.charAt(i);
      acc = acc.times(base);
      let idx = code_str.indexOf(ch);
      if (idx < 0) {
        throw "Invalid char from base58check string " + ch;
      }
      acc = acc.plus(idx);
    }
    return acc;
  },

  _encode_base256(nr) {
    var acc = [];
    var base = 256;
    const code_str = B256_CODE_STR;
    while (nr > 0) {
      var b = code_str[nr.modulo(base)];
      nr = nr.dividedToIntegerBy(base);
      acc.unshift(b);
    }
    return acc;
  },
}

export default emojaddress;
