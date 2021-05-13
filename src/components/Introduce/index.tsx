import React, { ReactElement, useState } from 'react'
import styled from "styled-components"
import {Container} from '../Styled/Layout';
import IntroduceTitle from './IntroduceTitle'
import IntroduceBtnGroup from './IntroduceBtnGroup'
import IntroItem1 from './IntroItem1'
import IntroItem2 from './IntroItem2'
import IntroItem3 from './IntroItem3'
import { activeStateProps } from './IntroduceType'

const IntroduceContainer = styled(Container)`
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
  const [active,setActive] = useState<activeStateProps>({
    'first': true,
    'second': false,
    'third': false,
  })
  return (
    <IntroduceSection>
      <IntroduceContainer >
        <IntroduceTitle />
        <IntroduceBtnGroup
          active={active}
          setActive={setActive}
          first={'디지털 마케팅 자동화'}
          second={'보고서 형태'}
          third={'레버 프로세스'}
        />
        <IntroItem1 active={active}/>
        <IntroItem2 active={active} />
        <IntroItem3 active={active}/>
      </IntroduceContainer>
    </IntroduceSection>
  )
}

export default Introduce;
