import styled from 'styled-components';


export const ProjectsContainer = styled.div`
    display:flex;
    flex-direction:column;
    color:${(props) => props.theme.colors.headLine};
    justify-content:center;
    align-items:center;
    width:100%;
    margin:auto;
`

export const ProjectsGrid = styled.div()