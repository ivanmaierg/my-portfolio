import styled from 'styled-components';

export const AboutContainer = styled.section`  
    display:${(props) => props.view ? 'flex' : 'none'};
    flex-wrap:wrap;
    justify-content:center;
    align-items:flex-start;
    grid-gap:4rem;
    transition:ease-in-out 1.5s all;
    @media ${(props) => props.theme.breakpoints.md}{
        flex-direction:column;
        justify-content:center;
        align-items:center;
        grid-gap:2rem;
    }
`


export const GlassContainer = styled.div`    
    backdrop-filter: blur(4px) saturate(118%);
    -webkit-backdrop-filter: blur(4px) saturate(118%);
    background-color: rgba(17, 25, 40, 0.65);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    padding:3rem 5rem;
    & h3 {
        font-size:3rem;
        padding-bottom:2rem;
    }
    & p {
        text-align:justify;
        font-size:2rem;
        font-family:${(props) => props.theme.fonts.main};
        color:${(props) => props.theme.colors.gray500};
        line-height:3.5rem;
    }
    & p > strong {
        color:${(props) => props.theme.colors.gray300};
    }
    &
    }
    @media ${(props) => props.theme.breakpoints.md}{
        & h3 {
        font-size:2rem;
        padding:2rem 0;
    }
    & p {
        text-align:justify;
        font-size:2rem;
        font-family:${(props) => props.theme.fonts.main};
        color:${(props) => props.theme.colors.gray500};
        line-height:3.5rem;
    }
    
    }
`;

export const List = styled.ul` 
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        font-size:2rem;
        font-weight:600;
        color:${(props) => props.theme.colors.gray300};
    }
`;
export const ItemList = styled.li`
    padding:0.5rem 1rem;
    margin:0.5rem;
    text-align:start;
    width:fit-content;
    line-height:3rem;
    & p{
        color:#FFFF;
    } 
    background-color:${(props) => { return props.id % 2 === 0 ? props.theme.colors.accent1 : props.theme.colors.accent2 }};
    @media ${(props) => props.theme.breakpoints.md}{
    & li > p {
    text-align:start;
    line-height:2rem;
}
`;

export const AboutMe = styled(GlassContainer)` 
    display: flex;
    flex:2;
    flex-direction:column;
    justify-content: stretch;
    align-items:stretch;
    height:100%;
    width:100%;
`


export const Education = styled(GlassContainer)` 
    display: flex;
    flex:2;
    flex-direction:column;
    justify-content: stretch;
    align-items:stretch;
    height:100%;
    width:100%;
    & h4 {
        font-size:2rem;
    }
    &  p:first-child {
        padding:1rem 0;
    }
`
export const Technologies = styled(GlassContainer)` 
    flex:1;
    width:100%;
    min-height:10rem;
`

export const Portrait = styled.div`
    flex:2;
    display: flex;
    border-radius:12px;
    overflow:hidden;
    justify-self:start;
    height:300px;
    max-width:300px;
    min-width:180px;

`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction:column;
    gap:2rem;
`;