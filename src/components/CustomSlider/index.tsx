import React, { FC } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { cssBreakPoint } from '../../styles/constant'

interface ICustomSlider {
  settings?: {
    dots?: boolean
    infinite?: boolean
    speed?: number
    slidesToShow?: number
    slidesToScroll?: number
    centerPadding?: string
  }
  slidesToShow?: number
  className?: string
}
const SliderLayout = styled(Slider)`
  width: 100%;
  margin: 0 auto;

  .slick-slide {
    margin-left: 20px;
  }
  .slick-list {
    max-height: 750px;
  }
  .slick-prev:before,
  .slick-next:before {
    color: var(--cornflower);
  }
  .slick-dots {
    z-index: 1;
  }
  &.mobile {
    display: none;
    max-height: 380px;
    overflow: hidden;

    @media (max-width: ${cssBreakPoint.tablet}) {
    }
    @media (max-width: ${cssBreakPoint.mobileMd}) {
      display: block;
    }
  }
  &.desktop {
    display: block;
    @media (max-width: ${cssBreakPoint.tablet}) {
    }
    @media (max-width: ${cssBreakPoint.mobileMd}) {
      display: none;
    }
  }
`

const CustomSlider: FC<ICustomSlider> = ({ children, settings, slidesToShow = 3, className }) => {
  const settingOptions = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    ...(settings || {}),
  }
  return (
    <SliderLayout {...settingOptions} className={className}>
      {children}
    </SliderLayout>
  )
}

export default CustomSlider
