import React from 'react';
import Footer from '../components/Footer/Footer';
import FixHeader from '../components/Header/FixHeader';
import { WavesContainer } from '../components/Header/Header.styles';
import { useHasBeenViewed } from '../hooks/useHasBeenViewed';
import { Container } from './LayoutStyles';

export const Layout = ({ children }) => {
    const [hasBeenViewed, ref] = useHasBeenViewed();
    const wavesContainerVariants = {
        visible: {
            opacity: 1,
            y:0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3,
            },
        },
        hidden: {
            y: '-100%',
            opacity: 0,
            transition: {
                when: "afterChildren",
            },
        },
    }
    const contentVariants = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
    }
    return (
        <div>
            <WavesContainer initial="hidden"
                animate={hasBeenViewed ? 'visible' : 'hidden'}
                variants={wavesContainerVariants}
                ref={ref}>
                <FixHeader variants={contentVariants}/>
            </WavesContainer>
         
            <Container>
                <main style={{ margin: '2rem 0' }}>{children}</main>
            </Container>
            <Footer />
        </div>
    )
}