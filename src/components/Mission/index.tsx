import React, { FC } from 'react'
import styled from 'styled-components'
import { Container, Shadow } from 'components/Styled/Layout'
import { cssBreakPoint } from '../../styles/constant'

const Section = styled.section`
  position: relative;
  background: url(${'./static/image/mission/bg1.jpg'}) no-repeat;
  background-size: cover;
`

const MissionContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding-top: 10rem;
  height: 900px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;

  @media (max-width: ${cssBreakPoint.mobileMd}) {
    height: 935px;
    flex-direction: column;
    justify-content: center;
    padding-top: 0;
  }
`

interface IMission {}

const Mission: FC<IMission> = ({ children }) => {
  return (
    <Section id={'mission'}>
      <Shadow>
        <MissionContainer>{children}</MissionContainer>
      </Shadow>
    </Section>
  )
}

export default Mission
