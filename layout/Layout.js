import React from 'react';
import FixHeader from '../components/Header/FixHeader';
import { WavesContainer } from '../components/Header/Header.styles';


export const Layout = ({ children }) => {
    return (
        <div>
            <WavesContainer/>
            <FixHeader/>
            <main style={{ margin: '2rem 0' }}>{children}</main>
        </div>
    )
}