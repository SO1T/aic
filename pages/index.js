import React, { useMemo } from "react";
import Head from "next/head";
import { withTheme } from "@material-ui/core/styles";
import Chain from "../components/chain";
import { fetcher, populateChain } from "../utils";
import { useSearch, useTestnets } from "../stores";
import Layout from "../components/Layout";
import classes from "../components/Layout/index.module.css";

export async function getStaticProps({ }) {

  return {
    props: {
      sortedChains: []
    },
    revalidate: 3600,
  };
}

function Home({ changeTheme, theme, sortedChains }) {
  const testnets = useTestnets((state) => state.testnets);
  const search = useSearch((state) => state.search);

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
        {/* <div className={classes.cardsContainer}>
          {(search === ""
            ? chains
            : chains.filter((chain) => {
                //filter
                return (
                  chain.chain.toLowerCase().includes(search.toLowerCase()) ||
                  chain.chainId
                    .toString()
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  chain.name.toLowerCase().includes(search.toLowerCase()) ||
                  (chain.nativeCurrency ? chain.nativeCurrency.symbol : "")
                    .toLowerCase()
                    .includes(search.toLowerCase())
                );
              })
          ).map((chain, idx) => {
            return <Chain chain={chain} key={idx} />;
          })}
        </div> */}
      </Layout>
    </>
  );
}

export default withTheme(Home);
