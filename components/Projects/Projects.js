import React from 'react'

import { ProjectsContainer, ProjectsGrid } from './Projects.styles';
import ProjectCard from '../ProjectCard/ProjectCard';


const Projects = ({ projects }) => {
    return (
        <ProjectsContainer>
            <h3>Proyectos</h3>
            <ProjectsGrid> 
                {projects.map(({ title, url, img, repository, technologies, description }, index) => (
                    <ProjectCard title={title} url={url} img={img} repository={repository} technologies={technologies} description={description} key={index} />
                ))}
            </ProjectsGrid>
        </ProjectsContainer>
    )
}

export default Projects
