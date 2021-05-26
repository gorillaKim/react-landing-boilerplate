import React from 'react'
import styled from 'styled-components'
import { cssBreakPoint } from '../../styles/constant'

const CenterItem = styled.li`
  padding: 35px 25px;
  text-decoration: none;
  a:hover {
    color: var(--light-periwinkle) !important;
  }
`
const ItemLink = styled.a`
  font-family: NotoSansKR;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.9px;
  text-align: left;
  text-decoration: none;
  color: var(--white);

  &.color-black {
    color: var(--black);
  }
`
const CenterItemLink = styled(ItemLink)`
  &.sticky li a:hover {
  }
  @media (max-width: ${cssBreakPoint.tablet}) {
    font-size: 30px;
    letter-spacing: -1.5px;
    text-align: left;
    color: var(--black);
  }
`

interface IMenuList {
  clickToMove: (e: React.MouseEvent) => void
}
const MenuListA = (props: IMenuList) => {
  const { clickToMove } = props
  return (
    <>
      <CenterItem>
        <CenterItemLink data-nav="success_story" onClick={clickToMove}>
          성공사례
        </CenterItemLink>
      </CenterItem>
      <CenterItem>
        <CenterItemLink data-nav="introduce" onClick={clickToMove}>
          레버 서비스 소개
        </CenterItemLink>
      </CenterItem>
      <CenterItem>
        <CenterItemLink data-nav="know_how" onClick={clickToMove}>
          디지털 마케팅 노하우
        </CenterItemLink>
      </CenterItem>
      <CenterItem>
        <CenterItemLink data-nav="faq" onClick={clickToMove}>
          자주하는 질문
        </CenterItemLink>
      </CenterItem>
    </>
  )
}
const MenuListB = (props: IMenuList) => {
  const { clickToMove } = props
  return (
    <>
      <CenterItem>
        <CenterItemLink data-nav="main" onClick={clickToMove}>
          문의하기
        </CenterItemLink>
      </CenterItem>
      <CenterItem>
        <CenterItemLink data-nav="success_story" onClick={clickToMove}>
          성공사례
        </CenterItemLink>
      </CenterItem>
      <CenterItem>
        <CenterItemLink data-nav="introduce" onClick={clickToMove}>
          레버 서비스 소개
        </CenterItemLink>
      </CenterItem>
      <CenterItem>
        <CenterItemLink data-nav="know_how" className={'color-black'} onClick={clickToMove}>
          디지털 마케팅 노하우
        </CenterItemLink>
      </CenterItem>
      <CenterItem>
        <CenterItemLink data-nav="faq" className={'color-black'} onClick={clickToMove}>
          자주하는 질문
        </CenterItemLink>
      </CenterItem>
    </>
  )
}

export { MenuListA, MenuListB }
