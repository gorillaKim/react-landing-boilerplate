import React, { ReactElement } from 'react'
import styled from "styled-components"
import { WrapperProps, DescBoxProps} from './IntroduceType'

const imgUrl = {
  google: './static/image/introduce/Slice%2086.svg',
  facebook: './static/image/introduce/Slice%2087.svg',
  naver: './static/image/introduce/Slice%2088.svg',
}
const Wrapper = styled.div<WrapperProps>`
  display: ${(props): string => props.active.second? 'flex': 'none'};
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
const DescBox = styled.div<DescBoxProps>`
  line-height: 1.2rem;
  padding: 1rem 18px 0.5rem 18px;
  text-align: start;
  display: flex;
  font-size: 14px;
  color: var(--warm-grey);
  letter-spacing: -0.7px;
  flex-grow: 0;
  & span {
    margin-right: .2rem;
  }
  & .google::before {
    content: "co";
    color: transparent;
    background: url(${(props: any):string => props.imgUrl.google
    }) center no-repeat;
  }
  & .facebook::before {
    content: "con";
    color: transparent;
    background: url(${(props: any):string => props.imgUrl.facebook
    }) center no-repeat;
  }
  & .naver::before {
    content: "con";
    color: transparent;
    background: url(${(props: any):string => props.imgUrl.naver
    }) center no-repeat;
  }
  }
`
const Bottom = styled.div`
  padding-top: 3rem;
  & h1 {
    font-size: 20px;
    color: var(--greyish-brown);
    letter-spacing: -1px;
    margin-bottom: 1rem;
  }
  & p {
    font-size: 15px;
    color: var(--warm-grey);
    letter-spacing: -0.75px;
  }
`
const Dot = styled.div`
  line-height: 12px;
  padding-bottom: 2rem;
`
const DateDesc = styled.div`
  padding-bottom: 5px;
`
const DescBox2 = styled.div`
  font-weight: bold;
  margin-left: 1.5rem;
`
const Inner = styled.div`
  display: flex;
  text-align: left;
`
const ReportBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`
const ReportImg = styled.div`
  display: flex;
  flex-direction: column;
  &.first, &.third {
    position: relative;
  }
  &.first img:nth-child(1) {
    width: 11rem;
  }
  &.first img:nth-child(2) {
    height: 14px;
    margin-top: 1rem;
  }
  &.first img:nth-child(3) {
    position: absolute;
    top: -3rem;
    left: 3rem;
  }
  &.second img:nth-child(1) {
    width: 9rem;
  }
  &.second img:nth-child(2) {
    height: 14px;
    margin-top: 1rem;
  }
  &.third img:nth-child(1) {
    width: 14rem;
  }
  &.third img:nth-child(2) {
    height: 14px;
    margin-top: 1rem;
  }
  &.third img:nth-child(3) {
    position: absolute;
    top: -3.5rem;
    left: 6.6rem;
  }
`
const List = styled.ul`
  padding-left: 1.5rem;
  font-size: 15px;
  & li:not(:first-child){
    line-height: 2.2;
    letter-spacing: -0.75px;
    text-align: left;
    color: var(--greyish-brown);
    &::before {
      content: "✓ ";
    }
  }
`
const ListTitle  = styled.li`
  width: auto;
  height: auto;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: -0.75px;
  text-align: left;
  margin-bottom: 1rem;
`
const IntroItem2 = ({ active }: any): ReactElement => {
  return(
    <Wrapper active={active}>
      <InnerWrapper className="banner2">
        <div>
          <Date className="date">
            2021.01.01 ~ 2021.02.01
            <img src="./static/image/introduce/Slice%2085.svg" alt="calendar icon"/>
          </Date>
          <DescBox className="desc-box" imgUrl={imgUrl}>
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
          <Dot className="dot">.<br/><br/>.<br/><br/>.</Dot>
        </div>
        <ReportBox className="report-box">
          <Inner className="inner">
            <ReportImg className="report-img first">
              <img src="./static/image/introduce/Slice%2097.svg" alt="introduce summary"/>
              <img src="./static/image/introduce/Slice%2094.svg" alt="introduce summary bar"/>
              <img src="./static/image/introduce/Slice%2082.svg" alt="introduce tooltip"/>
            </ReportImg>
            <List className="list">
              <ListTitle className="title">요 약</ListTitle>
              <li>노출수</li>
              <li>클릭당 비용(CPC)및 광고비</li>
              <li>매출 및 광고 수익률(ROAS)</li>
            </List>
          </Inner>
          <Inner className="inner">
            <ReportImg className="report-img second">
              <img src="./static/image/introduce/Slice%2091.svg" alt="introduce medium"/>
              <img src="./static/image/introduce/Slice%2092.svg" alt="introduce medium bar"/>
            </ReportImg>
            <List className="list">
              <ListTitle className="title">매체별</ListTitle>
              <li>노출수</li>
              <li>클릭수</li>
              <li>전환수</li>
              <li>광고비</li>
              <li>매출</li>
            </List>
          </Inner>
          <Inner className="inner">
            <ReportImg className="report-img third">
              <img src="./static/image/introduce/Slice%2093.svg" alt="introduce weekly daily"/>
              <img src="./static/image/introduce/Slice%2094.svg" alt="introduce weekly daily"/>
              <img src="./static/image/introduce/Slice%2095.svg" alt="introduce weekly daily"/>
            </ReportImg>
            <List className="list">
              <ListTitle className="title">주별/요일별</ListTitle>
              <li>노출수 및 클릭수</li>
              <li>클릭당 비용(CPC)및 광고비</li>
              <li>매출 및 광고수익률(ROAS)</li>
            </List>
          </Inner>
        </ReportBox>
      </InnerWrapper>
      <Bottom className="bottom">
        <h1>여러분의 광고 데이터들을&nbsp;
          <span className="mobile-block">한 곳에서 한 번에 모두 확인 가능하고,<br/>엑셀 다운로드까지 레버에서 가능합니다.</span>
        </h1>
        <p>* 위 화면은 이해를 돕기 위한 화면입니다.</p>
        <p>실제 화면과 차이가 있을 수 있습니다.</p>
      </Bottom>
    </Wrapper>
  )
}

export default IntroItem2