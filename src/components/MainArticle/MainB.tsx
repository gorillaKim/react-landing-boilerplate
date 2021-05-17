import React, {FC, useEffect, useState} from 'react'
import styled from "styled-components"
import {Container} from '../Styled/Layout'
import {MainContainer} from "./Styled";

const ContentContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 510px;
  padding: 230px 0 156px 0;
  background-color: skyblue;
  z-index: 9999;
`

interface IMainA {
}

const MainB: FC<IMainA> = () => {
  return (
    <MainContainer id="main">
      <ContentContainer>
        <p>메인입니다.</p>
      </ContentContainer>
    </MainContainer>
  )
}

export default MainB