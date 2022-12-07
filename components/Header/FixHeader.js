import React from 'react'
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, FixHeaderContainer } from './Header.styles';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

const FixHeader = ({ variants }) => {
    return (
        <FixHeaderContainer transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 100 },
            default: { duration: 1 },
        }} variants={variants}>
            <Container>
                <Div1>
                    <span href="#" style={{ display: 'flex', alignItems: 'center', color: "white" }}>
                        <p style={{ fontWeight: '700' }}>Imaierg</p>
                    </span>
                </Div1>
                <Div2>
                    <ul>
                        <li>
                            <NavLink whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 250 }} href="#About">Conoceme</NavLink>
                        </li>
                        <li>
                            <NavLink whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 250 }} href="#Projects" >Proyectos</NavLink>
                        </li>
                        <li>
                            <NavLink whileHover={{ scale: 1.2 }} target="_blank" href='https://www.notion.so/ivanmaierg/Ivan-Maier-Gallardo-Frontend-developer-2ab2cb9a58454e65874a452ee9579f94' transition={{ type: "spring", stiffness: 250 }} >Cv</NavLink>
                        </li>
                    </ul>

                </Div2>
                <Div3>
                    <SocialIcons whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255,0.2)' }} transition={{ type: "tween", stiffness: 100 }} href='https://github.com/Getsuga743' rel="noreferrer" target="_blank">
                        <AiFillGithub size="2.5rem" />
                    </SocialIcons>
                    <SocialIcons whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255,0.2)' }} href='https://linkedin.com/in/ivan-maier-gallardo-461b70176' rel="noreferrer" target="_blank">
                        <AiFillLinkedin size="2.5rem" />
                    </SocialIcons>
                    <SocialIcons whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255,0.2)' }} href='https://twitter.com/imaierg' rel="noreferrer" target="_blank">
                        <AiFillTwitterCircle size="2.5rem" />
                    </SocialIcons>
                </Div3>
            </Container>
        </FixHeaderContainer>
    )
}

export default FixHeader
