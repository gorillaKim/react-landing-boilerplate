import React, { FC } from 'react'
import styled from "styled-components"
import {Container} from '../Styled/Layout'
import Logo from "./Logo"
import Menu from "./Menu"

const NavbarSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  // test for
  background-color: gray;
`

interface NavbarProps {

}

const Navbar: FC<NavbarProps> = () => {
  return (
    <Container>
      <NavbarSection>
        <Logo/>
        <Menu/>
      </NavbarSection>
    </Container>
  )
}

export default Navbar