import React, { ReactElement } from 'react'
import styled from "styled-components"
import { WrapperProps } from '../../types/IntroduceType'
import { cssBreakPoint } from "../../styles/constant";
import { showElement, swipeRight, swipeUp } from '../Styled/Animation'

const start = {
  'top': '0px',
  'height': '2.2px',
  'opacity': '0',
  'zIndex': '-1',
  'display': 'unset',
  'visibility': 'hidden',
  'backgroundColor': 'transparent',
}
const end = {
  'top': '11px',
  'height': '0px',
  'opacity': '1',
  'zIndex': '1',
  'display': 'unset',
  'visibility': 'visible',
  'backgroundColor': 'transparent',
}
const Wrapper = styled.div<WrapperProps>`
  display: ${(props)=> props.active.third? 'block': 'none'};
  animation-name: ${showElement({ start, end })};
  animation-duration: 0.5s;
  animation-timing-function: ease-in;
  & span {
    font-family: Roboto;
    font-size: 16px;
    letter-spacing: -0.8px;
    color: var(--cornflower);
  }
  & p {
    font-size: 18px;
    letter-spacing: -0.9px;
    color: var(--greyish-brown);
  }
  @media (max-width: ${cssBreakPoint.tablet}) {
    &:nth-child(2) {
      flex-direction: row-reverse;
    }
  }
  @media (max-width: ${cssBreakPoint.mobileMd}) {
    .pc-view {
      display: none;
    }
  }
`
const InnerPc =  styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-bottom: 2.5rem;
  & .circle {
    animation-name: ${swipeRight};
    animation-duration: 0.7s;
    animation-fill-mode: forwards;
  }
  &.up {
    .circle:nth-child(3) {
      animation-delay: .5s;
    }
    .circle:nth-child(5) {
      animation-delay: 1s;
    }
  }
  &.down {
    .circle:nth-child(5) {
      animation-delay: 1.5s;
    }
    .circle:nth-child(3) {
      animation-delay: 2s;
    }
    .circle:nth-child(1) {
      animation-delay: 2.5s;
    }
  }
  @media (max-width: ${cssBreakPoint.tablet}) {
    &.down {
      flex-direction: row-reverse;
    }
  }
`
const InnerMobile = styled.div`
  display: none;
  animation-name: ${swipeUp};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  & div:nth-child(n) {
    opacity: 1;
  }
  @media (max-width: ${cssBreakPoint.mobileMd}) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 32rem;
    max-width: 20rem;
    margin: 5rem auto 0;
  }
`
const Circle = styled.div`
  width: 230px;
  height: 230px;
  position: relative;
  border: solid 1px var(--light-periwinkle);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 1.4rem;
  opacity: 0;
  @media (max-width: ${cssBreakPoint.tablet}) {
    width: 170px;
    height: 170px;
  }
  @media (max-width: ${cssBreakPoint.mobileMd}) {
    width: 150px;
    height: 150px;
  }
`
const Arrow = styled.div`
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  margin: 0 2rem;
  @media (max-width: ${cssBreakPoint.tablet}) {
    visibility: hidden;
  }
`
const ArrowLeft = styled(Arrow)`
  border-right: 10px solid var(--light-periwinkle);
`
const ArrowRight = styled(Arrow)`
  border-left: 10px solid var(--light-periwinkle);
`
const ArrowDown = styled(Arrow)`
  position: absolute;
  border-top: 10px solid var(--light-periwinkle);
  border-right: 8px solid transparent;
  border-left: 8px solid transparent;
  margin-top: 1rem;
  top: 100%;
`
const IntroItem3 = ({ active }: any): ReactElement => {
  return(
    <Wrapper active={active}>
      <InnerPc className={"pc-view up"}>
        <Circle className={'circle'}>
          <span>STEP 01</span>
          <p>레버 문의하기</p>
        </Circle>
        <ArrowRight />
        <Circle className={'circle'}>
          <span>STEP 02</span>
          <p>세일즈팀과 미팅</p>
        </Circle>
        <ArrowRight />
        <Circle className={'circle'}>
          <span>STEP 03</span>
          <p>담당 매니저 배정<br/>및 컨설팅</p>
          <ArrowDown />
        </Circle>
      </InnerPc>
      <InnerPc className={"pc-view down"} id="reverse-order">
        <Circle className={'circle'}>
          <span>STEP 06</span>
          <p>마케팅 시작하기</p>
        </Circle>
        <ArrowLeft />
        <Circle className={'circle'}>
          <span>STEP 05</span>
          <p>마케팅 인사이트 도출<br/>및 최적화</p>
        </Circle>
        <ArrowLeft />
        <Circle className={'circle'}>
          <span>STEP 04</span>
          <p>알고리즘을 통한<br/>광고 최적화</p>
        </Circle>
      </InnerPc>
      <InnerMobile className="inner__mobile">
        <Circle>
          <span>STEP 01</span>
          <p>레버 문의하기</p>
        </Circle>
        <Circle>
          <span>STEP 02</span>
          <p>세일즈팀과 미팅</p>
        </Circle>
        <Circle>
          <span>STEP 03</span>
          <p>담당 매니저 배정<br/>및 컨설팅</p>
        </Circle>
        <Circle>
          <span>STEP 04</span>
          <p>알고리즘을 통한<br/>광고 최적화</p>
        </Circle>
        <Circle>
          <span>STEP 05</span>
          <p>마케팅 인사이트 도출<br/>및 최적화</p>
        </Circle>
        <Circle>
          <span>STEP 06</span>
          <p>마케팅 시작하기</p>
        </Circle>
      </InnerMobile>
    </Wrapper>

  )
}

export default IntroItem3