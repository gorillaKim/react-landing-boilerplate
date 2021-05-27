import React, { FC } from 'react'
import styled from 'styled-components'
import { cssBreakPoint } from 'styles/constant'
import { MenuProps } from 'types/navbar'
import { MenuListA, MenuListB } from './MenuList'

const MenuLayout = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: ${cssBreakPoint.tablet}) {
    display: none;
    height: 100%;

    &.active {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &.deactive {
      height: 100%;
    }
  }
`

const Title = styled.ul`
  display: none;

  @media (${cssBreakPoint.tablet}) {
    width: 100%;
  }
`

const TitleList = styled.li`
  @media (max-width: ${cssBreakPoint.tablet}) {
    padding: 35px 15px;
    color: var(--black);
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
`

const TitleListLink = styled(ItemLink)`
  @media (max-width: ${cssBreakPoint.tablet}) {
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
  @media (max-width: ${cssBreakPoint.tablet}) {
    flex-direction: column;
    align-items: start;
    width: 100%;
  }
`

const MenuRight = styled.ul`
  display: flex;
  width: fit-content;
  text-decoration: none;

  @media (max-width: ${cssBreakPoint.tablet}) {
    width: 100%;
    height: fit-content;
    justify-content: center;
    align-items: center;
    bottom: 0;
  }
`

const RightItem = styled.li`
  margin: 5px;
  color: var(--greyish-brown);

  :first-child {
    margin-right: 16.4px;
  }

  :last-child > a {
    border-radius: 25px;
    border: unset;
    cursor: pointer;
    padding: 9px 30px;
    background-color: var(--cornflower);
  }
  @media (max-width: ${cssBreakPoint.tablet}) {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    border-top: 1px solid var(--light-periwinkle);

    &.wide {
      width: 100%;
    }
    :first-child {
      margin-right: 0;
      border-right: 1px solid var(--light-periwinkle);
      background-color: var(--white);
    }
    :last-child > a {
      border-radius: 0px;
      padding: 18px 61.7px;
      color: var(--white);
    }
  }
`

const RightItemLink = styled(ItemLink)`
  @media (max-width: ${cssBreakPoint.tablet}) {
    width: 100%;
    padding: 18px 61.7px;
    border-radius: 0;
    text-align: center;
    font-size: 16px;
    letter-spacing: -0.9px;
    color: var(--black);
  }
`

const Menu: FC<MenuProps> = ({ isActive = false, clickToMove, mode }) => {
  return (
    <MenuLayout className={isActive ? 'active' : 'deactive'}>
      <Title>
        <TitleList>
          <TitleListLink href="https://biz.lever.me/login" className="lever-login" />
        </TitleList>
      </Title>
      <MenuCenter>
        {mode === 'A' ? (
          <MenuListA clickToMove={clickToMove} />
        ) : (
          <MenuListB clickToMove={clickToMove} />
        )}
      </MenuCenter>
      <MenuRight>
        {mode === 'A' ? (
          <>
            <RightItem>
              <RightItemLink href="https://biz.lever.me/login" className="lever-login">
                로그인
              </RightItemLink>
            </RightItem>
            <RightItem>
              <RightItemLink
                href="https://biz.lever.me/signup"
                className="lever-signup color-white"
              >
                회원가입
              </RightItemLink>
            </RightItem>
          </>
        ) : (
          <RightItem className="wide">
            <RightItemLink href="https://biz.lever.me/login" className="lever-login color-white">
              로그인
            </RightItemLink>
          </RightItem>
        )}
      </MenuRight>
    </MenuLayout>
  )
}

export default Menu
