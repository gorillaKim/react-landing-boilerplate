import React, {FC, useEffect, useState} from 'react'
import styled from "styled-components"
import {Container} from '../Styled/Layout'
import {cssBreakPoint} from "../../styles/constant";

const Section = styled.section`
  width: 100%;
  min-height: 444px;
  position: relative;
  background: linear-gradient(90deg, #ffffff 56%, #5c6aff 44%);
  @media (max-width: ${cssBreakPoint.tablet}) {
    background: unset;
  }
`
const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  
  height: fit-content; 
  min-height: 444px; 
  max-width: 80vw;
  min-width: 1025px;
  width: 100%;
  float: right;
  @media (max-width: ${cssBreakPoint.tablet}) {
    max-width: unset;
    min-width: unset;
  }
`
const Title = styled.div`
  font-stretch: normal;
  font-style: normal;
  line-height: normal;    
  font-family: Roboto;
  text-align: left;
  margin: 0 5%;

  @media (max-width: ${cssBreakPoint.mobileXs}) {
    margin: unset;
  }
  
  .sm {
    font-family: NotoSansKR;
    font-size: 18px;
    font-weight: normal;
    letter-spacing: -0.9px;
    color: var(--greyish-brown);

    @media (max-width: ${cssBreakPoint.mobileMd}) {
      width: 318px;
      height: 52px;
    }
    @media (max-width: ${cssBreakPoint.mobileXs}) {
      font-size: 15px;
      width: fit-content;
    }

  }
  .xsm {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: -0.54px;
    color: var(--cornflower);
    
    @media (max-width: ${cssBreakPoint.mobileMd}) {
      min-width: 252px;
      height: 21px;
    }
    @media (max-width: ${cssBreakPoint.mobileXs}) {
      font-size: 18px;
      width: fit-content;
    }
  }
  .xlg {
    font-size: 95px;
    font-weight: 700;
    letter-spacing: -4.75px;
    opacity: 45%;
    color: var(--warm-grey);

    @media (max-width: ${cssBreakPoint.mobileMd}) {
      width: 336px;
      height: 188px;
      padding-top: 4%;
      font-size: 80px;
      font-weight: bold;
      letter-spacing: -2.4px;
    }
    @media (max-width: ${cssBreakPoint.mobileXs}) {
      font-size: 70px;
      width: fit-content;
    }
  }
  
`

interface ISuccessStory {

}

const SuccessStory: FC<ISuccessStory> = () => {
  return (
    <Section id={"success_story"}>
      <ContentLayout>
        <Title>
          <p className="xsm">
            Digital Marketing Solution LEVER
          </p>
          <p className="xlg">
            SUCCESS STORY
          </p>
          <p className="sm">
            성공을 꿈꾸는 기업들과 함께<span>꿈이 현실이 되는 성공 사례를 만들고 있습니다.</span>
          </p>
        </Title>
      </ContentLayout>
    </Section>
  )
}

export default SuccessStory