import React from 'react'
import { grommet, Grommet, Box } from 'grommet'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Dashboard from './pages/dashboard'
import Introduction from './pages/introduction'
import { deepMerge } from 'grommet/utils'

const theme = deepMerge(grommet, {
  global: {
    font: {
      family: 'Nunito',
    },
  },
})

function App() {
  return (
    <Grommet theme={theme} full>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/introduction" element={<Introduction />} />
        </Routes>
      </Router>
    </Grommet>
  )
}

export default App
