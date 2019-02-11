const bip39 = require("bip39")
const { privateToAddress } = require('ethereumjs-util')

var pk = process.env.PK

if (!pk) {
  throw Error('No private key was provided. Use "PK" env var.')
}
const pkBuffer = Buffer.from(pk, 'hex')

console.log(`
      ****************************************
                   MNEMONIC UTILS
      ****************************************

Params:
`)

console.log('\t- Private key: "%s"', pk)
console.log('\t- PK buffer: "%s"', pkBuffer)

const addressBuffer = privateToAddress(pkBuffer)
const address = addressBuffer.toString('hex')

console.log('\t- Address: 0x%s', address)
console.log()