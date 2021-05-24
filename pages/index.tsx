import React from "react"
import styled from "styled-components"
import GlobalStyle from "../src/styles/GlobalStyle";
import {Container} from "../src/components/Styled/Layout";
import type { AppContext } from 'next/app'
import MainA from "../src/components/MainArticle/MainA";
import BannerContainer from "../src/containers/banner/BannerContainer";
import Navbar from "../src/components/Navbar";
import Introduce from "../src/components/Introduce";
import FaqContainer from "../src/containers/Faq/FaqContainer";
import Footer from "../src/components/Footer";
import KnowHowContainer from "../src/containers/knowHow/KnowHowContainer";
import SuccessStoryContainer from "../src/containers/successStory/SuccessStoryContainer";

const PageContainer = styled.div`
  position: relative;
`
interface IIndex {
}

const Index = (props:IIndex) => {
  return (
    <PageContainer>
      <GlobalStyle />
      <BannerContainer/>
      <Navbar/>
      <MainA />
      <SuccessStoryContainer/>
      <Introduce/>
      <KnowHowContainer/>
      <FaqContainer/>
      <Container style={{backgroundColor: "orange", height: "fit-content", minHeight: '444px'}}>
        미션
      </Container>
      <Footer/>
    </PageContainer>
  );
};

export const getStaticProps = async (context:AppContext) => {
  return {
    props: {
    }
  }
}
export default Index;