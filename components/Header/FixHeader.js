import React from 'react'
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, FixHeaderContainer } from './Header.styles';
import Link from 'next/link';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

const FixHeader = () => {
    return (
        <FixHeaderContainer>
            <Container>
                <Div1>
                    <Link href="/" style="margin:auto">
                        <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
                            <span style={{ fontWeight: '700' }}>Imaierg</span>
                        </a>
                    </Link>
                </Div1>
                <Div2>
                    <li>
                            <NavLink whileHover={{scale:1.2}} transition={{type:"spring",stiffness:250}} href="#About">About</NavLink>
                    </li>
                    <li>
                            <NavLink whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 250 }} >Projects</NavLink>
                    </li>
                    <li>
                            <NavLink whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 250 }} >Cv</NavLink>
                    </li>
                </Div2>
                <Div3>
                    <SocialIcons whileHover={{ scale: 1.1, backgroundColor:'rgba(255, 255, 255,0.2)' }} transition={{ type: "tween", stiffness: 100 }} href='https://github.com/Getsuga743' rel="noreferrer" target="_blank">
                        <AiFillGithub  size="2.5rem" />
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
