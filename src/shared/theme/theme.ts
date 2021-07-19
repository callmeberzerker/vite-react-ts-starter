import { COLORS } from 'src/shared/theme/colors'
import { createGlobalStyle, DefaultTheme } from 'styled-components/macro'

const spacing = (x: number): string => `${x * 8}px`

export const lightTheme: DefaultTheme = {
  global: {
    body: '#f1f1f1',
    text: '#121620',
  },
  colors: COLORS,
  spacing,
}
export const darkTheme = {
  global: {
    body: '#1A1B26',
    text: '#C0CAF5',
  },
  colors: COLORS,
  spacing,
}

export const theme = {
  lightTheme,
  darkTheme,
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.global.body};
    color: ${({ theme }) => theme.global.text};
    transition: all .25s;
    font-family: 'Inter', sans-serif;
  }
`
