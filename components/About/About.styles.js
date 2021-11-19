import styled from 'styled-components';
import { GlassContainer } from '../../styles/GlobalComponents/GlassContainer.styles';

export const AboutContainer = styled.section`  
    display:flex;
    flex-wrap:wrap;
    align-self:center;
    justify-self:center;
    grid-gap:4rem;
    margin-bottom:10rem;
    @media ${(props) => props.theme.breakpoints.md}{
        flex-direction:column;
        justify-content:center;
        align-items:center;
        grid-gap:2rem;
    }
`


export const GlassCardContainer = styled(GlassContainer)`    
    backdrop-filter: blur(4px) saturate(118%);
    -webkit-backdrop-filter: blur(4px) saturate(118%);
    background-color: rgba(17, 25, 40, 0.65);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    padding:3rem 5rem;
    & h3 {
        font-size:3rem;
        padding-bottom:2rem;
        color:${(props) => props.theme.colors.headLine};
    }
    & p {
        text-align:justify;
        word-break: break-all;
        font-size:2rem;
        font-family:${(props) => props.theme.fonts.main};
        color:${(props) => props.theme.colors.paragraph};
        line-height:3.5rem;
    }
    & p > strong {
        color:${(props) => props.theme.colors.headLine};
    }



    @media ${(props) => props.theme.breakpoints.md}{
        padding:3rem 2rem;
        & h3 {
            font-size:2rem;
        }
        & p {
            text-align:justify;
            font-size:2rem;
            font-family:${(props) => props.theme.fonts.main};
            color:${(props) => props.theme.colors.paragraph};
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
        color:${(props) => props.theme.colors.headLine};
    }
`;



export const Item = styled.li`
    text-align:start;
    width:fit-content;
    & p{
        color:#FFFF;
    }
    background-color:${(props) => { return props.index % 2 === 0 ? props.theme.colors.primary : props.theme.colors.secondary }};
    @media ${(props) => props.theme.breakpoints.md}{
    & li > p {
        text-align:start;
    }}
`


export const ItemList = styled(Item)`
    padding:0.5rem 1rem;
    margin:0.5rem;
    line-height:3rem;
     @media ${(props) => props.theme.breakpoints.md}{
    & li > p {
        line-height:2rem;
    }}
}
`;

export const AboutMe = styled(GlassCardContainer)` 
    display: flex;
    flex:2;
    flex-direction:column;
    justify-content: stretch;
    align-items:stretch;
    height:100%;
    width:100%;
`

export const Education = styled(GlassCardContainer)` 
    display: flex;
    flex:2;
    flex-direction:column;
    justify-content: stretch;
    align-items:stretch;
    height:100%;
    width:auto;
    & h4 {
        font-size:2rem;
    }
    &  p:first-child {
        padding:1rem 0;
    }
`
export const Technologies = styled(GlassCardContainer)` 
    flex:1;
    width:auto;
`


export const InfoWrapper = styled.div`
    display: flex;
    flex-direction:column;
    gap:3rem;
`;