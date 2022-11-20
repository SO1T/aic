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
import classes from './index.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import {
  withStyles,
  ThemeProvider,
  createTheme,
} from '@material-ui/core/styles'
import logo from '../../assets/logo.png'

const drawerWidth = 240
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

const searchTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#FFF',
    },
  },
  shape: {
    borderRadius: '16px',
  },
  typography: {
    fontFamily: [
      'Inter',
      'Arial',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    body1: {
      fontSize: '12px',
      backgroundColor: '#F4F4F4',
    },
  },
  overrides: {
    MuiPaper: {
      elevation1: {
        'box-shadow': '0px 7px 7px #0000000A;',
        '-webkit-box-shadow': '0px 7px 7px #0000000A;',
        '-moz-box-shadow': '0px 7px 7px #0000000A;',
      },
    },
    MuiInputBase: {
      input: {
        fontSize: '14px',
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: '12.5px 14px',
      },
      notchedOutline: {
        borderColor: '#F4F4F4',
      },
    },
  },
})

const styles = theme => ({
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
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9 + 1
    }
  }
});

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
    <div className={classes.container}>
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
              // onClick={handleDrawerToggle}
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
            }}
          >
            <Box sx={{ width: '48px', height: '40px' }}>
              <Image width={48} height={40} src={logo} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                color: theme.palette.type === 'dark' ? '#000' : '#fff',
                width: '100%',
              }}
            >
              {['DOCS', 'BLOG', 'ROADMAP'].map((item) => (
                <Typography
                  sx={{ fontWeight: 600, fontSize: '22px', lineHeight: '100%' }}
                >
                  {item}
                </Typography>
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
              <ThemeProvider theme={searchTheme}>
                <Paper className={classes.searchPaper}>
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
                </Paper>
              </ThemeProvider>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={`${classes.drawer} ${open ? classes.drawerOpen : classes.drawerClose}`}
        classes={{
          paper: open ? classes.drawerOpen : classes.drawerClose
        }}
        open={open}
      >
        <div className={classes.toolbar} />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <Typography>{text}</Typography>
          ))}
        </List>
      </Drawer>
      <main>
        <div />
        {/* {children} */}
      </main>
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(Layout);
