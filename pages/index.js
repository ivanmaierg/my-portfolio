import Head from 'next/head'
import About from '../components/About/About'
import CallToAction from '../components/CallToAction/CallToAction'
import { Skills, ProjectsInfo } from '../data/data'
import { Layout } from '../layout/Layout'
import Projects from '../components/Projects/Projects'




export default function Home(props) {

  return (
    <>
      <Head>
        <title>ivanmaierg</title>
        <meta name="description" content="My portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <CallToAction />
        <div style={{ display: 'flex', height: 'auto' }} id="About">
          <About  skills={props.skills} />
        </div>
        <div style={{ display: 'flex', height: 'auto' }} id="Projects">
          <Projects projects={props.projects} />
        </div>
      </Layout>
    </>
  )
}



export async function getStaticProps() {
  const skills = Skills;
  const projects = ProjectsInfo;
  return {
    props: { projects, skills }, // will be passed to the page component as props
  }
}
