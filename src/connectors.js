import {UAuthConnector} from '@uauth/web3-react'
import {InjectedConnector} from '@web3-react/injected-connector'
import {WalletConnectConnector} from '@web3-react/walletconnect-connector'

// Instanciate your other connectors.
export const injected = new InjectedConnector({supportedChainIds: [1]})

export const walletconnect = new WalletConnectConnector({
  infuraId: '045585b1f94142b688156d707caf8cd1',
  qrcode: true,
})

export const uauth = new UAuthConnector({
  clientID: "04a3352d-8968-4704-9aef-cef9e4a34167",
  redirectUri: "http://localhost:3000",
  scope: "openid wallet",

  // Injected and walletconnect connectors are required
  connectors: {injected, walletconnect},
})

const connectors = {
  injected,
  walletconnect,
  uauth,
}

export default connectors
