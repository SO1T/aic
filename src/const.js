import { btc, ada, atom, avax, bnb, dot, eth, flow, matic, near, sol, trx, blocto, coinbase, keplr, metamask, phantom, polkodot, rainbow, solflare, solong, trustwallet, atomic } from './assets';
import { bc, bg, ci, ib, sc, wl, ic } from './assets/icons';

export const blockchains = 'BLOCKCHAINS';
export const wallets = 'WALLETS';
export const chains = 'CHAINS';
export const bridges = 'BRIDGES';
export const defi = 'DEFI';
export const digital_id = 'DIGITAL ID';
export const privacy_security = 'PRIVACY & SECURITY';



export const tabs = [{name: blockchains, icon: bc}, {name: wallets, icon: wl }, {name: chains, icon: ic}, {name: bridges, icon: bg}, {name: defi, icon: ci}, {name: digital_id, icon: ib}, {name: privacy_security, icon: sc}];

export const tabsContent = {
    [blockchains]: [
        {
            name: 'BITCOIN',
            icon: btc,
            link: 'https://bitcoin.org/en/'
        },
        {
            name: 'ETHEREUM',
            icon: eth,
            link: 'https://ethereum.org/en/'
        },

        
        {
            name: 'BINANCE SMART CHAIN',
            icon: bnb,
            link: 'https://www.binance.com/en/bnb?ref=CPA_0056PZ8KBX'
        },
        {
            name: 'CARDANO',
            icon: ada,
            link: 'https://cardano.org/'
        },
        {
            name: 'ATOM',
            icon: atom,
            link: 'https://cosmos.network/'
        },
        {
            name: 'SOLANA',
            icon: sol,
            link: 'https://solana.com/en'
        },
        {
            name: 'POLKADOT',
            icon: dot,
            link: 'https://polkadot.network/en/'
        },
        {
            name: 'MATIC',
            icon: matic,
            link: 'https://polygon.technology/'
        },
        {
            name: 'NEAR',
            icon: near,
            link: 'https://near.org/'
        },
        {
            name: 'TRX',
            icon: trx,
            link: 'https://tron.network/index?lng=en'
        },
        {
            name: 'AVAX',
            icon: avax,
            link: 'https://www.avax.network/'
        },
        


        {
            name: 'FLOW',
            icon: flow,
            link: 'https://flow.com/'
        },
    ],
    [wallets]: [
        {
            name: 'METAMASK',
            icon: metamask,
            link: 'https://metamask.io/'
        },
        {
            name: 'TRUST WALLET',
            icon: trustwallet,
            link: 'https://trustwallet.com/'
        },
        {
            name: 'COINBASE',
            icon: coinbase,
            link: 'https://www.coinbase.com/'
        },
        {
            name: 'PHANTOM',
            icon: phantom,
            link: 'https://phantom.app/'
        },
        {
            name: 'RAINBOW',
            icon: rainbow,
            link: 'https://rainbow.me/'
        },
       
        {
            name: 'SOLFLARE',
            icon: solflare,
            link: 'https://solflare.com/'
        },
        {
            name: 'SOLONG',
            icon: solong,
            link: 'https://solongwallet.io/'
        },
        {
            name: 'ATOMIC',
            icon: atomic,
            link: 'https://atomicwallet.io/'
        },
        {
            name: 'NEAR',
            icon: near,
            link: 'https://wallet.near.org/'
        },
        {
            name: 'POLKADOT JS',
            icon: polkodot,
            link: 'https://polkadot.js.org/'
        },
        {
            name: 'KEPLR',
            icon: keplr,
            link: 'https://www.keplr.app/'
        },

        {
            name: 'BLOCTO',
            icon: blocto,
            link: 'https://portto.com/'
        },
    ]
}