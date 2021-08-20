import React from 'react';
import Header from '../components/Header/Header';
import { Container } from './LayoutStyles';

export const Layout = ({ children }) => {
    return (
        <Container>
            <Header />
            <main style={{margin:'2rem 0'}}>{children}</main>
        </Container>
    )
}