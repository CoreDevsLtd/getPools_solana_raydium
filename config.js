const { Connection } = require('@solana/web3.js');
const { WSOL } = require('@raydium-io/raydium-sdk');

let RPC_URL= "" // Enter Your Node RPC/HTTPS connection url here
const tokenA = WSOL.mint // Enter tokenA of the pool. || Using Wrapped SOL by default
const tokenB = "B5WTLaRwaUQpKk7ir1wniNB6m5o8GgMrimhKMYan2R6B" // Enter tokenB of the pool || Using Pepe token as default
const connection = new Connection(RPC_URL, "confirmed"); // Creating web3 instance

module.exports = { connection, tokenA, tokenB } // Exporting the configurations 