// Importing necessary modules from the Solana web3.js and Raydium SDK
const { Connection } = require('@solana/web3.js');  // Solana connection object for interacting with the network
const { WSOL } = require('@raydium-io/raydium-sdk');  // Wrapped SOL (WSOL) token object from Raydium SDK

let RPC_URL = "";  // Placeholder for the RPC/HTTPS connection URL to your Solana node

// Configuring tokens for the liquidity pool
const tokenA = WSOL.mint;  // Token A of the pool; using Wrapped SOL (WSOL) as the default
const tokenB = "B5WTLaRwaUQpKk7ir1wniNB6m5o8GgMrimhKMYan2R6B";  // Token B of the pool; using Pepe token as the default

// Creating a new connection instance with the provided RPC URL and a commitment level of "confirmed"
const connection = new Connection(RPC_URL, "confirmed");

// Exporting the connection and token configurations for use in other parts of the application
module.exports = { connection, tokenA, tokenB };
