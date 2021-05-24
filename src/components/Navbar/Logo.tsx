import React, { FC } from "react"
import styled from "styled-components"
import {cssBreakPoint} from "../../styles/constant"
import WhiteLogoSVG from '../../../public/static/image/icon/lever_new_logo_w.svg'
import BlackLogoSVG from '../../../public/static/image/icon/lever_new_logo.svg'
import {LogoProps} from "../../types/navbar";

const LogoLayout = styled.div`
  width: fit-content;
  height: auto;
  object-fit: contain;
  padding: 0 1vw;

  @media (max-width: ${cssBreakPoint.tablet}) {
    z-index: 9999;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 95%;
    padding: 22.4px;
  }
`
const WhiteLogoIcon = styled(WhiteLogoSVG)`
  display: block;
  width: 80px;
  height: auto;
  margin: 0 auto;
  
  @media (max-width: ${cssBreakPoint.tablet}) {
    margin: 0 0 0 25px;
  }
`
const BlackLogoIcon = styled(BlackLogoSVG)`
  display: block;
  width: 80px;
  height: auto;
  margin: 0 auto;
  
  @media (max-width: ${cssBreakPoint.tablet}) {
    margin: 0 0 0 25px;
  }
`
const Logo: FC<LogoProps> = ({ isActive= false, clickToMove }) => {
  return (
    <LogoLayout>
      <a onClick={clickToMove}>
        {isActive ? <BlackLogoIcon/> : <WhiteLogoIcon/>}
      </a>
    </LogoLayout>
  )
}

export default Logo;