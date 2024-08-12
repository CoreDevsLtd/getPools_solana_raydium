const {  
    LIQUIDITY_STATE_LAYOUT_V4,
    MAINNET_PROGRAM_ID 
} = require('@raydium-io/raydium-sdk');

const fetchMarketAccounts = async (connection, base, quote, commitment) => {
    try {
        const accounts = await connection.getProgramAccounts(
            MAINNET_PROGRAM_ID.AmmV4,
            {
              commitment,
              filters: [
                { dataSize: LIQUIDITY_STATE_LAYOUT_V4.span },
                {
                  memcmp: {
                    offset: LIQUIDITY_STATE_LAYOUT_V4.offsetOf("baseMint"),
                    bytes: base.toBase58(),
                  },
                },
                {
                  memcmp: {
                    offset: LIQUIDITY_STATE_LAYOUT_V4.offsetOf("quoteMint"),
                    bytes: quote.toBase58(),
                  },
                },
              ],
            }
        );
        
        let rawData =  accounts.map(({ pubkey, account }) => ({
            id: pubkey.toString(),
            data :LIQUIDITY_STATE_LAYOUT_V4.decode(account.data),
        }));
        let obj = rawData[0]
        return obj
    } catch (error) {
        console.log( `fetchMarketAccounts`, error );
    } 
}

module.exports = { fetchMarketAccounts }