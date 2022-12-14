import { createTheme } from '@material-ui/core/styles'
import coreTheme from './coreTheme'

// Create a theme instance.
const theme = createTheme({
  ...coreTheme,
  palette: {
    ...coreTheme.palette,
    background: {
      default: '#000711',
      paper: '#111A26',
    },
    primary: {
      main: '#2F80ED',
    },
    type: 'dark',
  },
  overrides: {
    ...coreTheme.overrides,
    MuiButton: {
      ...coreTheme.overrides.MuiButton,
      root: {
        color: '#000',
      },
      outlinedPrimary: {
        border: '1px solid #FFFFFF1A',
        '&:hover': {
          backgroundColor: '#2F80ED !important',
          color: '#fff',
        },
      },
    },
    MuiInputBase: {
      ...coreTheme.overrides.MuiInputBase,
      root: {
        background: '#F4F4F4',
        borderRadius: '16px',
        ['&::before']: {
          display: 'none',
        },
        ['&::after']: {
          display: 'none',
        },
      },
    },
    MuiOutlinedInput: {
      ...coreTheme.overrides.MuiOutlinedInput,
      notchedOutline: {
        borderColor: '#FFF',
      },
    },
    MuiSnackbarContent: {
      root: {
        color: '#fff',
        backgroundColor: '#2B2E3C',
        padding: '0px',
        minWidth: 'auto',
        '@media (min-width: 960px)': {
          minWidth: '500px',
        },
      },
      message: {
        padding: '0px',
      },
      action: {
        marginRight: '0px',
      },
    },
  },
})

export default theme
