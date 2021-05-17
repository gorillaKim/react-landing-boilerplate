import styled from "styled-components"
import GlobalStyle from "../src/styles/GlobalStyle"
import BannerContainer from "../src/containers/banner/BannerContainer"
import Navbar from "../src/components/Navbar"
import {Container} from "../src/components/Styled/Layout"
import MainB from "../src/components/MainArticle/MainB"
import type { AppContext } from 'next/app'

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
      <MainB />
      <Container style={{backgroundColor: "orange", height: "fit-content", minHeight: '444px'}}>
        성공스토리
      </Container>
      <Container style={{backgroundColor: "skyblue", height: "fit-content", minHeight: '444px'}}>
        소개
      </Container>
      <Container style={{backgroundColor: "orange", height: "fit-content", minHeight: '444px'}}>
        노하우
      </Container>
      <Container style={{backgroundColor: "skyblue", height: "fit-content", minHeight: '444px'}}>
        FAQ
      </Container>
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