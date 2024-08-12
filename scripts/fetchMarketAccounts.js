// Importing necessary objects from the Raydium SDK
const {  
    LIQUIDITY_STATE_LAYOUT_V4,  // Layout for the liquidity state
    MAINNET_PROGRAM_ID          // Mainnet program IDs for different Raydium components
} = require('@raydium-io/raydium-sdk');

// Creating an asynchronous function to fetch market accounts based on the provided base and quote tokens
const fetchMarketAccounts = async (connection, base, quote, commitment) => {
    try {
        // Fetching program accounts from the blockchain using the connection object and the provided parameters
        const accounts = await connection.getProgramAccounts(
            MAINNET_PROGRAM_ID.AmmV4,  // Program ID for the Raydium AMM V4
            {
              commitment,  // The commitment level, determines how confirmed the data should be
              filters: [   // Filters to narrow down the search for relevant accounts
                { dataSize: LIQUIDITY_STATE_LAYOUT_V4.span },  // Filters by the size of the liquidity state layout
                {
                  memcmp: {  // Memory comparison filter to match the base mint
                    offset: LIQUIDITY_STATE_LAYOUT_V4.offsetOf("baseMint"),  // Offset for the base mint in the layout
                    bytes: base.toBase58(),  // Convert the base mint to a base58 string
                  },
                },
                {
                  memcmp: {  // Memory comparison filter to match the quote mint
                    offset: LIQUIDITY_STATE_LAYOUT_V4.offsetOf("quoteMint"),  // Offset for the quote mint in the layout
                    bytes: quote.toBase58(),  // Convert the quote mint to a base58 string
                  },
                },
              ],
            }
        );
        
        // Mapping through the fetched accounts to decode the data and format it
        let rawData =  accounts.map(({ pubkey, account }) => ({
            id: pubkey.toString(),  // Convert the public key to a string
            data: LIQUIDITY_STATE_LAYOUT_V4.decode(account.data),  // Decode the account data using the liquidity state layout
        }));
        
        // Assuming only one relevant account is found, return the first object
        let obj = rawData[0];
        return obj;
    } catch (error) {
        // Catch any errors during the fetch process and log them
        console.log(`fetchMarketAccounts`, error);
    } 
}

// Exporting the fetchMarketAccounts function for use in other parts of the application
module.exports = { fetchMarketAccounts };
