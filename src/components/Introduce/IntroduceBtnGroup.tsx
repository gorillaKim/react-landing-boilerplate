import React, {FC, ReactElement, useState} from 'react'
import styled from "styled-components"
import { IntroduceBtnGroupProps } from './IntroduceType'

const ButtonGroup = styled.div`
  //opacity: 0;
  display: flex;
  justify-content: center;
  text-align: center;
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
`
const activeToogle = {
  backgroundColor: '#5c6aff',
  color: 'white',
}
const IntroduceBtnGroup: FC<IntroduceBtnGroupProps> = ({
  active,
  setActive,
  first,
  second,
  third
}): ReactElement => {
  const handleClick = (): void => {
    const clicked = (event.target as HTMLElement);
    if(clicked.innerText === '디지털 마케팅 자동화') {
      setActive({
        ...active,
        'first': true,
        'second': false,
        'third': false,
      })
    }
    else if(clicked.innerText === '보고서 형태') {
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
      <Button style={active['first']? activeToogle: null} onClick={handleClick}>{first}</Button>
      <Button style={active['second']? activeToogle: null} onClick={handleClick}>{second}</Button>
      <Button style={active['third']? activeToogle: null} onClick={handleClick}>{third}</Button>
    </ButtonGroup>
  )
}
export default IntroduceBtnGroup