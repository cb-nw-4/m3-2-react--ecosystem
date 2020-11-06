import { createGlobalStyle } from 'styled-components';

const GlobalStyles=createGlobalStyle`
    *{
        font-family:Verdana, Geneva, Tahoma, sans-serif;
    }

    p{
        font-size:14px;
        line-height:2.0;
    }
    h1{
        font-weight:1500;
    }
    img{
        border-radius:10px;
    }
`;

export default GlobalStyles;