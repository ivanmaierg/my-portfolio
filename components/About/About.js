import React from 'react'
import { useInView } from 'react-intersection-observer';
import { AboutContainer, Technologies, GlassContainer, Portrait, Education, AboutMe } from './About.styles';

const About = ({ education, inView }) => {

    return (
        <AboutContainer inView={inView}>
            <Portrait><img style={{ height: '100%' }} src='/portrait.jpg'></img></Portrait>
            <Education>
                <h4>Education:</h4>
                <ul>
                    {education.map(({ id, title, place, date }) => {
                        return (
                            <li style={{ borderBottom: '1px solid white', margin: '2rem 0' }} key={id}>
                                <h5>{title}</h5>
                                <p>{place}</p>
                                <p>{date}</p>
                            </li>
                        )
                    })}
                </ul>
            </Education>
            <Technologies>
                <h4>Tecnologias:</h4>
                <ul>
                    <li>Html</li>
                    <li>Css</li>
                    <li>Sass</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Node js</li>
                    <li>Redux</li>
                    <li>Webpack</li>
                    <li>Typescript</li>
                    <li>Express</li>
                    <li>Git</li>
                </ul>
            </Technologies>
        </AboutContainer>
    )
}



export default About;
