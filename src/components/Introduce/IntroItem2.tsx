import React, { FC, ReactElement } from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
  //display: none;
  display: flex;
  flex-direction: column;
  height: 100%;
`
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  border-radius: 35px;
  border: solid 1px var(--white);
`
const Date = styled.div`
  padding: 6px 18px 6px 19px;
  border-radius: 35px;
  border: solid 1px var(--white);
  width: fit-content;
  color: var(--warm-grey);
  letter-spacing: -0.7px;
  & > img {
    margin-left: 4rem;
  }
`
const DescBox = styled.div`
  line-height: 1.2rem;
  padding: 1rem 18px 0.5rem 18px;
  text-align: start;
  display: flex;
  font-size: 14px;
  color: var(--warm-grey);
  letter-spacing: -0.7px;
  flex-grow: 0;
`
const Dot = styled.div`
  
`
const DateDesc = styled.div`
  padding-bottom: 5px;
`
const DescBox2 = styled.div`
  font-weight: bold;
  margin-left: 1.5rem;
`

const IntroItem2 = (): ReactElement => {
  return(
    <Wrapper>
      <InnerWrapper className="banner2">
        <div>
          <Date className="date">
            2021.01.01 ~ 2021.02.01
            <img src="./static/image/introduce/Slice%2085.svg" alt="calendar icon"/>
          </Date>
          <DescBox className="desc-box">
            <DateDesc className="date__desc" id="desc1">
              <div>총 광고비</div>
              <div>집행 매체</div>
            </DateDesc>
            <DescBox2 className="desc-box2">
              <div>9,616,352원</div>
              <div>
                <span className="google">구글</span>
                <span className="facebook">페이스북</span>
                <span className="naver">네이버</span>
              </div>
            </DescBox2>
          </DescBox>
          <div className="dot">.<br/><br/>.<br/><br/>.</div>
        </div>
        <div className="report-box">
          <div className="inner">
            <div className="report-img first">
              <img src="./static/image/introduce/Slice%2097.svg" alt="introduce summary"/>
              <img src="./static/image/introduce/Slice%2094.svg" alt="introduce summary bar"/>
              <img src="./static/image/introduce/Slice%2082.svg" alt="introduce tooltip"/>
            </div>
            <ul className="list">
              <li className="title">요 약</li>
              <li>노출수</li>
              <li>클릭당 비용(CPC)및 광고비</li>
              <li>매출 및 광고 수익률(ROAS)</li>
            </ul>
          </div>
          <div className="inner">
            <div className="report-img second">
              <img src="./static/image/introduce/Slice%2091.svg" alt="introduce medium"/>
              <img src="./static/image/introduce/Slice%2092.svg" alt="introduce medium bar"/>
            </div>
            <ul className="list">
              <li className="title">매체별</li>
              <li>노출수</li>
              <li>클릭수</li>
              <li>전환수</li>
              <li>광고비</li>
              <li>매출</li>
            </ul>
          </div>
          <div className="inner">
            <div className="report-img third">
              <img src="./static/image/introduce/Slice%2093.svg" alt="introduce weekly daily"/>
              <img src="./static/image/introduce/Slice%2094.svg" alt="introduce weekly daily"/>
              <img src="./static/image/introduce/Slice%2095.svg" alt="introduce weekly daily"/>
            </div>
            <ul className="list">
              <li className="title">주별/요일별</li>
              <li>노출수 및 클릭수</li>
              <li>클릭당 비용(CPC)및 광고비</li>
              <li>매출 및 광고수익률(ROAS)</li>
            </ul>
          </div>
        </div>
      </InnerWrapper>
      <div className="bottom">
        <h1>여러분의 광고 데이터들을&nbsp;
          <span className="mobile-block">한 곳에서 한 번에 모두 확인 가능하고,<br/>엑셀 다운로드까지 레버에서 가능합니다.</span>
        </h1>
        <p>* 위 화면은 이해를 돕기 위한 화면입니다.</p>
        <p>실제 화면과 차이가 있을 수 있습니다.</p>
      </div>
    </Wrapper>
  )
}

export default IntroItem2