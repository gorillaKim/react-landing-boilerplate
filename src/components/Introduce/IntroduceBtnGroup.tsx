import React, { FC, ReactElement } from 'react'
import styled from "styled-components"

interface IntroduceBtnGroupProps {
  first: string,
  second: string,
  third: string,
}
const ButtonGroup = styled.div`
  //opacity: 0;
  display: flex;
  justify-content: center;
`
const Button = styled.div`
  border: 1px solid var(--light-periwinkle);
  border-radius: 25px;
  cursor: pointer;
  width: 150px;
  padding: 15px 35px 15px 35px;
  margin: 77px 28px 95px 3px;
  flex-grow: 0;
  font-family: NotoSansKR;
  font-size: 18px;
  font-weight: normal;
  letter-spacing: -0.9px;
  color: var(--greyish-brown);
`
const IntroduceBtnGroup: FC<IntroduceBtnGroupProps> = ({
  first,
  second,
  third
}): ReactElement => {
  return (
    <ButtonGroup>
      <Button>{first}</Button>
      <Button>{second}</Button>
      <Button>{third}</Button>
    </ButtonGroup>
  )
}
export default IntroduceBtnGroup