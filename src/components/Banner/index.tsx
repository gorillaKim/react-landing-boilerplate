import React, { FC } from 'react'
import styled from 'styled-components'
import { Container } from 'components/Styled/Layout'

const BannerSection = styled.section`
  font-family: NotoSansKR;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: -0.9px;
  background-color: var(--cornflower);
  color: var(--white);
`

const BannerContent = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: fit-content;
  min-height: 41px;
  margin: 0 auto;
  padding: 5px 0;
`
interface BannerProps {
  children: JSX.Element[] | JSX.Element
}
const Banner: FC<BannerProps> = ({ children }) => {
  return (
    <BannerSection>
      <Container>
        <BannerContent>{children}</BannerContent>
      </Container>
    </BannerSection>
  )
}

export default Banner
