import React from 'react'
import { Box, Text, Button, Paragraph } from 'grommet'

export const Home = ({ setIsTutorial }) => {
  return (
    <Box fill pad="large" align="center" justify="center" style={{ fontFamily: 'Poppins', display: 'flex', gap: '20px'}}>
      <p style={{ color: "#213D79", fontSize: "154px", fontWeight: 600, padding: 0, margin: '40px' }}>
        Your{' '}
        <span style={{ color: "#0E5DE1", fontSize: "154px", fontWeight: 600, padding: 0 }}>
          Web3
        </span>
      </p>
      <p style={{ color: "#213D79", fontSize: "154px", fontWeight: 600, padding: 0, margin: '50px' }}>
        Journey
      </p>
      <br />
      <p style={{ color: "#213D79", fontSize: "154px", fontWeight: 600, padding: 0, margin: '20px 20px 100px 20px' }}>
        Starts Here
      </p>
      <Button onClick={() => setIsTutorial(true)} style={{ backgroundColor: '#0660FE', boxShadow: '4px 2px 6px rgba(72, 100, 125, 0.3), inset -2px -2px 6px rgba(72, 100, 125, 0.1)', borderRadius: '20px' }}>
        <Box style={{ padding: '0 50px'}} direction="row" align="center" gap="small" margin='large'>
          <Text color={'#fff'}>GET STARTED</Text>
        </Box>
      </Button>
    </Box>
  )
}
