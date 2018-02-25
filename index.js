const bip39 = require("bip39")
const hdkey = require('ethereumjs-wallet/hdkey')
const WALLET_HD_PATH = "m/44'/60'/0'/0/"
var mnemonic = process.env.MNEMONIC
var addressIndex = process.env.INDEX ? parseInt(process.env.INDEX) : 0
var numAddresses = process.env.NUM ? parseInt(process.env.NUM) : 5

if (!mnemonic) {
  throw Error('No mnemonic was provided. Use "MNEMONIC" env var.')
}

const seed = bip39.mnemonicToSeed(mnemonic)
const hdwallet = hdkey.fromMasterSeed(seed)

const wallets = []
for (let i = addressIndex; i < addressIndex + numAddresses; i++){
  const wallet = hdwallet.derivePath(WALLET_HD_PATH + i).getWallet()
  const address = '0x' + wallet.getAddress().toString('hex')
  
  wallets.push({
    address,
    wallet
  })
}

console.log(`
      ****************************************
                   MNEMONIC UTILS 
      ****************************************

Params:
`)
console.log('\t- Mnemonic: "%s"', mnemonic)
console.log('\t- Address Index: %d', addressIndex)
console.log('\t- Number of addresses: %d', numAddresses)
console.log()

console.log('\n----------------------------------------------------------------------------------------------------------------')
console.log('                 PUBLIC KEY                    |                        PRIVATE KEY')
console.log('----------------------------------------------------------------------------------------------------------------')
wallets.forEach((walletInfo, index) => {
  const privateKey = walletInfo.wallet.getPrivateKey().toString('hex')
  console.log(`[${index}] ${walletInfo.address}: ${privateKey}`)
})
