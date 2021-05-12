import GlobalStyle from "../src/styles/GlobalStyle";
import BannerContainer from "../src/containers/banner/BannerContainer";
import Navbar from "../src/components/Navbar";

function Index (props) {
  const { message } = props;
  return (
    <div>
      <GlobalStyle />
      <BannerContainer/>
      <Navbar/>
      nav
      section
      footer
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