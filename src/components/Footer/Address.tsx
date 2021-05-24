import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { cssBreakPoint } from '../../styles/constant'

const Wrapper = styled.div`
  width: 500px;
  height: 66px;
  margin: 32px 0 31px;
  font-family: NotoSansKR;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.75px;
  text-align: center;
  color: var(--white);
  &.desktop {
    display: block;
  }
  &.mobile {
    display: none;
  }
  @media (max-width: ${cssBreakPoint.tablet}) {
    &.desktop {
      display: none;
    }
    &.mobile {
      display: block;
    }
  }
`
const Address = (): ReactElement => {
  return (
    <>
      <Wrapper className="desktop">
        <p>(주)매드업 / 대표이사 : 이주민, 이동호</p>
        <p>서울시 서초구 서초대로 74길 4 삼성생명서초타워 20층 / 사업자번호 : 119-87-06634</p>
        <p>T. 02.1522.1060 / F. 02.6442.7239 / E. contact@lever.me</p>
      </Wrapper>
      <Wrapper className="mobile">
        <p>(주)매드업 / 대표이사 : 이주민, 이동호</p>
        <p>서울시 서초구 서초대로 74길 4 삼성생명서초타워 20층</p>
        <p>사업자번호 : 119-87-06634</p>
        <p>T. 02.1522.1060 / F. 02.6442.7239 / E. contact@lever.me</p>
      </Wrapper>
    </>
  )
}

export default Address
