import React, { FC } from 'react';
import styled from "styled-components";
import {Container} from '../Styled/Layout';
import Logo from "./Logo";
import Menu from "./Menu";

const NavbarSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  // test for
  background-color: gray;
`
const NavbarContainer = styled(Container)`
  max-width: 1280px;
`

interface NavbarProps {

}

const Navbar: FC<NavbarProps> = () => {
  return (
    <NavbarContainer>
      <NavbarSection>
        <Logo/>
        <Menu/>
      </NavbarSection>
    </NavbarContainer>
  )
}

export default Navbar;