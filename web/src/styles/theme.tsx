import { theme, DefaultTheme } from '@chakra-ui/core'

const customTheme: DefaultTheme = {
  ...theme,
  
  
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    mono: 'Menlo, monospace'
  },
  
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: '5px',
    md: '8px',
  },
  
  
  colors: {
    ...theme.colors,
    
    blue: {
      ...theme.colors.blue,
      900:'#0B0B3B',
      800: '#100a42',
      100:'#CADCEF',
      200:'#90afc9',
      300:'#b9d2e8',
      400:'#f3f7fb',
      700:'#3f6379',
      600:'#1c3d50',
      500:'#224c64'
    },
    gray: {
      ...theme.colors.gray,
      300: '#e1e1e6',
      600: '#29292e',
      700: '#202024',
      800: '#121214'
    },
  },
}

export default customTheme;