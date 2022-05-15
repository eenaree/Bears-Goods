import { css } from '@emotion/react';

const reset = css`
  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  address,
  em,
  img,
  small,
  strong,
  b,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  em,
  address {
    font-style: normal;
  }

  img {
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
    height: auto;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  small {
    font-size: 80%;
  }

  fieldset {
    border: none;
  }

  legend {
    display: block;
    position: absolute;
    left: 0;
    top: -9999em;
    overflow: hidden;
  }
`;

export default reset;
