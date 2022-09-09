import React from 'react'
import { Layer, Text, Box, Button } from 'grommet'

export const WelcomeModal = ({ setStep, setActiveTab, setIsTutorial }) => {
  return (
    <div
      style={{
        position: 'fixed',
        background: '#fff',
        borderRadius: '20px',
        transform: 'translate(-50%, -50%)',
        top: '50%',
        left: '50%',
        border: 'none',
        zIndex: 20000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '20px 40px',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          fontWeight: '600',
          fontSize: '64px',
          lineHeight: '100%',
          color: '#213D79',
        }}
      >
        Do you want to enable<br /> Tutorial Mode?
      </p>
      <div style={{ display: 'flex', gap: '50px'}}>
        <button
          onClick={() => {
            setActiveTab('BLOCKCHAINS')
            setIsTutorial(false)
          }}
          style={{
            background: '#fff',
            boxShadow:
              '4px 2px 6px rgba(72, 100, 125, 0.3), inset -2px -2px 6px rgba(72, 100, 125, 0.1)',
            borderRadius: '8px',
            fontWeight: 800,
            fontSize: '20px',
            color: '#192488',
            border: 'none',
            padding: '24px 60px',
          }}
        >
          NO
        </button>
        <button
          onClick={() => {
            setActiveTab('BLOCKCHAINS')
            setStep(1)
          }}
          style={{
            background: '#0660FE',
            boxShadow:
              '4px 2px 6px rgba(72, 100, 125, 0.3), inset -2px -2px 6px rgba(72, 100, 125, 0.1)',
            borderRadius: '8px',
            fontWeight: 800,
            fontSize: '20px',
            color: '#fff',
            border: 'none',
            padding: '24px 60px',
          }}
        >
          YES
        </button>
      </div>
    </div>
  )
}
