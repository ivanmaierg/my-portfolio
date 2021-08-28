
import React from 'react'
import { AboutContainer, Technologies, AboutMe, List, ItemList, InfoWrapper } from './About.styles';

const About = ({ skills }) => {
    return (
        <AboutContainer>
                <InfoWrapper>
                    <AboutMe layout={true} initial={{ x: '-100vw', opacity: 0 }} animate={{ opacity: 1 , x: '0'}} transition={{ delay: 0.5, type: 'spring', stiffness: 50 }}>
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
                    <Technologies layout={true} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: 'spring', stiffness: 50 }}>
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
                </InfoWrapper>
        </AboutContainer>
    )
}

export default About;
