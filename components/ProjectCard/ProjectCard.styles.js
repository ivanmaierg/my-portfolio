import Image from "next/image";
import styled from "styled-components";
import { GlassContainer } from "../../styles/GlobalComponents/GlassContainer.styles";
import { Item } from "../About/About.styles";

export const ProjectCardContainer = styled(GlassContainer)`
  display: flex;
  flex-direction: column;
  height: 100%;
  & h4 {
    height: auto;
    font-size: 2.5rem;
    margin: 2rem 0;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem;
  }
`;

export const ProjectCardContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
}
`;

export const ProjectCardDescription = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: white;
  min-height: 10rem;
  padding: 2rem 0;
  & p {
    padding: 1rem;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${(props) => props.theme.colors.paragraph};
  }
  > p:first-child {
    font-size: 2rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
  }
  & ul {
    padding: 1rem 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
export const TechnologiesSpan = styled(Item)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 1rem;
  min-width: 5rem;
  margin: 0.5rem;
  border-radius: 10px;
  height: 3rem;
  p {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const ProjectImagePreview = styled(Image)`
  border-radius: 10px;
  height: 50%;
  object-fit: cover;
`;
export const ProjectLink = styled.div`
  display: flex;
  justify-content: end;
  > a:first-child {
    margin-right: 1rem;
  }
`;
