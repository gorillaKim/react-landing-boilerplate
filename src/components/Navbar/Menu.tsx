import React, { FC } from "react";
import styled from "styled-components";

const MenuLayout = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: var(--break-tablet)) {
    flex-direction: column;
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
    animation-name: slideHeader;
    animation-fill-mode: forwards;
    animation-direction: reverse;
    background: var(--white);
    height: 100%;
  }
`

const Title = styled.ul`
  display: none;

  @media (max-width: var(--break-tablet)) {
    width: 100%;
  }
`

const TitleList = styled.li`
  @media (max-width: var(--break-tablet)) {
    padding: 35px 15px;
    color: var(--black);
  }
`

const TitleListLink = styled.a`
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
  
  @media (max-width: var(--break-tablet)) {
    font-size: 30px;
    color: var(--black);
  }
`

const MenuCenter = styled.ul`
  display: flex;
  justify-content: space-between;
  width: fit-content;
  margin: 0 auto;
  list-style: none;
  @media (max-width: var(--break-tablet)) {
    flex-direction: column;
    align-items: start;
    width: 100%;
  }
`

const CenterItem = styled.li`
  padding: 35px 25px;
  text-decoration: none;
`;

const MenuItemLink = styled.a`
  font-family: NotoSansKR;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.9px;
  text-align: left;
  color: var(--white);
  text-decoration: none;
`

const CenterItemLink = styled(MenuItemLink)`
  @media (max-width: var(--break-tablet)) {
    font-size: 30px;
    letter-spacing: -1.5px;
    text-align: left;
    color: var(--black);
  }
`

const MenuRight = styled.ul`
  display: flex;
  width: fit-content;
  text-decoration: none;

  @media (max-width: var(--break-tablet)) {
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
  }
`

const RightItem = styled.li`
  margin: 5px;
  color: var(--greyish-brown);
  
  &:first-child {
    margin-right: 16.4px;
  }
  
  &:last-child > a{
    border-radius: 25px;
    border: unset;
    cursor: pointer;
    padding: 9px 30px;
    background-color: var(--cornflower);
  }
  @media (max-width: var(--break-tablet)) {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    border-top: 1px solid var(--light-periwinkle);
  }
`

const RightItemLink =  styled(MenuItemLink)`
  
  @media (max-width: var(--break-tablet)) {
    width: 100%;
    padding: 18px 61.7px;
    border-radius: 0;
    text-align: center;
    font-size: 16px;
    letter-spacing: -0.9px;
    color: var(--black);
  }
`

interface MenuProps {

}

const Menu: FC<MenuProps> = () => {
  return (
    <MenuLayout>
      <Title>
        <TitleList>
          <TitleListLink
            href="https://biz.lever.me/login"
            className="lever-login"
          />
        </TitleList>
      </Title>
      <MenuCenter>
        <CenterItem>
          <CenterItemLink href="#success_story">성공사례</CenterItemLink>
        </CenterItem>
        <CenterItem>
          <CenterItemLink href="#success_story">레버 서비스 소개</CenterItemLink>
        </CenterItem>
        <CenterItem>
          <CenterItemLink href="#success_story">디지털 마케팅 노하우</CenterItemLink>
        </CenterItem>
        <CenterItem>
          <CenterItemLink href="#success_story">자주하는 질문</CenterItemLink>
        </CenterItem>
      </MenuCenter>
      <MenuRight>
        <RightItem>
          <RightItemLink
            href="https://biz.lever.me/login"
            className="lever-login"
          >
            로그인
          </RightItemLink>
        </RightItem>
        <RightItem>
          <RightItemLink
            href="https://biz.lever.me/signup"
            className="lever-signup"
          >
            회원가입
          </RightItemLink>
        </RightItem>
      </MenuRight>
    </MenuLayout>
  )
}

export default Menu;