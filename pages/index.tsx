import styled from "styled-components"
import GlobalStyle from "../src/styles/GlobalStyle";
import BannerContainer from "../src/containers/banner/BannerContainer";
import Navbar from "../src/components/Navbar";

const PageContainer = styled.div`
  background-color: gray; 
  position: relative;
  height: 200vh;
`

function Index (props) {
  const { message } = props;
  return (
    <PageContainer>
      <GlobalStyle />
      <BannerContainer/>
      <Navbar/>
      nav
      section
      footer
      Welcome to {message}
    </PageContainer>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      message: `this is index page!`
    }
  };
};
export default Index;