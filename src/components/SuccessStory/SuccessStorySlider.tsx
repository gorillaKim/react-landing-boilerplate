import React, {FC} from 'react'
import styled from "styled-components"
import CustomSlider from "../CustomSlider";
import {cssBreakPoint} from "../../styles/constant";

const SliderItem = styled.div`
  height: fit-content;
  display: inline-block;
  overflow: hidden;
  border-radius: 15px;
  position: relative;
  box-shadow: 3px 3px 10px #888888;
  margin-right: 5%;
  margin-top: 10px;
  background: white;

  @media (max-width: ${cssBreakPoint.tablet}) {
    width: 44vw;
    margin-left: 40px;
    margin-right: 0px;
  }

  @media (max-width: ${cssBreakPoint.mobileMd}) {
    width: 80vw;
  }
  img {
    overflow: hidden;
    @media (max-width: ${cssBreakPoint.tablet}) {
      height: auto;
    }
  }
  .desktop {
    display: block;
    @media (max-width: ${cssBreakPoint.tablet}) {
      display: none;
    }
  }
  .mobile {
    display: none;
    @media (max-width: ${cssBreakPoint.tablet}) {
      display: block;
    }
  }
  .content {
    width: 100%;
    overflow: hidden;
    @media (max-width: ${cssBreakPoint.tablet}) {
      height: 274px;
    }
    @media (max-width: ${cssBreakPoint.mobileMd}) {
      height: 214px;
    }
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
      @media (max-width: ${cssBreakPoint.mobileMd}) {
        width: auto;
      }
      img {
        width: auto;
        height: 29px;
        overflow: hidden;
        @media (max-width: ${cssBreakPoint.mobileMd}) {
          height: 18px;
        }
      }
    }
    &.bottom {
      display: flex;
      flex-direction: row;
      position: absolute;
      justify-content: center;
      align-items: center;
      width: fit-content;
      bottom: 0;
      right: 0;

      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      
      @media (max-width: ${cssBreakPoint.mobileMd}) {
        width: fit-content;
      }
      p {        
        text-align: left;

        &:nth-child(1) {
          margin-right: 15px;
          font-size: 17px;
          font-family: NotoSansKR;
          letter-spacing: -0.85px;
          color: var(--greyish-brown);
          
          @media (max-width: ${cssBreakPoint.mobileMd}) {
            font-size: 14px;
            margin-right: unset;
          }
        }
        &:nth-child(2) {
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
        font-size: 38px;
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
  margin: 0px 15px 0px 10px;
  padding: 1px 0 0 2px;
  object-fit: contain;
  overflow: hidden;
`

interface ISuccessStorySlider {
  slidesToShow: number,
  className: string,
  items: any
}

const SuccessStorySlider: FC<ISuccessStorySlider> = ({items, slidesToShow, className}) => {
  return (
    <CustomSlider className={className} slidesToShow={slidesToShow}>
      {
        items.map((item: any)=>{
          return (
            <SliderItem style={{width: '30%'}}>
              <div className={"content"}>
                <img src={item.mainImg.desktop} alt="메인이미지_컴퓨터버전" className={"desktop"}/>
                <img src={item.mainImg.mobile} alt="메인이미지_모바일버전" className={"mobile"}/>
              </div>
              <div className={"bottom"}>
                <div className={"title top"}>
                  <img src={item.titleImg} alt="제목이미지"/>
                </div>
                <div className={"title bottom"}>
                  <p>{item.text[0]}</p>
                  <p>{item.text[1]}</p>
                  <ArrowIcon src="./static/image/icon/arrow-sm.png" />
                  <b>{item.text[2]}</b>
                </div>
              </div>
            </SliderItem>
          )
        })
      }
    </CustomSlider>
  )
}

export default SuccessStorySlider