import React, {FC} from 'react'
import styled from "styled-components"
import {MainFlexContainer as MainContainer} from "./Styled";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";
import {cssBreakPoint} from "../../styles/constant";
import ContactFormContainer from "../../containers/MainArticle/ContactFormContainer";

const FirstContainer = styled.div`
  width: 50%;
  min-width: 50%;
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
  }

  @media (max-width: ${cssBreakPoint.tablet}) {
    padding: unset;
  }
`
const SecondContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 50%;
  max-width: 640px;
  height: 100%;
  margin: 0 40px;
  padding: 230px 0 156px 0;

  @media (max-width: ${cssBreakPoint.tablet}) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: unset;
    padding: 30px 0;
    height: fit-content;
  }
  @media (max-width: ${cssBreakPoint.mobileXs}) {
    max-height: unset;
  }
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
    padding: 170px 0 0 0;
    height: unset;
  }
`

const FirstContent = styled.div`
  
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
        width: 100%;
        max-width: 100%;
        height: 53px;
        font-size: 45px;
        letter-spacing: -1.71px;
        text-align: center;
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

      @media (max-width: ${cssBreakPoint.tablet}) {
        width: fit-content;
        height: 29px;
        text-align: center;
        margin: 0 auto;
      }
      @media (max-width: ${cssBreakPoint.mobileMd}) {
        min-width: 284px;
        height: 52px;
        font-size: 18px;
        letter-spacing: -0.9px;
      }
    }
  }
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
          <FirstContent {...animation[0]}>
            <p className={'large-title'}>
              Your Dreams, Our Goals
            </p>
            <p className={'small-title'}>
              디지털 마케팅, 성공의 레버를 당기세요!
            </p>
          </FirstContent>
        </ContentBox>
      </FirstContainer>
      <SecondContainer>
        <ContactFormContainer/>
      </SecondContainer>
    </MainContainer>
  )
}

export default MainB