import { css } from 'styled-components';

export default css`
  /* stylelint-disable */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section, main {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /* stylelint-enable */

  html {
    box-sizing: border-box;
    width: 100%;
    min-height: 100%;
  }


  /* *:before,
  *:after {
   box-sizing: inherit;
  } */

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box !important;
    -webkit-box-sizing: border-box !important;
    -moz-box-sizing: border-box !important;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  button {
    background: none;
    border: none;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    padding: 0;
    display: inline-block;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;