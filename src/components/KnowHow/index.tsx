import React, {FC, ReactElement} from 'react'
import styled from "styled-components"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {KnowHowProps} from "../../types/knowhow";
import {Container} from "../Styled/Layout";
import {cssBreakPoint} from "../../styles/constant";
import KnowHowSlider from "./KnowHowSlider";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";

const KnowHowSection = styled.div`
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
const KnowHow: FC<KnowHowProps> = ({ demo }): ReactElement => {
  const animation = [
    useScrollFadeIn('up', 1, 0),
    useScrollFadeIn('up', 1, 0.5),
    useScrollFadeIn('up', 1, 1),
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <KnowHowSection id="know_how">
      <KnowHowContainer>
        <h1 className="title" {...animation[0]}>디지털 마케팅 노하우</h1>
        <p className="sub-title" {...animation[1]}>
          <span>막연하고 어려운 디지털 마케팅,&nbsp;</span>
          <span>레버가 함께 고민하고 노하우를 공유합니다.</span>
        </p>
       <KnowHowSlider
         settings={settings}
         demo={demo}
       />
      </KnowHowContainer>
    </KnowHowSection>
  )
}

export default KnowHow