import React from 'react';
import { ProjectCardContainer } from './ProjectCard.styles';
import  Image  from 'next/image';

const ProjectCard = ({ title, url, img, repository, technologies, description, index }) => {
    return (
        <ProjectCardContainer key={index} >
            <h4>{title}</h4>
            <Image src={img} responsive={true} height={200} width={350} />
            <div>
                <span>{repository}</span>
                <span>{url}</span>
                <p>Tecnologías:</p>
                <p>{technologies.map((el, index) => <span key={index}>{el}, </span>)}</p>
                <div>
                    {description}
                </div>
            </div>
        </ProjectCardContainer>
    )
}

export default ProjectCard;
