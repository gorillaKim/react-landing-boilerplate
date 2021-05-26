import React from 'react'
import styled from 'styled-components'
import GlobalStyle from 'styles/GlobalStyle'
import type { AppContext } from 'next/app'
import MainA from 'components/MainArticle/MainA'
import BannerContainer from 'containers/banner/BannerContainer'
import Navbar from 'components/Navbar'
import Introduce from 'components/Introduce'
import FaqContainer from 'containers/Faq/FaqContainer'
import Footer from 'components/Footer'
import KnowHowContainer from 'containers/knowHow/KnowHowContainer'
import SuccessStoryContainer from 'containers/successStory/SuccessStoryContainer'
import Mission from '../src/components/Mission'

const PageContainer = styled.div`
  position: relative;
`
interface IIndex {}

const Index = (props: IIndex) => {
  return (
    <PageContainer>
      <GlobalStyle />
      <BannerContainer />
      <Navbar />
      <MainA />
      <SuccessStoryContainer />
      <Introduce />
      <KnowHowContainer />
      <FaqContainer />
      <Mission />
      <Footer />
    </PageContainer>
  )
}

export const getStaticProps = async (context: AppContext) => {
  return {
    props: {},
  }
}
export default Index
