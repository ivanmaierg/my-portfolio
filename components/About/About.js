import React from 'react'
import { AboutContainer, Technologies, Portrait,  AboutMe, List, ItemList } from './About.styles';

const About = ({  inView, skills }) => {
    return (
        <AboutContainer inView={inView}>
            <Portrait><img alt='my portrait' style={{ height: '100%', width: '100%', objectFit: 'cover' }} src='/portrait.jpg'></img></Portrait>
            {/* <Education>
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
            </Education> */}
            <AboutMe>
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
            <Technologies>
                <h3>Tecnologías:</h3>
                <List>
                    {skills.map(el => {
                        return(
                            <ItemList key={el.id}>
                                {el.url !== '' ? <span><img src={el.url} /></span> : ''}
                                <p>
                                    {el.name}
                                </p>
                            </ItemList>
                        )
                    })}
                </List>
            </Technologies>
        </AboutContainer>
    )
}



export default About;
