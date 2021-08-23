import React from 'react'
import { WavesContainer, Container, Div1, Div2, Div3, NavLink, SocialIcons, FixHeaderContainer } from './Header.styles';
import Link from 'next/link';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

const FixHeader = () => {
    return (
        <FixHeaderContainer style={{position:'fixed',top:'0px',margin:'auto',zIndex:'2'}}>
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
                        <Link href="#about">
                            <NavLink>About</NavLink>
                        </Link>
                    </li>
                    <li>
                        <Link href="#about">
                            <NavLink>Projects</NavLink>
                        </Link>
                    </li>
                    <li>
                        <Link href="#about">
                            <NavLink>Cv</NavLink>
                        </Link>
                    </li>
                </Div2>
                <Div3>
                    <SocialIcons>
                        <AiFillGithub size="2.5rem" />
                    </SocialIcons>
                    <SocialIcons style={{ margin: '0' }}>
                        <AiFillLinkedin size="2.5rem" />
                    </SocialIcons>
                    <SocialIcons>
                        <AiFillTwitterCircle size="2.5rem" />
                    </SocialIcons>
                </Div3>
            </Container>
        </FixHeaderContainer>
    )
}

export default FixHeader