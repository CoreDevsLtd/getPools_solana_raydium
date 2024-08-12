// Importing necessary configurations from config.js
const { 
    connection,  // Connection to the Solana network
    tokenA,      // Token A's public key (mint address)
    tokenB       // Token B's public key (mint address)
} = require("./config");

// Importing necessary classes from the Solana web3.js library
const { PublicKey } = require("@solana/web3.js");

// Importing functions from the scripts folder
const { fetchMarketAccounts } = require("./scripts/fetchMarketAccounts");  // Function to fetch market accounts
const { getPoolKeysByPoolId } = require("./scripts/getPoolKeysByPoolId");  // Function to get pool keys by pool ID

// Creating the main asynchronous function
const main = async () => {
    // Initiating token PublicKey instances using the provided public key strings from config.js
    const base = new PublicKey(tokenA);  // Base token public key (tokenA)
    const quote = new PublicKey(tokenB);  // Quote token public key (tokenB)
    
    // Fetching market data for the tokens to retrieve the pool ID
    const marketData = await fetchMarketAccounts(connection, base, quote, "confirmed");
    
    // Fetching pool keys using the retrieved pool ID (marketData.id)
    const poolKeys = await getPoolKeysByPoolId(marketData.id, connection);
    
    // Logging the fetched pool keys to the console
    console.log(poolKeys);
}

// Calling the main function to execute the script
main();
