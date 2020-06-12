import { css } from "styled-components";

export const fontCssGlobal = css`
  @font-face {
    font-family: "Pt-Sans";
    src: url("./static/assets/fonts/PT-Sans/PTSans-Regular.ttf")
      format("truetype");
  }

  /* @font-face {
    font-family: 'Pt-Sans';
    src : url('./static/assets/fonts/Pt-Sans/PTSans-Bold.ttf') format('truetype');
    font-weight: bold;
  } */

  body {
    font-family: PT-Sans, Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
  }
`;
