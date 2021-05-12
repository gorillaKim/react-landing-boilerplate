import GlobalStyle from "../src/styles/GlobalStyle";
import Banner from "../src/components/Banner";

function Index (props) {
  const { message } = props;
  return (
    <div>
      <GlobalStyle />
      <Banner>
        <p>배너입니다.</p>
      </Banner>
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