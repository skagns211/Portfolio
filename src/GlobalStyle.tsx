import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    /* line-height: 29px; */
    overflow-x: hidden;
    color: #202020;
    min-height: 100%;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

export default GlobalStyle;
