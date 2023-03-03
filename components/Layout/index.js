import React, { useState } from 'react'
import {
  Typography,
  Button,
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  ListItemIcon,
  Divider,
  TextField,
  InputAdornment,
  Switch,
  Paper,
} from '@material-ui/core'
import {
  AddIcon,
  Menu,
  InboxIcon,
  MailIcon,
  Brightness2,
  WbSunnyOutlined,
  Search,
} from '@material-ui/icons'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import {
  withStyles,
  ThemeProvider,
  createTheme,
} from '@material-ui/core/styles'
import logo from '../../assets/logo.png'
import cn from 'classnames'
// import '../Header/Header.module.scss'

const drawerWidth = 300
const navItems = [
  { title: 'All projects' },
  { title: 'Blockchains' },
  { title: 'EVM-Chains' },
  { title: 'Wallets' },
  { title: 'Bridges' },
]

const StyledSwitch = withStyles((theme) => ({
  root: {
    width: 58,
    height: 32,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(28px)',
      color: '#212529',
      '& + $track': {
        backgroundColor: '#ffffff',
        opacity: 1,
      },
    },
    '&$focusVisible $thumb': {
      color: '#ffffff',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    top: '3px !important',
    borderRadius: 32 / 2,
    border: `1px solid #212529`,
    backgroundColor: '#212529',
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  )
})

const styles = (theme) => ({
  container: {
    display: 'flex',
    position: 'relative',
    /* box-sizing: border-box; */
    maxWidth: '100%',
  },
  containerDark: {
    display: 'flex',
    position: 'relative',
    boxSizing: 'border-box',
    background: '#2b2e3c',
  },
  appBar: {
    zIndex: 10000,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    backgroundColor: theme.palette.type === 'dark' ? '#111A26' : '#FFFFFF',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: '100%',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: drawerWidth,
    [theme.breakpoints.down('sm')]: {
      width: 0,
    },
  },
  sidebarList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '20px',
    padding: '132px 0 0 32px',
  },
  sidebarItemWrapper: {
    width: '80%',
    padding: '9px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      // backgroundColor: '#d2e8fc',
      backgroundColor: 'rgba(104,136,238, 0.1)',
      borderRadius: '8px',
      '& > p': {
        color: '#6888ee',
      },
    },
  },
  sidebarItem: {
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '100%',
    color: theme.palette.type === 'dark' ? '#fff' : '#000',
  },
  navItemsWrapper: {
    padding: '2px 5px',
    '&:hover': {
      // backgroundColor: '#d2e8fc',
      backgroundColor: 'rgba(104,136,238, 0.1)',
      borderRadius: '8px',
      '& > p': {
        color: '#6888ee',
      },
    },
  },
  searchContainer: {
    // height: '48px',
    maxWidth: '485px',
    borderRadius: '16px',
    backgroundColor: theme.palette.type === 'dark' ? '#080F1A' : '#F4F4F4',
    color: theme.palette.type === 'dark' ? '#fff' : '#111',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '100%',
  },
  searchInputAdnornment: {
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '100%',
    color: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.29)' : '#111',
  },
  mainContentWrapper: {
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
    },
    maxWidth: 'calc(100% - 300px)',
    marginTop: '100px',
  },
})

function Layout({ changeTheme, theme, classes, children }) {
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [darkMode, setDarkMode] = useState(
    theme.palette.type === 'dark' ? true : false,
  )

  const handleToggleChange = (event, val) => {
    setDarkMode(val)
    changeTheme(val)
  }

  const t = useTranslations('Common')
  const addNetwork = () => {
    window.open('https://github.com/ethereum-lists/chains', '_blank')
  }

  const addRpc = () => {
    window.open(
      'https://github.com/DefiLlama/chainlist/blob/main/constants/extraRpcs.json',
      '_blank',
    )
  }

  return (
    <div
      style={{ display: 'flex' }}
      className={cn({
        [!theme]: classes.container,
        [theme]: classes.containerDark,
      })}
    >
      <AppBar component="nav" position="fixed" className={classes.appBar}>
        <Toolbar disableGutters={true} className={classes.toolbar}>
          <Box
            sx={{
              mr: 2,
              display: { xs: 'flex', sm: 'none' },
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <IconButton
              color="black"
              aria-label="open drawer"
              edge="start"
              onClick={() => setOpen(!open)}
            >
              <Menu color="black" />
            </IconButton>
            <Image src={logo} />
            <IconButton
              color="black"
              aria-label="open drawer"
              edge="start"
              // onClick={handleDrawerToggle}
            >
              <Search />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              justifyContent: 'space-between',
              gap: '50px',
            }}
          >
            <Box
              sx={{
                width: '48px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Image width={48} height={40} src={logo} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                color: darkMode ? '#fff' : '#000',
                gap: '15px',
                alignItems: 'center',
              }}
            >
              {['DOCS', 'BLOG', 'ROADMAP'].map((item) => (
                <Box className={classes.navItemsWrapper}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: '22px',
                      lineHeight: '100%',
                      color: theme.palette.type === 'dark' ? '#fff' : '#000',
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Box className={classes.themeSelectContainer}>
              <StyledSwitch
                icon={<Brightness2 className={classes.switchIcon} />}
                checkedIcon={<WbSunnyOutlined className={classes.switchIcon} />}
                checked={darkMode}
                onChange={handleToggleChange}
              />
            </Box>
            <Box>
              <Box>
                <TextField
                  fullWidth
                  className={classes.searchContainer}
                  variant="outlined"
                  placeholder="ETH, Fantom, ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Search fontSize="small" />
                      </InputAdornment>
                    ),
                    startAdornment: (
                      <InputAdornment position="start">
                        <Typography classes={classes.searchInputAdnornment}>
                          {t('search-networks')}
                        </Typography>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={cn(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: cn({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar} />
        <List className={cn(classes.sidebarList)}>
          {navItems.map((item, index) => (
            <Link href={'/wallet'}>
              <Box className={cn(classes.sidebarItemWrapper)}>
                <Typography className={cn(classes.sidebarItem)}>
                  {item.title}
                </Typography>
              </Box>
            </Link>
          ))}
        </List>
      </Drawer>
      <main
        sx={{ maxWidth: { xs: '100%', sm: 'calc(100% - 300px)' } }}
        className={cn(classes.mainContentWrapper)}
      >
        {children}
      </main>
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(Layout)
