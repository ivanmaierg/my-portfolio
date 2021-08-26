import React from 'react';
import FixHeader from '../components/Header/FixHeader';
import { WavesContainer } from '../components/Header/Header.styles';
import { Container } from './LayoutStyles';
export const Layout = ({ children }) => {
    return (
        <div>
            <WavesContainer/>
            <FixHeader />
            <Container>
                <main style={{ margin: '2rem 0' }}>{children}</main>
            </Container>
        </div>
    )
}