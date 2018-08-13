==============
emojaddress-js
==============

Emoji mnemonic for Ethereum and Bitcoin addresses.

Features
--------

Bitcoin and Ethereum address are hard to short-memorize when you navigate websites like etherscan.io or blockchain.info. This project is to ease that

- Transalates address into mnemonic
- Supports mnemonic for English, Chinese and Emoji

Deterministic wallets use mnemonic for private key. The same idea can be applied to public address. It's a matter of encoding eventually. The BTC and Ethereum public addresses are based on a 20 bytes (160 bit) integer. Each dictionary's size is 2048. The address is encoded in 15 mnemonic to cover the entropy.

The Python version is at `Python emojaddress`_

.. _`Python emojaddress`: https://github.com/MerkleData/emojaddress

Install
-------

Node.js:

.. code-block:: javascript
    
    $ npm install --save emojaddress

    const emojaddress = require('emojaddress').default;

Browser, webpack build:

.. code-block:: javascript
    
    $ npm install --save emojaddress

    var emojaddress = require('emojaddress').default;

    # in HTML
    <script src="bundle-front.js"></script>


Usage
-----

.. code-block:: javascript

    const emojaddress = require('../dist/bundle-back').default;
    var eth_addr = "0x0000000000000000000000000000000000000001";
    var btc_addr = "1thMirt546nngXqyPEz532S8fLwbozud8";
    # Emoji mnemonic
    emojaddress.mnemonic(eth_addr);
    # English word mnemonic
    emojaddress.mnemonic(btc_addr, {"emoji": false, "coin": "btc", "language":"English"});
    # Chinese character mnemonic
    emojaddress.mnemonic(btc_addr, {"emoji": false, "coin": "btc", "language":"Chinese"}

- `See example usages here <https://github.com/MerkleData/emojaddress-js/blob/master/tests/build.spec.js>`_

Credits
-------

- BIP dictionary based on `bitcoin project`_ 
- Unicode Emoji `Unicode Emoji`_

.. _`bitcoin project`: https://github.com/bitcoin/bips/tree/master/bip-0039
.. _`Unicode Emoji`: https://unicode.org/emoji/

