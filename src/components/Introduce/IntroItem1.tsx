import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { WrapperProps } from 'types/introduce'
import { cssBreakPoint } from 'styles/constant'
import { showElement } from 'components/Styled/Animation'
import useScrollFadeIn from 'hooks/useScrollFadeIn'
import IntroItemLeft from './IntroItemLeft'
import IntroItemRight from './IntroItemRight'

// 나중에 분리 예정
const start = {
  top: '0px',
  height: '2.2px',
  opacity: '0',
  zIndex: '-1',
  display: 'unset',
  visibility: 'hidden',
  backgroundColor: 'transparent',
}
const end = {
  top: '11px',
  height: '0px',
  opacity: '1',
  zIndex: '1',
  display: 'unset',
  visibility: 'visible',
  backgroundColor: 'transparent',
}
const Wrapper = styled.div<WrapperProps>`
  display: ${props => (props.active.first ? 'flex' : 'none')};
  justify-content: space-around;
  animation-name: ${showElement({ start, end })};
  animation-duration: 0.5s;
  animation-timing-function: ease-in;
  @media (max-width: ${cssBreakPoint.tablet}) {
    display: ${props => (props.active.first ? 'block' : 'none')};
    margin-top: 4rem;
  }
`
const IntroItem1 = ({ active }: any): ReactElement => {
  const animation = useScrollFadeIn('up', 1, 0)
  return (
    <Wrapper active={active} {...animation}>
      <IntroItemLeft />
      <IntroItemRight />
    </Wrapper>
  )
}

export default IntroItem1
