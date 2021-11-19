import React from 'react'

import { ProjectsContainer, ProjectsGrid } from './Projects.styles';
import ProjectCard from '../ProjectCard/ProjectCard';
import { useHasBeenViewed } from '../../hooks/useHasBeenViewed';
import { motion } from 'framer-motion';

const Projects = ({ projects }) => {
    const [hasBeenViewed, ref] = useHasBeenViewed();
    const containerVariants = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
            },
        },
    }
    const variants = {
        visible: i => ({
            opacity: 1,
            scale:'100%',
            transition: {
                delay: i * 0.3,
            },
        }),
        hidden: { opacity: 0,scale:0 },
    }

    return (
        <ProjectsContainer ref={ref} initial='hidden' animate={hasBeenViewed ? 'visible' : 'hidden'} variants={containerVariants}>
            <motion.h3>Proyectos</motion.h3>
            <ProjectsGrid> 
                {projects.map(({ title, url, img, repository, technologies, description }, index) => (
                    <ProjectCard variants={variants} animate='visible' custom={index} title={title} url={url} img={img} repository={repository} technologies={technologies} description={description} key={index} />
                ))}
            </ProjectsGrid>
        </ProjectsContainer>
    )
}

export default Projects
