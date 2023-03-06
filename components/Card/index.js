import React, { useEffect, useMemo } from 'react'
import {
  Typography,
  Paper,
  Button,
  Tooltip,
  Box,
  withStyles,
} from '@material-ui/core'
import classes from './card.module.css'
import stores, { useAccount, useChain } from '../../stores/index.js'
import { ACCOUNT_CONFIGURED } from '../../stores/constants/constants'
import Image from 'next/image'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import RPCList from '../RPCList'
import { addToNetwork, renderProviderText } from '../../utils'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const Card = ({ item, buttonOnly, theme }) => {
  const t = useTranslations('Common')
  const account = useAccount((state) => state.account)
  const router = useRouter()

  const chainId = useChain((state) => state.id)
  const updateChain = useChain((state) => state.updateChain)

  const handleClick = () => {
    if (chain.chainId === chainId) {
      updateChain(null)
    } else {
      updateChain(chain.chainId)
    }
  }

  if (buttonOnly) {
    return (
      <Button
        variant="outlined"
        color="primary"
        onClick={() => addToNetwork(account, chain)}
      >
        {renderProviderText(account)}
      </Button>
    )
  }

  return (
    <>
      <Paper elevation={1} className={classes.cardContainer} key={item.title}>
        <Box className={classes.topCardWrapper}>
          <div className={classes.chainNameContainer}>
            <div className={classes.avatar}>
              <Image
                src={item.icon}
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = '/chains/unknown-logo.png'
                }}
                width={64}
                height={64}
              />
            </div>
          </div>
        </Box>
        <div className={classes.cardInfoContainer}>
          <div className={classes.dataPoint}>
            <Typography
              variant="h3"
              color="textPrimary"
              className={classes.dataPointHeader}
            >
              {item.title}
            </Typography>
          </div>
          <div className={classes.dataPoint}>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              className={classes.dataPointHeader}
            >
              {item.description}
            </Typography>
          </div>
        </div>
        <div className={classes.addButton}>
          <Button
            variant="outlined"
            color="primary"
            className={classes.cardButton}
            onClick={() => window.open(item.link, '_blank')}
          >
            Explore
          </Button>
        </div>
      </Paper>
    </>
  )
}

export default Card;
