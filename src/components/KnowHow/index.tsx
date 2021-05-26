import React, { FC } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { IKnowHowProps } from 'types/knowhow'
import KnowHowSlider from './KnowHowSlider'
import styled from 'styled-components'
import useScrollFadeIn from 'hooks/useScrollFadeIn'
import { Container } from 'components/Styled/Layout'
import { cssBreakPoint } from 'styles/constant'

const KnowHowSection = styled.section`
  background-color: #fafafa;
  overflow: hidden;
`
const KnowHowContainer = styled(Container)`
  padding: 8rem 0;
  text-align: center;
  line-height: 1.3;
  .title {
    color: var(--black);
    width: fit-content;
    font-size: 50px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    font-family: NotoSansKR;
    line-height: normal;
    letter-spacing: -2.5px;
    margin: 0 auto;
    @media (max-width: ${cssBreakPoint.mobileMd}) {
      font-size: 40px;
    }
    @media (max-width: ${cssBreakPoint.mobileXs}) {
      font-size: 35px;
    }
    background: linear-gradient(
      to bottom,
      #fafafa 0,
      #fafafa 53%,
      var(--cornflower) 0%,
      var(--cornflower) 84%,
      #fafafa 66%,
      #fafafa 100%
    );
  }
  .sub-title {
    margin-top: 0.8rem;
    font-size: 18px;
    font-family: NotoSansKR;
    color: var(--greyish-brown);
    letter-spacing: -0.9px;
    @media (max-width: ${cssBreakPoint.mobileMd}) {
      span {
        display: block;
      }
    }
  }
`

const KnowHow: FC<IKnowHowProps> = ({ demo }) => {
  const animation = [
    useScrollFadeIn('up', 1, 0),
    useScrollFadeIn('up', 1, 0.5),
    useScrollFadeIn('up', 1, 1),
    useScrollFadeIn('up', 1, 1),
    useScrollFadeIn('up', 1, 1),
  ]
  return (
    <KnowHowSection>
      <KnowHowContainer>
        <h1 className="title" {...animation[0]}>
          디지털 마케팅 노하우
        </h1>
        <p className="sub-title" {...animation[1]}>
          <span>막연하고 어려운 디지털 마케팅,&nbsp;</span>
          <span>레버가 함께 고민하고 노하우를 공유합니다.</span>
        </p>
        <KnowHowSlider
          className={'desktop'}
          demo={demo}
          slidesToShow={3}
          animation={{ ...animation[2] }}
        />
        <KnowHowSlider
          className={'mobile'}
          demo={demo}
          slidesToShow={1}
          animation={{ ...animation[3] }}
        />
      </KnowHowContainer>
    </KnowHowSection>
  )
}

export default KnowHow
