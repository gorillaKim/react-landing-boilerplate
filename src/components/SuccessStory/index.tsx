import React, { FC } from 'react'
import styled from 'styled-components'
import { cssBreakPoint } from 'styles/constant'
import SuccessStorySlider from './SuccessStorySlider'

const Section = styled.section`
  width: 100%;
  min-height: 444px;
  height: 80vh;
  position: relative;
  background: linear-gradient(90deg, #ffffff 60%, #5c6aff 40%);
  @media (max-width: ${cssBreakPoint.tablet}) {
    background: unset;
    height: fit-content;
  }
`
const ContentLayout = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;

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
const Content = styled.div`
  margin-top: 68px;
  width: 100%;

  @media (max-width: ${cssBreakPoint.tablet}) {
    width: 90%;
    margin-right: 5%;
    margin-left: 5%;
  }
`
const Bottom = styled.div`
  width: 100%;
  height: 22px;
  float: left;
  font-family: NotoSansKR;
  font-size: 15px;
  letter-spacing: -0.75px;
  text-align: right;
  color: var(--black);
  p {
    margin-top: 6px;
    margin-right: 11px;
  }
`

interface ISuccessStory {
  items: any
}

const SuccessStory: FC<ISuccessStory> = ({ items }) => {
  return (
    <Section id={'success_story'}>
      <ContentLayout>
        <Title>
          <p className="xsm">Digital Marketing Solution LEVER</p>
          <p className="xlg">SUCCESS STORY</p>
          <p className="sm">
            성공을 꿈꾸는 기업들과 함께<span>꿈이 현실이 되는 성공 사례를 만들고 있습니다.</span>
          </p>
        </Title>
        <Content>
          <SuccessStorySlider items={items} className={'desktop'} slidesToShow={3} />
          <SuccessStorySlider items={items} className={'mobile'} slidesToShow={1} />
        </Content>
        <Bottom>
          <p>* 레버의 실제 고객사례입니다.</p>
        </Bottom>
      </ContentLayout>
    </Section>
  )
}

export default SuccessStory
