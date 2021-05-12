import React, { FC } from "react";
import styled from "styled-components";
// @ts-ignore
import LogoSVG from "../../../public/static/image/icon/lever_new_logo_w.svg";

const LogoLayout = styled.div`
  width: fit-content;
  height: auto;
  object-fit: contain;
  padding: 0 1vw;
  
  // test for
  background-color: #898989;
`
const LogoIcon = styled(LogoSVG)`
  display: block;
  width: 80px;
  height: auto;
  margin: 0 auto;
`

interface LogoProps {

}

const Logo: FC<LogoProps> = () => {
  return (
    <LogoLayout>
      <a href="#">
        <LogoIcon/>
      </a>
    </LogoLayout>
  )
}

export default Logo;