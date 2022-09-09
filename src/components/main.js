import React from 'react'
import {
  Grid,
  Box,
  Image,
  Button,
  Text,
  CheckBox,
  Tabs,
  Tab,
  Paragraph,
  Anchor,
  Heading,
} from 'grommet'
import { Plate, Home, WelcomeModal } from '../components'
import { tabs, tabsContent, wallets } from '../const'

import { Link } from 'react-router-dom'

import { logo, btcicon } from '../assets'

export const Main = ({
  activeTab = '',
  setActiveTab = () => {},
  modal = false,
  setModal = () => {},
  setShow = () => {},
  hightlight,
  account,
  setAccount,
  setIsTutorial,
  isTutorial
}) => {

  return (
    <Grid
      fill
      rows={['auto', 'flex']}
      columns={['auto', 'flex']}
      areas={[
        { name: 'sidebar', start: [0, 1], end: [0, 1] },
        { name: 'main', start: [1, 1], end: [1, 1] },
      ]}
    >
      <Box
        gridArea="sidebar"
        width="medium"
        animation={[
          { type: 'fadeIn', duration: 300 },
          { type: 'slideRight', size: 'xlarge', duration: 150 },
        ]}
        flex
        direction="column"
        justify="between"
        border={{ side: 'right', color: 'light-2', size: 'small' }}
        align="center"
      >
        <Box pad="large">
          <Image src={logo} height="133px" width="180px" />
        </Box>
        <Box pad="large">
          {tabs.map((name) => (
            <Button
              key={name}
              href="#"
              hoverIndicator
              onClick={() => setActiveTab(name.name)}
            >
              <Box
                pad={{ horizontal: 'medium', vertical: 'small' }}
                flex
                direction="row"
                align="center"
                style={{ gap: '10px'}}
              >
                <Image src={name.icon} width={32} height={32} />
                <Text>{name.name}</Text>
              </Box>
            </Button>
          ))}
        </Box>
        <Box
          pad="small"
          flex
          direction="row"
          align="center"
          gap="20px"
          style={{ zIndex: 30000 }}
        >
          <Text weight="lighter">TUTORIAL MODE</Text>
          <CheckBox toggle checked={isTutorial} onChange={() => setIsTutorial(!isTutorial)} />
        </Box>
      </Box>
      <Box gridArea="main" justify="center" align="center" margin="medium">
        <div
          style={{
            ...(isTutorial ? { zIndex: 20000, color: '#fff' } : { color: '#000' }),
            position: 'absolute',
            top: '70px',
            right: '30px',
          }}
        >
          <span style={{ fontWeight: 600, fontSize: '22px' }}>
            {account === '' ? 'Connect Wallet' : account}
          </span>
        </div>
        {activeTab === '' ? (
          <Home setIsTutorial={setIsTutorial} />
        ) : (
          <>
            <Heading>{activeTab}</Heading>

            <Box pad="large" fill overflow="auto">
              <Grid columns={'small'} gap="small">
                {tabsContent[activeTab]?.map((tab, i) => (
                  <Plate hightlight={hightlight} key={i} {...tab} />
                ))}
              </Grid>
            </Box>
            <Paragraph margin="none" color="#B1B9CC">
              Learn more about {activeTab} in our{' '}
              {/* <Link to={'/introduction'}> */}
                <Anchor label="TUTORIAL" />
              {/* </Link> */}
            </Paragraph>
          </>
        )}
      </Box>
    </Grid>
  )
}
