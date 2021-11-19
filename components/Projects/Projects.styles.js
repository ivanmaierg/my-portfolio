import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ProjectsContainer = styled(motion.div)`

    display:flex;
    flex-direction:column;
    color:${(props) => props.theme.colors.headLine};
    justify-content:center;
    align-items:center;
    width:100%;
    height:auto;
    margin:auto;
    & h3 {
        font-size:5rem;
        margin-bottom:5rem;
    }
    @media ${(props) => props.theme.breakpoints.sm}{
        padding:0;
    }
`;

export const ProjectsGrid = styled.div`
    display:grid;
    gap: 5rem;
    width:100%;
    grid-template-columns: repeat(2,minmax(250px,1fr));
    grid-template-rows:repeat(auto-fit,minmax(250px,1fr));
    @media ${(props) => props.theme.breakpoints.md}{
        grid-template-columns: repeat(1,minmax(250px,1fr));
    }
`;