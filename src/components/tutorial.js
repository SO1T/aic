import React, { useState } from 'react'
import { Main } from './main'
import { LoginModal } from './loginModal'
import { ZeroModal } from './zeroModal'
import { WelcomeModal } from './welcomeModal'
import { Home } from 'grommet-icons'

export const Tutorial = ({
  activeTab,
  setActiveTab,
  modal,
  setModal,
  setShow,
  account,
  setAccount,
  setIsTutorial,
  isTutorial
}) => {
  const levels = [
    [],
    [],
    ['all'],
    ['ETHEREUM', 'ATOM', 'NEAR'],
    ['all'],
    ['METAMASK', 'PHANTOM', 'NEAR', 'BLOCTO'],
  ]

  const [step, setStep] = useState(0)

  const renderText = () => {
    switch (step - 1) {
      case 1:
        return (
          <p
            style={{
              fontWeight: '300',
              fontSize: '18px',
              lineheight: '100%',
              color: '#213D79',
            }}
          >
            <p>
              Today there are many different blockchains that offer various
              solutions for funds transfer, swaps, yield farming, gaming, NFTs,
              etc.
            </p>
            <p>
              You can learn more about blockchains by visiting their website
              (click on logo) or checking out our Knowledge Base (click on
              “Learn more” button)
            </p>
          </p>
        )
      case 2:
        return (
          <p
            style={{
              fontWeight: '300',
              fontSize: '18px',
              lineheight: '100%',
              color: '#213D79',
            }}
          >
            You can begin with our featured Blockchains or continue exploring
            our <span style={{ color: '#0660FE' }}>Blockchains</span> section.
          </p>
        )
      case 3:
        return (
          <p
            style={{
              fontWeight: '300',
              fontSize: '18px',
              lineheight: '100%',
              color: '#213D79',
              margin: 0,
              // marginTop: '-20px',
            }}
          >
            <p style={{ margin: '10px 0' }}>
              One of the key points of interaction with Blockchains is a Web3
              wallet.
            </p>
            <p style={{ margin: '10px 0' }}>
              A Web3 wallet can serve as both your wallet and digital identity
              that will be used to ineract with Web3 resources.
            </p>
            <p style={{ margin: '10px 0' }}>
              Don’t forget that in Web3, you are responsible for your data, so
              don’t forget to store you seed phrase and password reliably. You
              can learn more about wallets and password management in our{' '}
              <span style={{ color: '#0660FE' }}>Knowledge Base.</span>
            </p>
          </p>
        )
      case 4:
        return (
          <p
            style={{
              fontWeight: '300',
              fontSize: '18px',
              lineheight: '100%',
              color: '#213D79',
            }}
          >
            Check out our recommended wallets or explore wallets in our{' '}
            <span style={{ color: '#0660FE' }}>Knowledge Base.</span>
          </p>
        )
      case 5:
        return (
          <p
            style={{
              fontWeight: '300',
              fontSize: '18px',
              lineheight: '100%',
              color: '#213D79',
            }}
          >
            You can know use your walles to login to our website.
          </p>
        )
      default:
        break
    }
  }

  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <div
        style={{
          backgroundColor: '#7D96B6',
          opacity: 0.8,
          position: 'absolute',
          width: '100%',
          zIndex: 10000,
          height: '100%',
        }}
      ></div>
      { step === 0 && <WelcomeModal setStep={setStep} setIsTutorial={setIsTutorial} setActiveTab={setActiveTab} />}
      {step > 1 && <div
        style={{
          position: 'fixed',
          background: '#fff',
          width: '779px',
          height: '192px',
          borderRadius: '20px',
          bottom: '60px',
          right: '70px',
          border: 'none',
          zIndex: 20000,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <button
          style={{
            background: '#0660FE',
            borderRadius: '20px 0px 0px 0px',
            position: 'absolute',
            top: 0,
            left: 0,
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '100%',
            color: '#FFFFFF',
            padding: '5px 20px',
            border: 'none',
          }}
        >
          {step + 1}
        </button>
        <div style={{ margin: '33px 72px', verticalAlign: 'middle' }}>
          {renderText()}
        </div>
        <button
          style={{
            background: '#0660FE',
            borderRadius: '0px 0px 20px 0px',
            position: 'absolute',
            bottom: 0,
            right: 0,
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '100%',
            color: '#FFFFFF',
            padding: '5px 20px',
            border: 'none',
          }}
          onClick={() => {
            setStep((step) => step + 1)
            if (step === 3) {
              setActiveTab('WALLETS')
            }
            if (step === 6) setIsTutorial(false)
          }}
        >
          NEXT
        </button>
      </div>}
      {step === 1 && <ZeroModal setStep={setStep} />}
      {step === 6 && <LoginModal setAccount={setAccount} />}
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <Main
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          modal={modal}
          setModal={setModal}
          setShow={setShow}
          hightlight={levels[step]}
          account={account}
          setAccount={setAccount}
          setIsTutorial={setIsTutorial}
          isTutorial={isTutorial}
        />
      </div>
    </div>
  )
}
