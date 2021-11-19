import { motion } from 'framer-motion';
import styled from 'styled-components';

export const WavesContainer = styled(motion.div)`
    opacity:1;
    width:100%;
    display: flex;
    align-items: flex-start;
    justify-content:center;
    background:url('/wave-lg.svg');
    background-size:fill;
    background-position-x:center;
    background-repeat:no-repeat;
    background-position-y:-25px;
    height:23rem;
    transition:all 350ms;
    @media ${(props) => props.theme.breakpoints.xl}{
        transition:all 220ms;
        height:10rem;
        background-color:${(props)=> props.theme.colors.primary};
    }
    @media ${(props) => props.theme.breakpoints.sm}{
        background:url('/wave-sm.svg');
        background-position-y:-130px;
        height:13rem;
        transition: all  300ms;
    }
`;

export const FixHeaderContainer = styled(motion.div)`
    opacity:1;
    position:fixed;
    top:0px;
    margin:auto;
    z-index:2;
    display: flex;
    width:100%;
    align-items: flex-start;
    justify-content:center;
    background-color:${(props)=> props.theme.colors.primary};
    height:auto;
    transition:all 350ms;
    margin:auto;
    @media ${(props) => props.theme.breakpoints.xl}{
        transition:all 220ms;
        height:10rem;
        background-color:${(props) => props.theme.colors.primary};
    }
`

export const Container = styled.div`
    display:grid;
    grid-template-columns: repeat(6,1fr);
    grid-template-rows:1fr;
    grid-column-gap:2rem;
    max-width:1280px;
    padding:2rem;
    width:100%;
    @media ${(props) => props.theme.breakpoints.sm}{
        display:flex;
        justify-content:center;
        align-items:center;
    }
`;

export const Div1 = styled.div`
    grid-area:1 / 1 / 2 / 2;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content:flex-start;
    @media ${(props) => props.theme.breakpoints.sm}{
        display:none;
    }
`;

export const Div2 = styled.nav`
    grid-area: 1 / 2 / 2 / 6;
    display: flex;
    justify-content:space-around;
    align-items: center;
    li{
        list-style: none;
    }
    li:nth-child(3) {
        margin-right:1rem;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        align-items: flex-start;
        justify-content: space-between;
        width:75%;
        margin:auto;
    }
`;
export const Div3 = styled.div`
    grid-area: 1 / 6 / 2 / 6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media ${(props) => props.theme.breakpoints.sm} {
        display:none;
    }
}
`;

export const NavLink = styled(motion.a)`
    height:100%;
    margin:0;
    display: block;
    font-size:1.5rem;
    font-weight: bold;
    line-height: 32px;
    text-align: baseline;
    cursor: pointer;
    color:${(props => props.theme.colors.headLine)};
    @media ${(props => props.theme.breakpoints.sm)} {
        font-size:1.8rem;
    }
`
export const SocialIcons = styled(motion.a)`
    display: flex;
    justify-content:flex-end;
    align-items: center;
    border-radius:50%;
    height:40px;
    width:40px;
    color:${(props => props.theme.colors.headLine)};
    & a > * {
        text-decoration:none;
        color:white!important;
    };
    & * {
        margin:auto;
    }
    };
`


