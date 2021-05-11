import React, { FC } from 'react'
import {Banner, BannerContent} from '../../components/Styled/Banner'
import {Container} from '../../components/Styled/Layout'

interface BannerContainerProps {
  children: JSX.Element[] | JSX.Element;
}
// : FC<IconProps>
export default function BannerContainer({children}:BannerContainerProps) {
  return (
    <Banner>
      <Container>
        <BannerContent>
          {children}
        </BannerContent>
      </Container>
    </Banner>
  )
}