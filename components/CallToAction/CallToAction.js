import React from 'react'
import { ButtonAction, Container, InfoContainer, Portrait } from './CallToAction.styles'
import  Link  from 'next/link';
const CallToAction = ({inView}) => {
    return (
        <Container inView={inView}>
            <InfoContainer>
                <h2 >Hi, my name is </h2>
                <h1>Ivan Maier Gallardo</h1>
                <h3>A really passionate developer</h3>
                <p>I'm <strong>front-end developer</strong> and <strong>CS student</strong> really interested on <strong>building amazing user interfaces</strong> . My interests goes around javascript's web technologies ecosystem, and the web platform as a all.</p>
                <ButtonAction><Link href="#About">About me</Link></ButtonAction>
            </InfoContainer>
        </Container>
    )
}

export default CallToAction
