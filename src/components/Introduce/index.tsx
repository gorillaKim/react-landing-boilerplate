import React, { ReactElement } from 'react'
import styled from "styled-components"
import IntroduceTitle from './IntroduceTitle'
import IntroduceBtnGroup from './IntroduceBtnGroup'
import IntroItem1 from './IntroItem1'
import IntroItem2 from './IntroItem2'

const Container = styled.div`
  max-width: 1280px;
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
  return (
    <IntroduceSection>
      <Container>
        <IntroduceTitle />
        <IntroduceBtnGroup
          first={'디지털 마케팅 자동화'}
          second={'보고서 형태'}
          third={'레버 프로세스'}
        />
        <IntroItem1/>
        <IntroItem2/>
      </Container>
    </IntroduceSection>
  )
}

export default Introduce;
