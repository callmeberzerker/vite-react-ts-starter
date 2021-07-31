import { ReactElement } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components/macro'

const LinkStyled = styled(NavLink)`
  &[aria-current] {
    width: 500px;
    color: #9378d9;
  }
`
export const Layout = (): ReactElement => {
  return (
    <div>
      <LinkStyled to="/">Home</LinkStyled>
      <LinkStyled to="/about">About</LinkStyled>
      <LinkStyled to="/forms">Forms</LinkStyled>
      <Outlet />
    </div>
  )
}
