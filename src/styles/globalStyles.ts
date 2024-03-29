import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    html {
        margin: 0;
        padding: 0;
    }
    body{
        -webkit-font-smoothing: antialiased;
        background-color: #333333;
        min-width: 320px;
    }
    body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    }
    h1,h2,h3,h4,h5,h6, strong{
    font-weight: 500;
    }
    button{
        cursor: pointer;
    }
`;

export default GlobalStyles;