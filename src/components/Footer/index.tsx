import React, { ReactElement  } from 'react'
import styled from "styled-components"
import { Container } from '../Styled/Layout';
import { cssBreakPoint } from '../../styles/constant'
import SocialBox from "./SocialBox";
import Address from "./Address";

const FooterSection = styled.footer`
  background-color: #0f0b11;
`
const FooterContainer = styled(Container)`
  height: 308px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: ${cssBreakPoint.mobileMd}) {
    height: 464px;
    width: 99vw;
  }
`
const Terms = styled.div`
  width: 485px;
  a {
    text-decoration: none;
    color: var(--white);
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    list-style: none;
  }
  li {
    margin-right: 34.9px;
    font-family: NotoSansKR;
    font-size: 15px;
    letter-spacing: -0.75px;
    text-align: center;
    color: var(--white);
    :last-child {
      margin-right: 0;
    }
  }
  @media (max-width: ${cssBreakPoint.mobileMd}) {
    margin-bottom: 41px;
    ul {
      flex-direction: column;
    }
    li {
      margin-right: 0;
      margin-top: 10px;
    }
  }
`
const CopyRight = styled.div`
  width: 290px;
  height: 22px;
  margin: 17px 99.3px 0 100.7px;
  opacity: 0.5;
  font-family: NotoSansKR;
  font-size: 15px;
  letter-spacing: -0.75px;
  text-align: center;
  color: var(--white);
`
const Footer = ():ReactElement => {
  return(
    <FooterSection>
      <FooterContainer>
        <SocialBox />
        <Address />
        <Terms>
          <ul>
            <li><a href="https://biz.lever.me/terms/use" target="_blank">이용약관</a></li>
            <li><a href="https://biz.lever.me/terms/privacy" target="_blank">개인정보처리방침</a></li>
            <li><a href="https://biz.lever.me/terms/credit" target="_blank">취소 및 환불정책</a></li>
          </ul>
        </Terms>
        <CopyRight>
          <p>Copyrights © Madup 2021 All Rights Reserved</p>
        </CopyRight>
      </FooterContainer>
    </FooterSection>
  )
}

export default Footer