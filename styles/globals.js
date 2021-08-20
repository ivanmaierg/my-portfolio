import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
${normalize};
    *{
        box-sizing: border-box;
        margin:0;
    }
    html{
        font-size: 62.5%;
        scroll-behavior: smooth;
    }
    body{
        font-family:${props => props.theme.fonts.main};
        font-size: 1.6rem;
        background:url('/wave-haikei.svg');
        background-position-y:-30px;
        background-color:${props => props.theme.colors.background1};
        background-size:fill;
        background-repeat:no-repeat;
        color: ${props => props.theme.colors.primary1};
        cursor:default;
    }
    h1,h2,h3,h4,h5,h6,button {
        font-family: ${props => props.theme.fonts.title};
    }
    }
    a {
        text-decoration: none;
    }
    li{
        list-style: none;
    }

`;


export default GlobalStyles;
