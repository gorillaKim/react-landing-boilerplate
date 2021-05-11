import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @charset "UTF-8";
  @font-face {
    font-family: "NotoSansKR";
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2)
    format("woff2"),
    url(https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff)
    format("woff"),
    url(https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf)
    format("opentype");
    font-display: swap;
  }
  @font-face {
    font-family: "NotoSansKR-bold";
    font-style: normal;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff2)
    format("woff2"),
    url(https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff)
    format("woff"),
    url(https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.otf)
    format("opentype");
    font-display: swap;
  }
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1MmgVxFIzIXKMnyrYk.woff2)
    format("woff2");
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
    font-display: swap;
  }
  @font-face {
    font-family: "Roboto-bold";
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1MmgVxFIzIXKMnyrYk.woff2)
    format("woff2");
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
    font-display: swap;
  }
  * {
    font-family: "Noto Sans KR, Roboto";
    box-sizing: border-box;
  }
  :root {
    --cornflower: #5c6aff;
    --black: #1a1a1a;
    --white: #ffffff;
    --greyish-brown: #3e3e3e;
    --white: #d5d5d5;
    --pale-lilac: #f7f7ff;
    --light-periwinkle: #cdd1ff;
    --white: #f5f5f5;
    --warm-grey: #898989;
  }
`;

export default GlobalStyle;