import React from 'react';
import { ProjectCardContainer, ProjectCardDescription, ProjectImagePreview } from './ProjectCard.styles';
import Image from 'next/image';

const ProjectCard = ({ title, url, img, repository, technologies, description, index }) => {
    return (
        <ProjectCardContainer key={index} >
            <h4>{title}</h4>
            <ProjectImagePreview src={img} responsive height={200} width={350} />
            <ProjectCardDescription>
                <p>Tecnologías :</p>
                <p>{technologies.map((el, index) => <span key={index}>{el}, </span>)}</p>
                <p>
                    {description}
                </p>
                <div>
                    <a href={repository} target='_blank' rel="noreferrer">
                        <span>
                            <Image src='/github-icon.svg' width={30} height={30} />
                        </span>
                    </a>
                    <a href={url} target='_blank' rel="noreferrer">
                        <span>
                            <Image src='/web-icon.svg' width={30} height={30}  />
                        </span>
                    </a>
                </div>
            </ProjectCardDescription>
        </ProjectCardContainer>
    )
};

export default ProjectCard;
