import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';



export const Container = styled.div`
    display:grid;
    grid-template-columns: repeat(5,1fr);
    grid-template-rows:1fr;
    grid-column-gap:2rem;
    padding: 1rem;
    padding-top:2rem;

    @media ${(props) => props.theme.breakpoints.sm}{
        display:grid;
        grid-template-columns:repeat(5,1fr);
        grid-template-rows: repreat(2,60px);
        grid-column-gap:0.5rem;
        grid-row-gap:0.5rem;
    }
`;

export const Div1 = styled.div`
    grid-area:1 / 1 / 2 / 2;
    display: flex;
    flex-direction: row;
    align-content: center;
    @media ${(props) => props.theme.breakpoints.sm}{
        grid-area: 1/1/ 2/3;
    }
`;

export const Div2 = styled.nav`
    padding: 0.5rem;
    grid-area: 1 / 2 / 2 / 4;
    display: flex;
    justify-content: space-around;
    li{
        list-style: none;
        margin: auto;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        grid-area: 2 / 2 / 4 / 5;
        li{
            margin:0 0.5rem;
        }
    }
`;
export const Div3 = styled.div`
    grid-area: 1 / 5 / 2 / 6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
}
`;

export const NavLink = styled.a`
    display: block;
    font-size:1.5rem;
    font-weight: bold;
    line-height: 32px;
    color:rgba(255,255,255,0.80);
    transition: 0.4s ease;
    &:after{
        display: block;
        position: relative;
        content:"" ;
        width: 0;
        left: 50%;
        height:2.5px;
        visibility: visible;
        transition: all 150ms ease-in-out;
    }
    &:hover::after{
        display: block;
        content:"";
        position: relative;
        bottom: 0px;
        width: 100%;
        left:0px;
        visibility: visible;
        background:#ffff;
        border-radius: 5px;
    }
    &:hover{
        opacity: 1;
        cursor: pointer;
        color:#ffff;
    }
    @media ${(props => props.theme.breakpoints.sm)}{
        padding: 0.5rem;
    }
`
export const SocialIcons = styled.a`
    display: block;
    padding:0.8rem;
    border-radius:50%;
    transition: 0.4s ease;
    &:hover{
        background-color:rgba(255,255,255,0.2);
        cursor: pointer;
        transform: scale(115%);
    }
    @media ${(props => props.theme.breakpoints.sm)}{
        padding: 0 1rem;
        &:hover{
            transform: scale(110%);
        }
    }
`


export const NavProductsIcon = styled(IoIosArrowDropdown)`
    
`
