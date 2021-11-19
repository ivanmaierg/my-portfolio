import styled from 'styled-components';



export const FooterContainer = styled.footer`
    width:100%;
    display:flex;
    justify-content:center;
    background-color:${(props) => props.theme.colors.primary};
    padding:2rem 0;
    min-height:5rem;
    margin-top:10rem;
`