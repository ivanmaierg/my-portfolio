import Head from 'next/head'
import About from '../components/About/About'
import CallToAction from '../components/CallToAction/CallToAction'
import { educationInfo, Skills, projectsInfo } from '../data/data'
import { Layout } from '../layout/Layout'
import Projects from '../components/Projects/Projects'



export default function Home(props) {

  return (
    <>
      <Head>
        <title>ivanmaierg</title>
        <meta name="description" content="This is my portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <CallToAction />
        <div style={{ display: 'flex', height: 'auto' }} id="About">
          <About education={props.educationData} skills={props.skills} />
        </div>
        <div style={{ display: 'flex', height: 'auto' }} id="Projects">
          <Projects projects={props.projects} />
        </div>
      </Layout>
    </>
  )
}



export async function getStaticProps() {
  const educationData = educationInfo;
  const skills = Skills;
  const projects = projectsInfo;
  if (!educationData) {
    return {
      notFound: true,
    }
  }
  return {
    props: { educationData, skills, projects }, // will be passed to the page component as props
  }
}
