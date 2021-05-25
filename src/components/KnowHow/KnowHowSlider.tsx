import React, {FC, ReactElement} from 'react'
import styled from "styled-components"
import CustomSlider from "../CustomSlider";
import {cssBreakPoint} from "../../styles/constant";
import {KnowHowSlideProps} from "../../types/knowhow";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";

const SliderWrapper = styled.div`
  .slick-slide {
    margin-left: unset;
  }
  .slick-list {
    height: 400px;
  }
  .slick-prev:before,
  .slick-next:before {
    color: var(--cornflower);
    opacity: 1;
  }
  .slick-dots {
    z-index: 1;
    li.slick-active button:before {
      opacity: 1;
      color: var(--cornflower);
    }
    li button:before {
      opacity: .3;
      color: var(--cornflower);
    }
  }
  .inner {
    width: 1280px;
    margin-top: 8rem;
    @media (max-width: ${cssBreakPoint.tablet}) {
      width: 1000px;
    }
    @media (max-width: ${cssBreakPoint.mobileMd}) {
      width: 800px;
      margin-top: 3rem;
    }
    ul {
      width: 100vw;
      max-width: 1280px;
    }
  }
  .shadow {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9998;
    font-size: 0;
    &:hover {
      transition: all 0.4s;
      width: 100%;
      height: 100%;
      background: var(--greyish-brown);
      opacity: 50%;
      font-size: 14px;
    }
  }
  .img-box {
    margin: auto 10px;
    max-width: 412px;
    height: 275px;
    border-radius: 5px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: 100% 275px;
    p {
      flex-grow: 0;
      font-family: Roboto;
      font-weight: bold;
      letter-spacing: -0.42px;
      text-align: center;
      color: var(--white);
      z-index: 9999;
    }
  }
  .img-desc {
    margin-top: 1rem;
    font-size: 18px;
    letter-spacing: -0.9px;
    font-family: NotoSansKR;
    p {
      font-family: Roboto;
      color: var(--cornflower);
      font-size: 14px;
      font-weight: bold;
    }
    & div:nth-child(2) {
      margin-top: 0.5rem;
      color: var(--greyish-brown);
    }
  }
`
const KnowHowSlider: FC<KnowHowSlideProps> = ({ demo, settings }): ReactElement => {
  return(
    <SliderWrapper>
      <CustomSlider className={'inner'} settings={settings}>
        {demo.map((item: any) =>
          <div>
            <div
              className="img-box"
              id={item.id}
              style={{backgroundImage: `url(${item.url})`}}
            >
              <a className="shadow" href={item.href} target="_blank">
                <p>view more</p>
              </a>
            </div>
            <div className="img-desc">
              <p>Blog</p>
              { item.content.split('\n').map((line: string) =>
                <div>{line}</div>
              )}
            </div>
          </div>
        )}
      </CustomSlider>
    </SliderWrapper>
  )
}

export default KnowHowSlider