import { red } from '@material-ui/core/colors';



export const light = {

  palette: {
    type: 'light',
    primary: {
      main: '#72399c',
    },
    secondary: {
      main: '#cc4444',
      contrastText: '#ffffff',
    },
    error: {
      main: red.A400,
    },
    titleBar: {
      main: '#eeeeee',
      contrastText: '#222222',
    },
  },
}

export const dark = {
  palette: {
    type: 'dark',
    primary: {
      main: '#72299e',
      light: 'rgb(81, 91, 95)',
      dark: 'rgb(26, 35, 39)',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FFB74D',
    },
   
    error: {
      main: red.A400,
    },
    
  },

}

