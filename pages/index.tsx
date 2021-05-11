import GlobalStyle from "../src/styles/GlobalStyle";
import BannerContainer from "../src/containers/banner/BannerContainer";

function Index (props) {
  const { message } = props;
  return (
    <div>
      <GlobalStyle />
      <BannerContainer>
        <p>배너입니다.</p>
      </BannerContainer>
      Welcome to {message}
    </div>
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