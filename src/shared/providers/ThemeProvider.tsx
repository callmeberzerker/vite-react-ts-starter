import React, { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { createTheme, GlobalStyles } from 'src/shared/theme/theme'
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components/macro'

const getInitialTheme = (): 'dark' | 'light' => {
  const savedTheme = window.localStorage.getItem('theme')
  return savedTheme ? JSON.parse(savedTheme) : 'dark'
}

export const Toggler = styled.button`
  display: flex;
  position: absolute;
  right: 20px;
  top: 10px;
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.global.text};
  background-color: transparent;
  transition: all 0.25s;
  border: none;
  outline: none;
  cursor: pointer;
`

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>(getInitialTheme)

  useEffect(() => {
    window.localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  const icon = theme === 'light' ? <FiMoon size={26} /> : <FiSun size={26} />

  return (
    <StyledThemeProvider theme={createTheme(theme)}>
      <GlobalStyles />
      <Toggler onClick={toggleTheme}>{icon}</Toggler>
      {children}
    </StyledThemeProvider>
  )
}
