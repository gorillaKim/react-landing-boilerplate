import React, {FC, useEffect, useState} from 'react'
import styled from "styled-components"
import {Container} from '../Styled/Layout'
import Logo from "./Logo"
import Menu from "./Menu"
import ToggleButton from './ToggleButton'
import {navbar, slideHeader} from '../Styled/Animation'
import {cssBreakPoint} from '../../styles/constant'
import {IHeaderSection, INavbarSection, NavbarProps} from '../../types/navbar'

const HeaderSection = styled(({headerOption, slideHeaderOption,...restProps}:IHeaderSection)=> <section {...restProps}/>)`
  display: inline-block;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 9999;
  
  &.sticky {
    background-color: #ffffff;
    li a {
      color: var(--black)
    }
    .lever-signup {
      color: var(--white)
    }
  }
  
  @media (max-width: ${cssBreakPoint.tablet}) {
    &.active {
      height: 100vh;
      background: var(--white);
      position: fixed;

      animation-duration: 0.5s;
      animation-timing-function: ease-in-out;
      animation-name: ${props=>slideHeader(props.slideHeaderOption)};
      animation-fill-mode: forwards;
    }
  }
`
const NavbarSection = styled(({navbarOption, ...restProps}:INavbarSection) => <section {...restProps}/>)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${cssBreakPoint.tablet}) {
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    
    &.deactive {
      animation-name: ${props=>navbar(props.navbarOption)};
      animation-duration: 0.7s;
      animation-fill-mode: forwards;
    }
  }
`

const Navbar: FC<NavbarProps> = () => {
  const [toggle, setToggle] = useState(false)
  const [sticky, setSticky] = useState(false)

  const headerOption = {
    start: {
      backgroundColor: 'transparent'
    },
    end: {
      backgroundColor: '#ffffff'
    }
  }
  const navbarOption = {
    start: {
      display: 'flex'
    },
    end: {
      display: 'inline'
    }
  }

  const slideHeaderOption = {
    start: {
      right: '-210%',
    },
    end: {
      right: '0%',
    },
  }
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      setSticky(window.pageYOffset>51)
    })
  },[])
  useEffect(()=>{
    document.body.style.overflow = toggle ? "hidden" : "unset"
  }, [toggle])

  const onClickToggle = () => setToggle(toggle => !toggle)
  return (
    <HeaderSection
      className= {`${toggle ? "active " : "deactive"} ${sticky ? 'sticky' : ''}`}
      headerOption={headerOption}
      slideHeaderOption={slideHeaderOption}
    >
      <ToggleButton
        onClickToggle={onClickToggle}
        toggle={toggle}
        sticky={sticky}
      />
      <Container>
        <NavbarSection className={toggle ? "active" : "deactive"} navbarOption={navbarOption}>
          <Logo isActive={toggle||sticky}/>
          <Menu isActive={toggle}/>
        </NavbarSection>
      </Container>
    </HeaderSection>
  )
}

export default Navbar