import React from 'react'
import { Box, Text, Anchor, Button, Image, List, Tip } from 'grommet'
import { Attraction, Car, Baby, FormSubtract } from 'grommet-icons'
import { crab, jellyfish, star } from '../assets'

const dataCrab = [
  { text: 'Totally new to crypto' },
  { text: 'Never used a web3 wallet' },
  { text: 'Heard only of Bitcoin and Eth' },
  { text: 'Want to start from scratch in learning crypto' },
  { text: 'Never heard of DeFi, DEX & CEX' },
]

const Introduction = () => {
  return (
    <Box
      direction="row-responsive"
      justify="center"
      align="center"
      pad="xlarge"
      background="light-1"
      gap="medium"
      fill={true}
    >
      <Box>
        <Box
          pad="large"
          align="center"
          round
          gap="small"
          color="white"
          elevation="large"
        >
          <Image src={jellyfish} />
          <Text>JELLY-FISH</Text>
        </Box>
        <Box pad="small" height="100%" align="left">
          <Text>Totally new to crypto</Text>
          <Text>Never used a web3 wallet</Text>
          <Text>Heard only of Bitcoin and Eth</Text>
          <Text>Want to start from scratch in learning crypto</Text>
          <Text>Never heard of DeFi, DEX CEX</Text>
        </Box>
      </Box>
      <Box>
        <Box pad="large" align="center" round gap="small" elevation="large">
          <Image src={crab} />
          <Text>CRAB</Text>
        </Box>
        <Box pad="small" height="100%" align="left">
          <Text>Starting to grasp the basics of crypto</Text>
          <Text>Already using a WEB3 wallet</Text>
          <Text>Already using DeFi and exchanges</Text>
        </Box>
      </Box>
      <Box>
        <Box pad="large" align="center" round gap="small" elevation="large">
          <Image src={star} />
          <Text>STAR</Text>
        </Box>
        <Box pad="small" height="100%" align="left">
          <Text>Totally new to crypto</Text>
          <Text>Never used a web3 wallet</Text>
          <Text>Experienced user of Web3</Text>
          <Text>Used various wallets across different networks</Text>
          <Text>User of DeFi protocols, DEXes</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Introduction
