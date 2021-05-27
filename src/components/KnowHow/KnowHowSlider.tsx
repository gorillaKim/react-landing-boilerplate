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
      width: 80%;
      padding: 0 10%;
      max-width: 60%;
      margin: 3rem auto 0 auto;
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
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9998;
    font-size: 0;
    :hover {
      transition: all 0.4s;
      background: var(--greyish-brown);
      opacity: 50%;
      font-size: 14px;
    }
  }
  .img-box {
    position: relative;
    width: 100%;
    height: 275px;
    border-radius: 5px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: 100% 275px;
    img,
    a {
      width: 100%;
      height: 100%;
    }
    p {
      position: absolute;
      flex-grow: 0;
      font-family: Roboto;
      font-weight: bold;
      letter-spacing: -0.42px;
      color: var(--white);
      z-index: 9999;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @media (max-width: ${cssBreakPoint.mobileMd}) {
      height: 50vw;
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
  data,
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
      {data.map((item: any, index: number) => (
        <SwiperSlide key={index}>
          <div className="img-box shadow" id={item.id}>
            <a href={item.href} target="_blank">
              <p>view more</p>
              <img src={item.url} />
            </a>
          </div>
          <div className="img-desc">
            <p>Blog</p>
            {item.content.split('\n').map((line: string, index: number) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </CustomSwiper>
  )
}

export default KnowHowSlider
