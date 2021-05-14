import React, { ReactElement } from 'react'
import styled from "styled-components"
import { WrapperProps } from '../../types/IntroduceType'
import { cssBreakPoint } from '../../styles/constant'
import { showElement } from '../Styled/Animation'

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
  display: ${(props) => props.active.first? 'flex': 'none'};
  justify-content: space-around;
  @media (max-width: ${cssBreakPoint.tablet}) {
    display: ${(props) => props.active.first? 'block': 'none'};
    margin-top: 4rem;
  }
  animation-name: ${showElement({ start, end })};
  animation-duration: 0.5s;
  animation-timing-function: ease-in;
`
const Left = styled.div``
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 16rem;
  margin-top: 12%;
  @media(max-width: ${cssBreakPoint.tablet}) {
    margin-top: 3.5rem;
  }
`
//righttext1
const InnerRightText = styled.div`
  width: fit-content;
  min-width: 342px;
  right: -169px;
  top: -117px;
  display: none !important;
  position: absolute;
  border-radius: 5px;
  background-color: var(--white);
  padding: 1rem;
  font-family: NotoSansKR;
  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.65px;
  text-align: left;
  color: var(--greyish-brown);
  &::after {
    content: "";
    border-top: 8px solid var(--white);
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    position: absolute;
    top: 100%;
    left: 50%;
  }
`
//righttext2
const RightText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 9rem;
  text-align: start;
  font-weight: normal;
  letter-spacing: -1px;
  font-size: 20px;
  color: var(--greyish-brown);
  @media (max-width: ${cssBreakPoint.tablet}) {
    text-align: center;
    align-items: center;
  }
  @media (max-width: ${cssBreakPoint.mobileMd}) {
    height: 12rem;
    & div {
      margin-bottom: 25px;
    }
    & p {
      margin-bottom: 25px;
    }
  }
`
const ToolTip = styled.div`
  position: relative;
  display: inline;
  left: .2rem;
  &:hover .hover-text {
    display: block !important;
  }
  @media (max-width: ${cssBreakPoint.tablet}) {
    display: none;
  }
`
const ToolTipImg = styled.img`
  width: 20px;
  text-align: center;
  vertical-align: baseline;
`
const Span = styled.span`
  color: var(--cornflower);
`
const H3 = styled.h3`
  font-size: 24px;
  font-weight: bold;
`
const ContentImg = styled.img`
  width: 85%;
  @media (max-width: ${cssBreakPoint.tablet}) {
    width: 60%;
  }
  @media (max-width: ${cssBreakPoint.mobileMd}) {
    width: 100%;
  }
`
const MobileBlock = styled.span`
  @media (max-width: ${cssBreakPoint.mobileMd}) {
    display: block;
  }
`
const IntroItem1 = ({ active }: any): ReactElement => {
  return (
    <Wrapper active={active}>
      <Left>
        <ContentImg src="./static/image/introduce/Group%2016.svg" alt="introduce automation"/>
      </Left>
      <Right>
        <RightText>
          <div>
            <p style={{display: 'inline'}}>AI 알고리즘+마케팅 전문가가 함께하는 레버</p>
            <ToolTip className="tooltip">
              <InnerRightText className="hover-text">
                레버의 AI 알고리즘은 <Span>축적된 디지털 마케팅 노하우</Span>를
                바탕으로<br/>마케터들의 업무를 자동화하며, 고객 서비스를 분석 및 진단하여<br/>
                <Span>고객 맞춤 전략</Span>을 통해 <Span>광고 성과 목표를 달성합니다.</Span><br/>
                지금도 레버의 알고리즘은 업그레이드 되고 있습니다!
              </InnerRightText>
              <ToolTipImg src="./static/image/introduce/Slice%2019.svg" alt="i icon"/>
            </ToolTip>
          </div>
          <p>매체별 광고 세팅과 효율 측정의 어려움을&nbsp;<MobileBlock className="mobile-block">레버에서 해결해보세요.</MobileBlock><br/>
            여러 광고를 통합하여 확인하고&nbsp;<MobileBlock className="mobile-block">데이터에 대한 해석까지 받아볼 수 있습니다.</MobileBlock>
          </p>
          <H3>당신의 광고는 밤낮으로 최적화됩니다.</H3>
        </RightText>
      </Right>
    </Wrapper>
  )
}

export default IntroItem1




