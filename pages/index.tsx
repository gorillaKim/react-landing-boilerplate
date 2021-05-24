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
import SuccessStory from "../src/components/SuccessStory";

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
      <SuccessStory/>
      <Introduce/>
      <Container style={{backgroundColor: "orange", height: "fit-content", minHeight: '444px'}}>
        노하우
      </Container>
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