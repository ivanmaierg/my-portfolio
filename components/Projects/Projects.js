import React from 'react'


import { ProjectsContainer } from './Projects.styles';
import ProjectCard from '../ProjectCard/ProjectCard';


const Projects = ({ projects }) => {
    return (
        <ProjectsContainer style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', margin: 'auto' }}>
            <h3 style={{ margin: '5rem auto' }}>Projects:</h3>
            <div>
                {projects.map(({ title, url, img, repository, technologies, description }, index) => (
                    <ProjectCard title={title} url={url} img={img} repository={repository} technologies={technologies} description={description} key={index} />
                ))}
            </div>
        </ProjectsContainer>
    )
}

export default Projects
