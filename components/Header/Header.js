import React from 'react'
import Link from 'next/link';
import { DiCssdeck } from 'react-icons/di';
import { Container, Div1, Div2, NavLink } from './Header.styles';
const Header = () => {
    return (
        <Container>
            <Div1>
                <Link href="/">
                    <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
                        <DiCssdeck size="3rem" /> <span>Portfolio</span>
                    </a>
                </Link>
            </Div1>
            <Div2>
                <Link href="#about"><NavLink>About</NavLink></Link>
                <Link href="#about"><NavLink>Projects</NavLink></Link>
                <Link href="#about"><NavLink>Cv</NavLink></Link>
            </Div2>
        </Container>
    )
}

export default Header
