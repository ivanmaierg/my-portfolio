/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { ButtonAction, Container, InfoContainer } from './CallToAction.styles'
import { Animated } from "react-animated-css";
import Link from 'next/link';

const CallToAction = ({ inView }) => {
    return (
        <Container>
            <Animated animationIn="fadeInUp" animationInDelay="1000" isVisible={inView}>
                <InfoContainer>
                    <h2 >Hi, my name is </h2>
                    <h1>Ivan Maier Gallardo</h1>
                    <h3>A really passionate developer</h3>
                    <p>I'm <strong>front-end developer</strong> and <strong>CS student</strong> really interested on <strong>building amazing user interfaces</strong> . My interests goes around javascript's web technologies ecosystem, and the web platform as a all.</p>
                    <Link href="#About"><ButtonAction href="#About"><span>About me</span></ButtonAction></Link>
                </InfoContainer>
            </Animated>
        </Container>
    )
}

export default CallToAction
