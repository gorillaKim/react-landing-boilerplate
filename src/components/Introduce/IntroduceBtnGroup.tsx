import React, { FC, ReactElement } from 'react'
import styled from "styled-components"
import {cssBreakPoint} from "../../styles/constant"
import useScrollFadeIn from "../../hooks/useScrollFadeIn";
import {IntroduceBtnGroupProps} from '../../types/introduce'

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
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
  onClickActive,
  active,
  first,
  second,
  third,
}): ReactElement => {
  const animation = useScrollFadeIn('up', 1, 0.5)
  return (
    <ButtonGroup {...animation}>
      <Button id='first' className={active['first'] && 'activeToggle'} onClick={onClickActive}>{first}</Button>
      <Button id='second' className={active['second'] && 'activeToggle'} onClick={onClickActive}>{second}</Button>
      <Button id='third' className={active['third'] && 'activeToggle'} onClick={onClickActive}>{third}</Button>
    </ButtonGroup>
  )
}
export default IntroduceBtnGroup