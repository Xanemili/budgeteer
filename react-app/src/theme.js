import {
  createMuiTheme
} from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00FF96'
    },
    secondary: {
      main: '#FFFFFF'
    }
  },
  props: {
    MuiButtonBase: {
      disableRipple: true
    },
    MuiTypography: {}
  }
})

export default theme;
