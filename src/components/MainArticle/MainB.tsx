import React, {FC} from 'react'
import styled from "styled-components"
import {Container} from '../Styled/Layout'
import {MainFlexContainer as MainContainer} from "./Styled";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";
import {scrollBtn} from "../Styled/Animation";
import {cssBreakPoint} from "../../styles/constant";

const FirstContainer = styled.div`
  width: 55%;
  position: relative;
  padding-bottom: 386px;
  background-image: url(${'../../../static/image/main/main_BG2.jpg'});
  background-repeat: no-repeat;
  background-size: cover;
  
  &::before {
    height: 100%;
    width: 100%;
    top: 0;
    position: absolute;
    content: "";
    opacity: 0.5;
    background-color: #0f0f14;
    z-index: 0;
`
const SecontContainer = styled.div`
  width: 45%;
  max-width: 834px;
  position: relative;
  margin: 0 40px;
  padding: 230px 0 156px 0;
`
const ContentBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 230px 0 168px 0;
  
  @media (max-width: ${cssBreakPoint.tablet}) {
    padding-bottom: 10px;
  }
`

const TopContent = styled.div`
  
  p {
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    text-align: left;
    color: var(--white);

    &.large-title {
      width: fit-content;
      margin-bottom: 20px;
      min-width: 412px;
      max-width: 480px;
      min-height: 176px;
      font-family: Roboto;
      padding-top: 10px;
      font-size: 75px;
      font-weight: bold;
      letter-spacing: -3.75px;

      @media (max-width: ${cssBreakPoint.tablet}) {
         font-size: 57px;
         letter-spacing: -1.71px;
      }
      @media (max-width: ${cssBreakPoint.mobileMd}) {
        max-width: 326px;
        min-width: unset;
        font-size: 49px;
      }
    }
    &.small-title {
      width: fit-content;
      height: 29px;
      font-family: NotoSansKR;
      font-size: 20px;
      letter-spacing: -1px;
      
      @media (max-width: ${cssBreakPoint.mobileMd}) {
        min-width: 284px;
        height: 52px;
        font-size: 18px;
        letter-spacing: -0.9px;
      }
    }
  }
`
const BottomContent = styled.div`

  animation-name: swipeUp;
  animation-duration: 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;

  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  font-family: NotoSansKR;
  
  p {
    margin-bottom: 20px;
    
    &.xsm-text {
      width: 466px;
      height: 46px;
      font-size: 16px;
      letter-spacing: -0.8px;
      text-align: center;
      color: var(--white);
    }
  }
  button {
    &.link-btn {
      display: block;
      min-width: 295px;
      height: 68px;
      margin: 0 auto;
      border-radius: 7px;
      background-color: var(--white);
      font-size: 17px;
      letter-spacing: -0.85px;
      text-align: center;
      color: var(--black);
      border: unset;
      cursor: pointer;
    }
  }
`
const ScrollIcon = styled.div`
  width: 34px;
  height: 55px;
  background: url(${'../../../static/image/icon/down_arrow.svg'}) no-repeat;
  background-size: cover;
  border-radius: 17px;
  animation-name: ${scrollBtn};
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 1.2s;
`

interface IMainB {
}

const MainB: FC<IMainB> = () => {
  const animation = [
    useScrollFadeIn('up', 1, 0),
    useScrollFadeIn('up', 1, 0.5),
  ]

  return (
    <MainContainer id="main">
      <FirstContainer>
        <ContentBox>
          <TopContent {...animation[0]}>
            <p className={'large-title'}>
              Your Dreams, Our Goals
            </p>
            <p className={'small-title'}>
              디지털 마케팅, 성공의 레버를 당기세요!
            </p>
          </TopContent>
          <BottomContent
            {...animation[1]}
          >
            <p className={"xsm-text"}>
              매체운영, 소재제작, 성과 측정까지 <br/>
              당신의 디지털 마케팅, 레버가 지원합니다.
            </p>
            <button className={"link-btn"}>
              무료로 자동화 체험하기
            </button>
          </BottomContent>
        </ContentBox>
      </FirstContainer>
      <SecontContainer>
      </SecontContainer>
    </MainContainer>
  )
}

export default MainB