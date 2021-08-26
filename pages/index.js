import Head from 'next/head'
import About from '../components/About/About'
import CallToAction from '../components/CallToAction/CallToAction'
import { educationInfo, Skills } from '../data/data'
import { Layout } from '../layout/Layout'
import { Container, Background } from '../layout/LayoutStyles'
import { useInView } from 'react-intersection-observer';
// import Projects from '../components/Projects/Projects'


export default function Home(props) {
  const { ref: refAbout, inView: inViewAbout } = useInView({
    /* Optional options */
    threshold: 1,
    triggerOnce: true,
  });
  return (
    <>
      <Head>
        <title>ivanmaierg</title>
        <meta name="description" content="My portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
      </Head>
      <Layout>
        <Container>
          <CallToAction />
        </Container>
        <Background url={'./stacked-waves-haikei.svg'} id='About'>
          <Container ref={refAbout}>
            {inViewAbout && <About education={props.educationData} skills={props.skills} />}
          </Container>
        </Background>
        <Container>
          {/* <Projects /> */}
        </Container>
      </Layout>
    </>
  )
}



export async function getStaticProps() {
  const educationData = educationInfo;
  const skills = Skills;
  if (!educationData) {
    return {
      notFound: true,
    }
  }
  return {
    props: { educationData, skills }, // will be passed to the page component as props
  }
}
