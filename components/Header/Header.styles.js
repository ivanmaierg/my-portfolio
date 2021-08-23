import styled from 'styled-components';

export const WavesContainer = styled.div`
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
        background-color:${(props)=> props.theme.colors.accent1};
    }
    @media ${(props) => props.theme.breakpoints.sm}{
        background:url('/wave-sm.svg');
        background-position-y:-130px;
        height:20rem;
        transition: all  300ms;
    }
`;

export const FixHeaderContainer = styled.div`
    width:100%;
    display: flex;
    align-items: flex-start;
    justify-content:center;
    background-color:${(props)=> props.theme.colors.accent1};
    height:auto;
    transition:all 350ms;
    margin:auto;
    @media ${(props) => props.theme.breakpoints.xl}{
        transition:all 220ms;
        height:10rem;
        background-color:${(props) => props.theme.colors.accent1};
    }
    @media ${(props) => props.theme.breakpoints.sm}{
        display:flex;
        justify-content:center;
        align-items:center;
        height:auto;
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
    align-items: flex-end;
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

export const NavLink = styled.a`
    height:100%;
    margin:0;
    display: block;
    font-size:1.5rem;
    font-weight: bold;
    line-height: 32px;
    text-align: basel;
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
        font-weight: 800;
    }
    @media ${(props => props.theme.breakpoints.sm)} {
        font-size:1.8rem;
    }
`
export const SocialIcons = styled.a`
    display: flex;
    justify-content:flex-end;
    align-items: center;
    border-radius:50%;
    height:40px;
    width:40px;
    transition: 0.4s ease;
    &:hover{
        background-color:rgba(255,255,255,0.2);
        cursor: pointer;
        transform: scale(115%);
    }
    @media ${(props => props.theme.breakpoints.sm)}{
        &:hover{
            transform: scale(110%);
        }
    }
    > * {
        margin:auto;
    }
`


