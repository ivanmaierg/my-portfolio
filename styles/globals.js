import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
${normalize};
    *{
        box-sizing: border-box;
        margin:0;
        padding:0;
    }
    html{
        font-size: 62.5%;
        scroll-behavior: smooth;
    }
    body{
        font-family:${props => props.theme.fonts.main};
        font-size: 1.6rem;
        background-color:${props => props.theme.colors.background1};
        color: ${(props) => props.theme.colors.white};
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
    ::-webkit-scrollbar {
        width: 5px;
        height: 12px
    }
    ::-webkit-scrollbar-thumb {
        background-color: #d6dee1;
        border-radius: 10px;
        height:10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #d6dee1;
        border-radius: 10px;
        border: 1px solid transparent;
        background-clip: content-box;
        height:10px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color: #a8bbbf;
        height:10px;
    }

}
`;


export default GlobalStyles;
