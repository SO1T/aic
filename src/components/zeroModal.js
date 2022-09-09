import React from 'react'

export const ZeroModal = ({ setStep }) => {
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
        textAlign: 'center'
      }}
    >
      <p
        style={{
          fontWeight: '300',
          fontSize: '38px',
          lineHeight: '129.5%',
          color: '#213D79',
        }}
      >
        Welcome to the <span style={{ color: '#213D79' }}>Tutorial Mode</span> of H2CryptO. We will guide you
        through the first steps needed to get started in Web3. You can also
        refer to our <span style={{ color: '#213D79' }}>Knowledge Base</span> for more information.
      </p>
      <button onClick={() => setStep(2)} style={{ background: '#0660FE', boxShadow: '4px 2px 6px rgba(72, 100, 125, 0.3), inset -2px -2px 6px rgba(72, 100, 125, 0.1)', borderRadius: '8px', fontWeight: 800, fontSize: '20px', color: '#fff', border: 'none', padding: '24px 60px' }}>CONTINUE</button>
    </div>
  )
}
