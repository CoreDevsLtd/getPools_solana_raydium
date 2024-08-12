# Raydium Pool Keys Fetcher

This project is a Node.js program designed to quickly fetch pool keys from the Raydium decentralized exchange. It uses the Solana web3.js library and the Raydium SDK to interact with the Solana blockchain, enabling fast retrieval of pool data based on specified tokens.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Author](#author)

## Installation

Before you begin, ensure that you have [Node.js](https://nodejs.org/) installed on your system.

1. Clone the repository:

   ```bash
   git clone https://github.com/CoreDevsLtd/getPools_solana_raydium.git
   cd getPools_solana_raydium
2. Install the necessary dependencies:
    ```npm install

## Configuration

Before running the program, you need to configure the config.js file:

    RPC_URL: Add your Solana RPC/HTTPS connection URL.
    tokenA: Specify the mint address of Token A (defaults to Wrapped SOL).
    tokenB: Specify the mint address of Token B (defaults to Pepe token).

## Usage

To run the program and fetch pool keys:
```npm run dev
This will execute the index.js file, fetch the pool keys from Raydium, and display the results in the console.

## Project Structure

    config.js: Contains the configuration details for the connection and tokens.
    index.js: The main entry point of the program.
    scripts/fetchMarketAccounts.js: Fetches market accounts based on provided tokens.
    scripts/getPoolKeysByPoolId.js: Retrieves the pool keys using the pool ID.

## Author

Shahria Emon

Feel free to reach out if you have any questions or need further assistance!

This `README.md` provides a comprehensive guide for anyone looking to understand, configure, and run your program. If you have any additional information or sections you'd like to include, let me know!
