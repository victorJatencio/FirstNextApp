import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const {heading, fontStyle} = styles;
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={`${heading} ${fontStyle}`}>Welcome Home</h1>
    </div>
  )
}
