import React, { useState, useEffect } from 'react'
import { Animated } from 'react-animated-css';
import { AboutContainer, Technologies, Portrait, AboutMe, List, ItemList, InfoWrapper } from './About.styles';

const About = ({ inView, skills }) => {
    const [view, setView] = useState(false);
    useEffect(() => {
        setView(inView)
    }, [inView])
    return (
        <AboutContainer view={view}>
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={view}>
                <Portrait animationInDelay="800" >
                    <img alt='my portrait' style={{ height: '100%', width: '100%', objectFit: 'cover' }} src='/portrait.jpg'></img>
                </Portrait>
            </Animated>
            <InfoWrapper>
                <Animated animationInDelay="1000" animationIn="fadeInRight" animationOut="fadeOut" isVisible={view}>
                    <AboutMe >
                        <h3>Acerca de mí:</h3>
                        <p>
                            Hola! mi nombre es Iván, soy estudiante de informática y desarrollador web.
                        </p>
                        <p>
                            Tengo mucho interés en la plataforma web, la creación de interfaces de usuario, y el ecosistema javascript. <br></br>
                            Cuento con conocimientos de <strong>React.js, y Next.js</strong>. También tengo nociones programación backend con <strong>Node.js y Express</strong>.
                            Mis objetivos son seguir mejorando como desarrollador, buscando nuevos desafios y responsabilidades que asumir.
                        </p>
                    </AboutMe>
                </Animated>
                <Animated animationInDelay="1500" animationIn="bounceInLeft" animationOut="fadeOut" isVisible={view}>
                    <Technologies>
                        <h3>Tecnologías:</h3>
                        <List>
                            {skills.map(el => {
                                return (
                                    <ItemList key={el.id} id={el.id}>
                                        {el.url !== '' ? <span><img src={el.url} /></span> : ''}
                                        <p>
                                            {el.name}
                                        </p>
                                    </ItemList>
                                )
                            })}
                        </List>
                    </Technologies>
                </Animated>
            </InfoWrapper>
        </AboutContainer>
    )
}



export default About;
