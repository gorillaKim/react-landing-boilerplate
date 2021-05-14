import React, {FC, ReactElement, useState} from 'react'
import styled from "styled-components"
import { IntroduceBtnGroupProps } from '../../types/IntroduceType'
import {cssBreakPoint} from "../../styles/constant";
import { swipeUp } from '../Styled/Animation'

const ButtonGroup = styled.div`
  opacity: 0;
  display: flex;
  justify-content: center;
  text-align: center;
  animation-name: ${swipeUp};
  animation-delay: 0.5s;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  @media (max-width: ${cssBreakPoint.mobileMd}) {
    flex-direction: column;
    width: 85%;
    margin: 3rem auto 0;
  }
`
const Button = styled.div`
  border: 1px solid var(--light-periwinkle);
  border-radius: 25px;
  cursor: pointer;
  width: 150px;
  padding: 13px 35px 13px 35px;
  margin: 77px 28px 95px 3px;
  flex-grow: 0;
  font-family: NotoSansKR;
  font-size: 18px;
  font-weight: normal;
  letter-spacing: -0.9px;
  color: var(--greyish-brown);
  &.activeToggle {
    background-color: var(--cornflower);
    color: var(--white);
  }
  @media (max-width: ${cssBreakPoint.mobileMd}) {
    margin: 0.3rem 0;
    width: auto;
  }
`
const IntroduceBtnGroup: FC<IntroduceBtnGroupProps> = ({
  active,
  setActive,
  first,
  second,
  third
}): ReactElement => {
  const handleClick = (event: React.MouseEvent): void => {
    const clicked = (event.target as HTMLElement);
    if(clicked.innerText === `${first}`) {
      setActive({
        ...active,
        'first': true,
        'second': false,
        'third': false,
      })
    }
    else if(clicked.innerText === `${second}`) {
      setActive({
        ...active,
        'first': false,
        'second': true,
        'third': false,
      })
    }
    else {
      setActive({
        ...active,
        'first': false,
        'second': false,
        'third': true,
      })
    }
  }
  return (
    <ButtonGroup>
      <Button className={active['first']? 'activeToggle': undefined} onClick={handleClick}>{first}</Button>
      <Button className={active['second']? 'activeToggle': undefined} onClick={handleClick}>{second}</Button>
      <Button className={active['third']? 'activeToggle': undefined} onClick={handleClick}>{third}</Button>
    </ButtonGroup>
  )
}
export default IntroduceBtnGroup