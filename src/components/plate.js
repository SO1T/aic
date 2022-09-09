import React from 'react'
import { Box, Image, Text, Anchor } from 'grommet'

export const Plate = ({ name, icon, link, hightlight = [] }) => {
  return (
    <>
      {hightlight.length > 0 ? (
        <div
          style={{
            ...(hightlight.includes('all') || hightlight.includes(name)
              ? { zIndex: 10000 }
              : {}),
          }}
        >
          <Box
            pad="small"
            align="center"
            background={{ color: 'light-1', opacity: 'strong' }}
            round
            gap="small"
            basis="small"
            elevation="medium"
            width="200px"
            height="200px"
            flex
            direction="column"
            justify="between"
            style={{
              lineHeight: '90%',

              ...(hightlight.includes('all')
                ? { zIndex: 10000, backgroundColor: '#fff' }
                : {}),
              ...((hightlight.includes('ETHEREUM') && name === 'ETHEREUM') ||
              (hightlight.includes('METAMASK') && name === 'METAMASK')
                ? {
                    zIndex: 10000,
                    backgroundColor: '#fff',
                    border: '20px solid #E2626A',
                  }
                : {}),
              ...((hightlight.includes('ATOM') && name === 'ATOM') ||
              (hightlight.includes('PHANTOM') && name === 'PHANTOM')
                ? {
                    zIndex: 10000,
                    backgroundColor: '#fff',
                    border: '20px solid #F2B927',
                  }
                : {}),
              ...(hightlight.includes('NEAR') && name === 'NEAR'
                ? {
                    zIndex: 10000,
                    backgroundColor: '#fff',
                    border: '20px solid #62E286',
                  }
                : {}),
              ...(hightlight.includes('BLOCTO') && name === 'BLOCTO'
                ? {
                    zIndex: 10000,
                    backgroundColor: '#fff',
                    border: '20px solid #0D30E7',
                  }
                : {}),
            }}
          >
            <Image src={icon} />
            <Text
              textAlign="center"
              truncate
              alignSelf="center"
              color="#3F4A62"
              size="small"
            >
              {name}
            </Text>
            <Anchor href={link} label="Learn more" />
            {hightlight.includes(name) && (
              <div
                style={{
                  width: '189px',
                  textAlign: 'center',
                  color: '#fff',
                  fontWeight: 700,
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  borderRadius: '0 0 24px 24px',
                  ...((hightlight.includes('ETHEREUM') &&
                    name === 'ETHEREUM') ||
                  (hightlight.includes('METAMASK') && name === 'METAMASK')
                    ? { backgroundColor: '#E2626A' }
                    : {}),
                  ...((hightlight.includes('ATOM') && name === 'ATOM') ||
                  (hightlight.includes('PHANTOM') && name === 'PHANTOM')
                    ? { backgroundColor: '#F2B927' }
                    : {}),
                  ...(hightlight.includes('NEAR') && name === 'NEAR'
                    ? { backgroundColor: '#62E286', paddingBottom: '10px' }
                    : {}),
                  ...(hightlight.includes('BLOCTO') && name === 'BLOCTO'
                    ? { backgroundColor: '#0D30E7' }
                    : {}),
                }}
              >
                {((hightlight.includes('ETHEREUM') && 'ETHEREUM' === name) ||
                  (hightlight.includes('METAMASK') && 'METAMASK' === name)) && (
                  <span>MOST POPULAR</span>
                )}
                {hightlight.includes('NEAR') && 'NEAR' === name && (
                  <span>BEST FOR BEGINNERS</span>
                )}
                {hightlight.includes('ATOM') && 'ATOM' === name && (
                  <span>POWERFUL ECOSYSTEM</span>
                )}
                {hightlight.includes('PHANTOM') && 'PHANTOM' === name && (
                  <span>BEST FOR NFT</span>
                )}
                {hightlight.includes('BLOCTO') && 'BLOCTO' === name && (
                  <span>MOBILE-FRIENDLY</span>
                )}
              </div>
            )}
          </Box>
        </div>
      ) : (
        <Box
          pad="small"
          align="center"
          background={{ color: 'light-1', opacity: 'strong' }}
          round
          gap="small"
          basis="small"
          elevation="medium"
          width="200px"
          height="200px"
          flex
          direction="column"
          justify="between"
          style={{
            ...(hightlight === 'all'
              ? { zIndex: 10000, backgroundColor: '#fff' }
              : {}),
          }}
        >
          <Image src={icon} />
          <Text
            textAlign="center"
            truncate
            alignSelf="center"
            color="#3F4A62"
            size="small"
          >
            {name}
          </Text>
          <Anchor href={link} label="Learn more" />
        </Box>
      )}
    </>
  )
}
