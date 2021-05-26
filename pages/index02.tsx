import React from 'react'
import styled from 'styled-components'
import GlobalStyle from '../src/styles/GlobalStyle'
import type { AppContext } from 'next/app'
import MainB from '../src/components/MainArticle/MainB'
import BannerContainer from '../src/containers/banner/BannerContainer'
import Navbar from '../src/components/Navbar'
import Introduce from '../src/components/Introduce'
import FaqContainer from '../src/containers/Faq/FaqContainer'
import Footer from '../src/components/Footer'
import SuccessStoryContainer from '../src/containers/successStory/SuccessStoryContainer'
import KnowHowContainer from '../src/containers/knowHow/KnowHowContainer'
import MissionContainer from '../src/containers/mission/MissionContainer'

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
      <MainB />
      <SuccessStoryContainer />
      <Introduce />
      <KnowHowContainer />
      <FaqContainer />
      <MissionContainer />
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
