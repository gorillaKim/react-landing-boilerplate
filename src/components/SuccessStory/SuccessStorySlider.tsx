import React, { FC } from 'react'
import styled from 'styled-components'
import { cssBreakPoint } from 'styles/constant'
import SwiperCore, { Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const CustomSwiper = styled(Swiper)`
  padding: 1rem 0;
  .swiper-wrapper {
    display: inline-flex;
    height: fit-content;
  }
  &.mobile {
    display: none;
  }
  &.desktop {
    display: block;
  }
  @media (max-width: ${cssBreakPoint.tablet}) {
    &.mobile {
      display: block;

      &.swiper-container {
        overflow: unset;
        width: 80%;
      }
    }
    &.desktop {
      display: none;
    }
  }
`
const SliderItem = styled.div`
  height: fit-content;
  overflow: hidden;
  border-radius: 15px;
  position: relative;
  box-shadow: 3px 3px 10px #888888;
  margin-top: 10px;
  background: white;

  @media (max-width: ${cssBreakPoint.tablet}) {
    margin: 0 auto;
    img {
      height: auto;
    }
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }
    .content {
      height: 274px;
    }
  }

  @media (max-width: ${cssBreakPoint.mobileMd}) {
    .content {
      height: fit-content;
    }
    .title {
      .top {
        width: auto;
        img {
          height: 18px;
        }
      }
    }
    &.bottom {
      width: fit-content;
    }
  }
  img {
    overflow: hidden;
  }
  .desktop {
    display: block;
  }
  .mobile {
    display: none;
  }
  .content {
    width: 100%;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .bottom {
    width: auto;
    height: 147px;
  }
  .title {
    font-stretch: normal;
    font-style: normal;
    line-height: normal;

    &.top {
      width: 199px;
      flex-grow: 0;
      margin: 0 37px 30px 0;
      padding: 15px 6px 6px 7px;
      img {
        width: auto;
        height: 29px;
        overflow: hidden;
      }
    }
    &.bottom {
      display: flex;
      flex-direction: row;
      position: absolute;
      justify-content: space-around;
      align-items: center;
      width: fit-content;
      bottom: 0;
      right: 0;
      margin: 0 1rem;

      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;

      p {
        text-align: left;

        :nth-child(1) {
          margin-right: 15px;
          font-size: 15px;
          font-family: NotoSansKR;
          letter-spacing: -0.85px;
          color: var(--greyish-brown);

          @media (max-width: ${cssBreakPoint.mobileMd}) {
            font-size: 14px;
          }
        }
        :nth-child(2) {
          font-size: 16px;
          font-family: NotoSansKR;
          letter-spacing: -0.8px;
          color: var(--greyish-brown);

          @media (max-width: ${cssBreakPoint.mobileMd}) {
            font-size: 14px;
          }
        }
      }
      b {
        flex-grow: 0;
        font-family: NotoSansKR;
        font-size: 35px;
        font-weight: bold;
        letter-spacing: -1.9px;
        color: var(--black);

        @media (max-width: ${cssBreakPoint.mobileMd}) {
          font-size: 23px;
          text-align: left;
        }
      }
    }
  }
`
const ArrowIcon = styled.img`
  width: 17px;
  height: 15px;
  margin: 0 8px;
  padding: 1px 0 0 2px;
  object-fit: contain;
  overflow: hidden;
`

interface ISuccessStorySlider {
  slidesToShow: number
  className: string
  items: any
}

SwiperCore.use([Mousewheel])

const SuccessStorySlider: FC<ISuccessStorySlider> = ({ items, slidesToShow, className }) => {
  return (
    <CustomSwiper className={className} slidesPerView={slidesToShow} mousewheel spaceBetween={30}>
      {items.map((item: any, index: number) => {
        return (
          <SwiperSlide key={index}>
            <SliderItem>
              <div className={'content'}>
                <img src={item.mainImg.desktop} alt="메인이미지_컴퓨터버전" className={'desktop'} />
                <img src={item.mainImg.mobile} alt="메인이미지_모바일버전" className={'mobile'} />
              </div>
              <div className={'bottom'}>
                <div className={'title top'}>
                  <img src={item.titleImg} alt="제목이미지" />
                </div>
                <div className={'title bottom'}>
                  <p>{item.text[0]}</p>
                  <p>{item.text[1]}</p>
                  <ArrowIcon src="./static/image/icon/arrow-sm.png" />
                  <b>{item.text[2]}</b>
                </div>
              </div>
            </SliderItem>
          </SwiperSlide>
        )
      })}
    </CustomSwiper>
  )
}

export default SuccessStorySlider
