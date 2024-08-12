const { 
    connection,
    tokenA,
    tokenB 
} = require("./config")
const { PublicKey } = require("@solana/web3.js");
const { fetchMarketAccounts } = require("./scripts/fetchMarketAccounts")
const { getPoolKeysByPoolId } = require("./scripts/getPoolKeysByPoolId")

const main = async ()  => {
    const base = new PublicKey(tokenA);
    const quote = new PublicKey(tokenB);
    // Fetching market data of the tokens to get pool id
    const marketData = await fetchMarketAccounts( connection, base, quote, "confirmed" )
    const poolKeys =  await getPoolKeysByPoolId( marketData.id ,connection )
    console.log(poolKeys);
}

main()