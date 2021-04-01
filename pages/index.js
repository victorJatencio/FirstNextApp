import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  const {heading, fontStyle} = styles;
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={`${heading} ${fontStyle}`}>Welcome Home</h1>
    </Layout>
  )
}
