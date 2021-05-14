import React from 'react'
import styled from "styled-components"
import {cssBreakPoint} from "../../styles/constant";

const MainContainer = styled.section`
  height: fit-content; 
  min-height: 444px; 
  margin-top: -101px;
  background-image: url(${'../../../static/image/main/main_BG2.jpg'});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;


  @media (max-width: ${cssBreakPoint.tablet}) {
    margin-top: -73px;
  }
  &::before {
    height: 100%;
    width: 100%;
    top: 0px;
    position: absolute;
    content: "";
    opacity: 0.5;
    background-color: #0f0f14;
    z-index: 0;
  }
`

export default MainContainer