import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1280px;
    width:100%;
    margin:auto;
    padding:0 2rem;
`

export const Background = styled.div`
    display:flex;
    z-index:0;
    justify-content:center;
    background:${(props) => `url(${props.url})`};
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    height:100vh;
    width: 100%;

    @media ${(props) => (props.theme.breakpoints.md)}{
        background-size:cover;
        height:auto;
    }
`