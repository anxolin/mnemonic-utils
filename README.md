# Mnemomic utils
It generate the public/private keys from a BIP39 mnemomic.

There are three environment variables that can be set:
* `MNEMONIC`: Mnemonic (i.e. `advice save proof shift social luggage test sauce vintage fine angry jump`)
* `INDEX`: Account index where you want to start to generate the wallets.
* `NUM`: Number of wallets to generate

Install dependencies:

```js
npm install
```

Example:

```js
MNEMONIC="advice save proof shift social luggage test sauce vintage fine angry jump" node index.js
```
