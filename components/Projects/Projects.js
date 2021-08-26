import React from 'react'
import { GlassContainer } from '../../styles/GlobalComponents/GlassContainer.styles'


const Projects = ({ projects }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', margin: 'auto', height: '5rem' }}>
            <h3>Projects:</h3>
            <div>
                {projects.map(({ title, url, repository, technologies, description }, index) => (
                    <GlassContainer style={{display:'flex',flexDirection:'column'}} key={index}>
                        <h4>{title}</h4>
                        <span><img /></span>
                        <div>
                            <span>{repository}</span>
                            <span>{url}</span>
                            <p>Tecnologías:</p>
                            <p>{technologies.map((el, index) => <span key={index}>{el}, </span>)}</p>
                            <div>
                                {description}
                            </div>
                        </div>
                    </GlassContainer>
                ))}
            </div>
        </div>
    )
}

export default Projects
