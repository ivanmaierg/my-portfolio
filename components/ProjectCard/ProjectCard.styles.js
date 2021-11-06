import Image from "next/image";
import styled from "styled-components";
import { GlassContainer } from "../../styles/GlobalComponents/GlassContainer.styles";

export const ProjectCardContainer = styled(GlassContainer)` 
    display:flex;
    flex-direction:column;
    padding:2rem 4rem;
    & h4 {
        font-size:2.5rem;
        margin-bottom:2rem;
    };
    @media ${(props) => props.theme.breakpoints.sm}{
        padding:2rem;
    }
`;

export const ProjectCardDescription = styled.div`
    & p {
        padding:1rem 0;
        text-overflow:ellipsis;
        overflow:hidden;
        color:${(props) => props.theme.colors.paragraph};
    }
    & p:first-child {
        font-size:2rem;
        font-weight:bold;
        color:${(props) => props.theme.colors.white};
    }
    & div {
        display:flex;
        justify-content:flex-end;
        align-items:center;
        & span:first-child {
            margin-right:1rem;
        }
    }

`


export const ProjectImagePreview = styled(Image)`
    border-radius:10px;
`;