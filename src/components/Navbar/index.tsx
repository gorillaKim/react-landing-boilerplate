import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Container } from 'components/Styled/Layout'
import { navbar, slideHeader } from 'components/Styled/Animation'
import { cssBreakPoint } from 'styles/constant'
import { IHeaderSection, INavbarSection, NavbarProps } from 'types/navbar'
import Logo from './Logo'
import Menu from './Menu'
import ToggleButton from './ToggleButton'

const HeaderSection = styled(
  ({ headerOption, slideHeaderOption, ...restProps }: IHeaderSection) => <section {...restProps} />,
)`
  position: sticky;
  position: -webkit-sticky; /* Safari */
  top: 0;
  width: 100%;
  z-index: 998;

  &.sticky {
    background-color: #ffffff;
    li a {
      color: var(--black);
    }
    .color-white {
      color: var(--white);
    }
  }

  @media (max-width: ${cssBreakPoint.tablet}) {
    &.active {
      height: 100vh;
      background: var(--white);
      position: fixed;

      animation-duration: 0.5s;
      animation-timing-function: ease-in-out;
      animation-name: ${props => slideHeader(props.slideHeaderOption)};
      animation-fill-mode: forwards;
    }
  }
`
const NavbarSection = styled(({ navbarOption, ...restProps }: INavbarSection) => (
  <section {...restProps} />
))`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${cssBreakPoint.tablet}) {
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    &.active {
      height: 100vh;
    }
    &.deactive {
      animation-name: ${props => navbar(props.navbarOption)};
      animation-duration: 0.7s;
      animation-fill-mode: forwards;
    }
  }
`

const Navbar: FC<NavbarProps> = ({ mode }) => {
  const [toggle, setToggle] = useState(false)
  const [sticky, setSticky] = useState(false)

  const headerOption = {
    start: {
      backgroundColor: 'transparent',
    },
    end: {
      backgroundColor: '#ffffff',
    },
  }
  const navbarOption = {
    start: {
      display: 'flex',
    },
    end: {
      display: 'inline',
    },
  }

  const slideHeaderOption = {
    start: {
      right: '-210%',
    },
    end: {
      right: '0%',
    },
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setSticky(window.pageYOffset > 51)
    })
  }, [])
  useEffect(() => {
    document.body.style.overflow = toggle ? 'hidden' : 'unset'
  }, [toggle])

  const onClickToggle = () => setToggle(toggle => !toggle)
  const clickToMove = (e: React.MouseEvent) => {
    let href = (e.target as HTMLInputElement).dataset.nav
    const isLogo = href === 'logo' || href === undefined
    const position = document.querySelector(`#${href}`) as HTMLElement
    !isLogo && toggle && onClickToggle()
    window.scrollTo({
      top: position ? position.offsetTop : 0,
      behavior: 'smooth',
    })
  }
  return (
    <HeaderSection
      className={`${toggle ? 'active ' : 'deactive'} ${sticky ? 'sticky' : ''}`}
      headerOption={headerOption}
      slideHeaderOption={slideHeaderOption}
    >
      <ToggleButton onClickToggle={onClickToggle} toggle={toggle} sticky={sticky} />
      <Container>
        <NavbarSection className={toggle ? 'active' : 'deactive'} navbarOption={navbarOption}>
          <Logo isActive={toggle || sticky} clickToMove={clickToMove} />
          <Menu isActive={toggle} clickToMove={clickToMove} mode={mode} />
        </NavbarSection>
      </Container>
    </HeaderSection>
  )
}

export default Navbar
