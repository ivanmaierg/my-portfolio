/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { ButtonAction, Container, InfoContainer, Portrait } from './CallToAction.styles'


const CallToAction = () => {
    return (
        <Container>
            <InfoContainer initial={{ opacity: 0, x: '-100vw' }} animate={{ opacity: 1, x: '0' }} transition={{ type: 'spring', stiffness: 50 }}>
                <h2 >Hola, mi nombre es </h2>
                <h1>Ivan Maier Gallardo</h1>
                <h3>Desarrollador Front end</h3>
                <p>Soy un estudiante de  <strong> informática </strong> y <strong>desarrollador web </strong> interesado en  la construccón de <strong>interfaces de usuario</strong> . Mis intereses giran en torno a el ecositema de tecnologías de javascript y la plataforma web en general.</p>
                <a></a><ButtonAction href="#About" type='button' whileHover={{ scale: 1.2, originX: 0.3, originY: -0.1, filter: 'brightness(1.3)', }} transition={{ type: 'spring', stiffness: '120' }}><span>About me</span></ButtonAction>
            </InfoContainer>
            <Portrait initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}>
                <img alt='my portrait' style={{ height: '100%', width: '100%', objectFit: 'cover' }} src='/portrait.jpg'></img>
            </Portrait>
        </Container>
    )
}
//   <h2 >Hi, my name is </h2>
//     <h1>Ivan Maier Gallardo</h1>
//     <h3>A really passionate developer</h3>
//     <p>I'm <strong>front-end developer</strong> and <strong>CS student</strong> really interested on <strong>building amazing user interfaces</strong> . My interests goes around javascript's web technologies ecosystem, and the web platform as a all.</p>
export default CallToAction
