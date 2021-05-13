import React, { ReactElement } from 'react'
import styled from "styled-components"
import { WrapperProps } from './IntroduceType'

const Wrapper = styled.div<WrapperProps>`
  display: ${(props)=> props.active.third? 'block': 'none'};
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
`
const InnerPc =  styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-bottom: 2.5rem;
`
const InnerMobile = styled.div`
  display: none;
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
  //opacity: 0;
`
const Arrow = styled.div`
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  margin: 0 2rem;
`
const ArrowLeft = styled(Arrow)`
  border-right: 10px solid var(--light-periwinkle);
`
const ArrowRight = styled(Arrow)`
  border-left: 10px solid var(--light-periwinkle);
`
const ArrowDown = styled.div`
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
      <InnerPc>
        <Circle>
          <span>STEP 01</span>
          <p>레버 문의하기</p>
        </Circle>
        <ArrowRight />
        <Circle>
          <span>STEP 02</span>
          <p>세일즈팀과 미팅</p>
        </Circle>
        <ArrowRight />
        <Circle>
          <span>STEP 03</span>
          <p>담당 매니저 배정<br/>및 컨설팅</p>
          <ArrowDown />
        </Circle>
      </InnerPc>
      <InnerPc id="reverse-order">
        <Circle>
          <span>STEP 06</span>
          <p>마케팅 시작하기</p>
        </Circle>
        <ArrowLeft />
        <Circle>
          <span>STEP 05</span>
          <p>마케팅 인사이트 도출<br/>및 최적화</p>
        </Circle>
        <ArrowLeft />
        <Circle>
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