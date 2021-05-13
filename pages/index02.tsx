import styled from "styled-components"
import GlobalStyle from "../src/styles/GlobalStyle";
import BannerContainer from "../src/containers/banner/BannerContainer";
import Navbar from "../src/components/Navbar";
import {Container} from "../src/components/Styled/Layout";
import type { AppContext } from 'next/app'

const PageContainer = styled.div`
  background-color: gray; 
  position: relative;
  height: 200vh;
`
interface IIndex {
}

const Index = (props:IIndex) => {
  return (
    <PageContainer>
      <GlobalStyle />
      <BannerContainer/>
      <Navbar/>
      <Container>
        여기에 컴포넌트 순차적으로 넣어주시면 됩니다.<br/>
        nav<br/>
        section<br/>
        footer<br/>
      </Container>
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