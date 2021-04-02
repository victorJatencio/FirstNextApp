import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  const {heading, fontStyle} = styles;
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="row">
          <div className="column__12">
            <h1>The World's Most Popular Way to Buy,
            Hold, and Use Crypto</h1>
            <p>Automated. Precise. Efficient.</p>
            <a href="#">Get Started</a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
