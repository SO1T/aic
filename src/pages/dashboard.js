import React, { useState } from 'react'
import { Box } from 'grommet'

import { WelcomeModal, Main, Tutorial } from '../components'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('')
  const [modal, setModal] = useState(false)
  const [show, setShow] = useState(true)
  const [isTutorial, setIsTutorial] = useState(false)
  const [account, setAccount] = useState('')
  return (
    <Box fill>
      {isTutorial && (
        <Tutorial
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          modal={modal}
          setModal={setModal}
          setShow={setShow}
          account={account}
          setAccount={setAccount}
          setIsTutorial={setIsTutorial}
          isTutorial={isTutorial}
        />
      )}
      {!isTutorial && (
        <Main
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          modal={modal}
          setModal={setModal}
          setShow={setShow}
          account={account}
          setAccount={setAccount}
          setIsTutorial={setIsTutorial}
          isTutorial={isTutorial}
        />
      )}
    </Box>
  )
}

export default Dashboard
