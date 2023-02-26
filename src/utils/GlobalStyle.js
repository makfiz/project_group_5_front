import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.bgc};
  }
`;

export default GlobalStyle;
