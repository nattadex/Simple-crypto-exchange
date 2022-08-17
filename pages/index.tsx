import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// components
const Header = dynamic(
  () => import('../components/Header/Header'),
  { ssr: false }
)
import Exchange from '../components/exchange/Exchange'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>La Coco Crypto Exchange</title>
        <meta name="description" content="CakeDefi Coding Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Header />
        <Exchange/>

      </main>
    </div>
  )
}

export default Home
