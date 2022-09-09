import { useWeb3React } from '@web3-react/core'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import React, { useEffect } from 'react'
import connectors from '../connectors'

import { MetaMaskicon, UDicon } from '../assets'

export const LoginModal = ({ setAccount }) => {
  const { active, account, activate, deactivate } = useWeb3React()

  useEffect(() => {
    if (account !== '') setAccount(account)
  }, [account])

  function createConnectHandler(connectorId) {
    return async () => {
      try {
        const connector = connectors[connectorId]

        // Taken from https://github.com/NoahZinsmeister/web3-react/issues/124#issuecomment-817631654
        if (
          connector instanceof WalletConnectConnector &&
          connector.walletConnectProvider
        ) {
          connector.walletConnectProvider = undefined
        }

        await activate(connector)
      } catch (error) {
        console.error(error)
      }
    }
  }

  async function handleDisconnect() {
    try {
      deactivate()
    } catch (error) {
      console.error(error)
    }
  }

  // if (active) {
  //   return (
  //     <>
  //       <div>Connected to {account}</div>
  //       <button onClick={handleDisconnect}>Disconnect</button>
  //     </>
  //   )
  // }

  return (
    <>
      <div
        style={{
          position: 'fixed',
          background: '#fff',
          height: 'auto',
          borderRadius: '20px',
          transform: 'translate(-50%, -50%)',
          top: '50%',
          left: '50%',
          border: 'none',
          zIndex: 20000,
          padding: '50px 10px',
        }}
      >
        <h3 style={{ margin: '0 200px' }}>Connect Wallet</h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            padding: '20px 50px',
          }}
        >
          <button
            onClick={createConnectHandler('injected')}
            style={{
              background: '#fff',
              display: 'flex',
              gap: '15px',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            <img src={MetaMaskicon} alt="MetaMask icon" />
            MetaMask
          </button>
          <button
            onClick={createConnectHandler('uauth')}
            style={{
              background: '#0D67FE',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <img src={UDicon} alt="UD icon" />
            <span>Unstoppable Domains</span>
          </button>
        </div>
      </div>
    </>
  )
}
