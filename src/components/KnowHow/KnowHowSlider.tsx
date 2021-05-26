import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { cssBreakPoint } from 'styles/constant'
import { IKnowHowSlideProps } from 'types/knowhow'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Mousewheel } from 'swiper'
SwiperCore.use([Mousewheel])

const CustomSwiper = styled(Swiper)`
  &.inner {
    max-width: 1280px;
    width: 97%;
    margin-top: 8rem;
    @media (max-width: ${cssBreakPoint.mobileMd}) {
      min-width: unset;
      width: 90%;
      margin-top: 3rem;
    }
    ul {
      width: 100vw;
      max-width: 1280px;
    }
  }
  &.desktop {
    display: block;
    @media (max-width: ${cssBreakPoint.mobileMd}) {
      display: none;
    }
  }
  &.mobile {
    display: none;
    @media (max-width: ${cssBreakPoint.mobileMd}) {
      display: block;
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
    :hover {
      transition: all 0.4s;
      width: 100%;
      height: 100%;
      background: var(--greyish-brown);
      opacity: 50%;
      font-size: 14px;
    }
  }
  .img-box {
    width: 100%;
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
    text-align: center;
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

const KnowHowSlider: FC<IKnowHowSlideProps> = ({
  className,
  demo,
  slidesToShow,
  animation,
}): ReactElement => {
  return (
    <CustomSwiper
      className={`inner ${className}`}
      mousewheel
      slidesPerView={slidesToShow}
      spaceBetween={10}
      {...animation}
    >
      {demo.map((item: any, index: number) => (
        <SwiperSlide key={index}>
          <div className="img-box" id={item.id} style={{ backgroundImage: `url(${item.url})` }}>
            <a className="shadow" href={item.href} target="_blank">
              <p>view more</p>
            </a>
          </div>
          <div className="img-desc">
            <p>Blog</p>
            {item.content.split('\n').map((line: string) => (
              <div>{line}</div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </CustomSwiper>
  )
}

export default KnowHowSlider
