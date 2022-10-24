/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { ButtonAction, Container, InfoContainer, Portrait } from './CallToAction.styles'

const CallToAction = () => {
    return (
        <Container>
            <InfoContainer initial={{ opacity: 0, x: '-100vw' }} animate={{ opacity: 1, x: '0'}} transition={{type:'spring', stiffness:50}}>
                    <h2 >Hola, mi nombre es </h2>
                    <h1>Ivan Maier Gallardo</h1>
                    <h3>Desarrollador Front end</h3>
                <p>Soy un estudiante de  <strong> informática </strong> y <strong>desarrollador web </strong> interesado en  la construccón de <strong>interfaces de usuario</strong> . Mis intereses giran en torno a el ecosistema de tecnologías de javascript y la plataforma web en general.</p>
                <a href="#About">
                    <ButtonAction whileHover={{ scale: 1.2, originX: 0.3, originY: 0, filter: 'brightness(1.3)', }} transition={{ type: 'spring', stiffness: '120' }}>
                        <span>Saber más</span>
                    </ButtonAction>
                </a>
                </InfoContainer>
            <Portrait initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}>
                <img alt='my portrait' style={{ height: '100%', width: '100%', objectFit: 'cover' }} src='/portrait.jpg'></img>
            </Portrait>
        </Container>
    )
}

export default CallToAction
