import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { cssBreakPoint } from 'styles/constant'

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 16rem;
  margin-top: 12%;
  @media (max-width: ${cssBreakPoint.tablet}) {
    margin-top: 3.5rem;
  }
`
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
  span {
    color: var(--cornflower);
  }
  ::after {
    content: '';
    border-top: 8px solid var(--white);
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    position: absolute;
    top: 100%;
    left: 50%;
  }
`
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
  div p {
    display: inline;
  }
  h3 {
    font-size: 24px;
    font-weight: bold;
  }
  @media (max-width: ${cssBreakPoint.tablet}) {
    text-align: center;
    align-items: center;
  }
  @media (max-width: ${cssBreakPoint.mobileMd}) {
    height: 12rem;
    div {
      margin-bottom: 25px;
    }
    p {
      margin-bottom: 25px;
    }
  }
`
const ToolTip = styled.div`
  position: relative;
  display: inline;
  left: 0.2rem;
  :hover .hover-text {
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
const MobileBlock = styled.span`
  @media (max-width: ${cssBreakPoint.mobileMd}) {
    display: block;
  }
`
const IntroItemRight = (): ReactElement => {
  return (
    <Right>
      <RightText>
        <div>
          <p>AI 알고리즘+마케팅 전문가가 함께하는 레버</p>
          <ToolTip className="tooltip">
            <InnerRightText className="hover-text">
              레버의 AI 알고리즘은 <span>축적된 디지털 마케팅 노하우</span>를 바탕으로
              <br />
              마케터들의 업무를 자동화하며, 고객 서비스를 분석 및 진단하여
              <br />
              <span>고객 맞춤 전략</span>을 통해 <span>광고 성과 목표를 달성합니다.</span>
              <br />
              지금도 레버의 알고리즘은 업그레이드 되고 있습니다!
            </InnerRightText>
            <ToolTipImg src="./static/image/introduce/Slice%2019.svg" alt="i icon" />
          </ToolTip>
        </div>
        <p>
          매체별 광고 세팅과 효율 측정의 어려움을&nbsp;
          <MobileBlock className="mobile-block">레버에서 해결해보세요.</MobileBlock>
          <br />
          여러 광고를 통합하여 확인하고&nbsp;
          <MobileBlock className="mobile-block">
            데이터에 대한 해석까지 받아볼 수 있습니다.
          </MobileBlock>
        </p>
        <h3>당신의 광고는 밤낮으로 최적화됩니다.</h3>
      </RightText>
    </Right>
  )
}

export default IntroItemRight
