import Image from "next/image";
import styled from "styled-components";
import { GlassContainer } from "../../styles/GlobalComponents/GlassContainer.styles";
import { Item } from "../About/About.styles";

export const ProjectCardContainer = styled(GlassContainer)` 
    display:flex;
    flex-direction:column;
    height:100%;
    & h4 {
        height:auto;
        font-size:2.5rem;
        margin:2rem 0;
    };
    @media ${(props) => props.theme.breakpoints.sm}{
        padding:2rem;
    }
`;

export const ProjectCardDescription = styled.div`
    height:50%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    color:white;
    & p {
        padding:2rem 0;
        text-overflow:ellipsis;
        overflow:hidden;
        color:${(props) => props.theme.colors.paragraph};
    }
    > p:first-child {
        font-size:2rem;
        font-weight:bold;
        color:${(props) => props.theme.colors.white};
    }
    & ul {
        padding:1rem 0;
        display: flex;
        flex-direction:row;
        flex-wrap:wrap;

    }
    & div {
        display:flex;
        align-self:flex-end;
        justify-content:flex-end;
        align-items:center;
        & span:first-child {
            margin-right:1rem;
        }
    }

`
export const TechnologiesSpan  = styled(Item)`
    display: flex;
    justify-content:center;
    align-items:center;
    padding:0rem 1rem;
    min-width:5rem;
    margin:0.5rem;
    border-radius:10px;
    height:3rem;
    p {
        color:white;
        font-size:1.5rem;
        font-weight:bold;
    }
`


export const ProjectImagePreview = styled(Image)`
    border-radius:10px;
    height:50%;
    object-fit:cover;
`;