import React from 'react'
import Image from 'next/image'

const CallToAction = () => {
    return (
        <section style={{display:'flex',flexDirection:'column', justifyContent:'center', maxWidth:'50rem',minWidth:'25rem',minHeight:'40rem'}}>
            {/* <div style={{borderRadius:'50%',overflow:'hidden',width:'fit-content'}}>
                <Image src='/portrait.jpg' width='280px' height='280px'/>
            </div> */}
            <div style={{display:'flex',flexDirection:'column',maxWidth:'50rem',minWidth:'25rem',height:'100%'}}>
                <h2 style={{fontSize:'1.5rem',fontWeight:'normal'}}>Hi, my name is </h2>
                <h1>Ivan Maier Gallardo</h1>
                <h3 style={{ color:'#ccd6f6',margin:'2rem 0'}}>A really passionate developer</h3>
                <p style={{ lineHeight: '2.5rem' }}>I'm front-end developer and CS student really interest on build amazing user interfaces, my interest goes around javascript's web technologies ecosystem, and the web platform as a all.</p>
                <button style={{ color: 'rgba(256,256,256,0.8)', fontWeight: '700', border: 'none', borderRadius: '50px', width: '15rem', padding: '1rem 2rem', margin: '2rem 0', background: 'linear-gradient(90deg, rgba(198,35,104,1) 20%, rgba(250,114,104,1) 85%)' }}>About me</button>
            </div>
            
        </section>
    )
}

export default CallToAction
