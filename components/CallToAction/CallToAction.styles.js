import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.section`
    display:flex;
    align-items:center;
    justify-content:space-between;
    min-Width:25rem;
    min-height:45rem;
    margin-bottom:25rem;
    @media ${(props => props.theme.breakpoints.md)}{
        flex-direction:column;
        margin-bottom:5rem;
    }
`
export const InfoContainer = styled(motion.div)`
        display:flex;
        margin:5rem 0;
        flex-direction:column;
        justify-content:flex-start;
        align-items:flex-start;
        min-height:18.75rem;
        width:50%;
        color:${(props) => props.theme.colors.paragraph};
        & h1 {
            font-size:5rem;
            margin:0;
            color:${(props) => props.theme.colors.headLine};
        }
        & h2 {
            margin-bottom:1rem;
            color:${(props) => { props.theme.colors.headLine }};
        }
        & h3 {
            font-size:3rem;
            color:${(props) => props.theme.colors.paragraph};
            margin:1rem 0 2rem 0;
        }
        & p {
            font-size:2rem;
            text-align:justify;
            line-height: 2.5rem;
            & strong {
            color:${(props) => props.theme.colors.headLine};
            }
            margin-bottom:2rem;
        }
        @media ${(props => props.theme.breakpoints.md)}{
            height:auto;
            width:100%
    }
`




export const ButtonAction = styled(motion.button)`
    color:rgba(256,256,256,0.8);
    font-weight: 700;
    border: none;
    border-radius:50px; 
    width: 15rem;
    padding:1rem 2rem;
    background:linear-gradient(90deg, rgba(255, 137, 61) 20%, rgba(242, 95, 76,1) 85%);
    cursor:pointer;
    & a {
        display:block;
        text-decoration:none;
        color:${(props => props.theme.colors.buttonText)};
        width:100%;
        height:100%;
    }
`


export const Portrait = styled(motion.div)`
    flex:2;
    display: flex;
    border-radius:12px;
    overflow:hidden;
    justify-self:start;
    height:300px;
    max-width:300px;
    min-width:180px;
`