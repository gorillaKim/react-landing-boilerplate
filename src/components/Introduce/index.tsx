import React, { ReactElement, useState } from 'react'
import styled from "styled-components"
import IntroduceTitle from './IntroduceTitle'
import IntroduceBtnGroup from './IntroduceBtnGroup'
import IntroItem1 from './IntroItem1'
import IntroItem2 from './IntroItem2'
import IntroItem3 from './IntroItem3'
import { activeStateProps } from '../../types/introduce'

const IntroduceContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 8rem;
  padding-bottom: 6rem;
  text-align: center;
  min-height: 900px;
  line-height: 1.3;
`
const IntroduceSection = styled.div`
  font-family: NotoSansKR;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
`
const Introduce = (): ReactElement => {
  const initialOptions = {
    'first': true,
    'second': false,
    'third': false,
  }
  const [options,setOptions] = useState<activeStateProps>(initialOptions)

  const onClickActive = (e: React.MouseEvent) =>  {
    const clicked = e.target as HTMLElement
    setOptions({
      ...initialOptions,
      ...(clicked.id !=="first" && {first: false}),
      [clicked.id]: true
    })
  }
  return (
    <IntroduceSection id={"introduce"}>
      <IntroduceContainer>
        <IntroduceTitle/>
        <IntroduceBtnGroup
          onClickActive={onClickActive}
          active={options}
          first={'디지털 마케팅 자동화'}
          second={'보고서 형태'}
          third={'레버 프로세스'}
        />
        <IntroItem1 active={options} />
        <IntroItem2 active={options} />
        <IntroItem3 active={options}/>
      </IntroduceContainer>
    </IntroduceSection>
  )
}

export default Introduce;
