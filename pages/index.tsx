import styled from "styled-components"
import GlobalStyle from "../src/styles/GlobalStyle";
import BannerContainer from "../src/containers/banner/BannerContainer";
import Navbar from "../src/components/Navbar";
import {Container} from "../src/components/Styled/Layout";
import MainA from "../src/components/MainArticle/MainA";
import type { AppContext } from 'next/app'
import Introduce from "../src/components/Introduce";
import FaqContainer from "../src/containers/Faq/FaqContainer";

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
      <Container style={{backgroundColor: "orange", height: "fit-content", minHeight: '444px'}}>
        성공스토리
      </Container>
      <Introduce/>
      <Container style={{backgroundColor: "orange", height: "fit-content", minHeight: '444px'}}>
        노하우
      </Container>
      <FaqContainer/>
      <Container style={{backgroundColor: "orange", height: "fit-content", minHeight: '444px'}}>
        미션
      </Container>
      <div>
        <Container style={{backgroundColor: "gray", height: "fit-content", minHeight: '100px'}}>
          Footer
        </Container>
      </div>
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