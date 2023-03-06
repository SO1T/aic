import Card from '../components/Card';
import React from "react";
import Head from "next/head";
import { withTheme } from "@material-ui/core/styles";
import { fetcher, populateChain } from "../utils";
import { useSearch, useTestnets } from "../stores";
import Layout from "../components/Layout";
import classes from "../components/Layout/index.module.css";

import { blockchains } from '../mocks/blockchains';

function Wallet({ changeTheme, theme, sortedChains }) {
  return (
    <>
      <Head>
        <title>Chainlist</title>
        <meta
          name="description"
          content="Chainlist is a list of RPCs for EVM(Ethereum Virtual Machine) networks. Use the information to connect your wallets and Web3 middleware providers to the appropriate Chain ID and Network ID. Find the best RPC for both Mainnet and Testnet to connect to the correct chain"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout changeTheme={changeTheme} theme={theme}>
        <div className={classes.cardsContainer}>
          {
          blockchains.map((item, idx) => { 
            return <Card item={item} key={idx} />
          })}
        </div>
      </Layout>
    </>
  )
}

export default withTheme(Wallet);
