import React from 'react';
import { ProjectCardContainer, ProjectCardDescription, ProjectImagePreview ,TechnologiesSpan} from './ProjectCard.styles';
import Image from 'next/image';

const ProjectCard = ({ title, url, img, repository, technologies, description, index }) => {
    return (
        <ProjectCardContainer key={index} >
            <h4>{title}</h4>
            <ProjectImagePreview src={img} responsive={!!true} height={200} width={350} />
            <ProjectCardDescription>
                <p>Tecnologías :</p>
                <ul>{technologies.map((el, index) => <TechnologiesSpan key={index} index={index}><p>{el}</p></TechnologiesSpan>)}</ul>
                <p>
                    {description}
                </p>
                <div>
                    <a href={repository} target='_blank' rel="noreferrer">
                        <span>
                            <Image  responsive={!!true} src='/github-icon.svg' width={30} height={30} />
                        </span>
                    </a>
                    <a href={url} target='_blank' rel="noreferrer">
                        <span>
                            <Image  responsive={!!true} src='/web-icon.svg' width={30} height={30}  />
                        </span>
                    </a>
                </div>
            </ProjectCardDescription>
        </ProjectCardContainer>
    )
};

export default ProjectCard;
