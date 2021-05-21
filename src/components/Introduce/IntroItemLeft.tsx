import React, { ReactElement } from 'react'
import styled from "styled-components"
import { cssBreakPoint } from '../../styles/constant'

const ContentImg = styled.img`
  width: 85%;
  @media (max-width: ${cssBreakPoint.tablet}) {
    width: 60%;
  }
  @media (max-width: ${cssBreakPoint.mobileMd}) {
    width: 100%;
  }
`
const IntroItemLeft = (): ReactElement => {
  return(
    <div>
      <ContentImg src="./static/image/introduce/Group%2016.svg" alt="introduce automation"/>
    </div>
  )
}

export default IntroItemLeft