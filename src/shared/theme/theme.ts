import { createColors } from 'src/shared/theme/colors'
import { createGlobalStyle, DefaultTheme } from 'styled-components/macro'

const spacing = (x: number): string => `${x * 8}px`

export const createTheme = (mode: 'light' | 'dark'): DefaultTheme => {
  return { colors: createColors(mode), spacing }
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.global.body};
    color: ${({ theme }) => theme.colors.global.text};
    transition: all .25s;
    font-family: 'Inter', sans-serif;
  }
`
