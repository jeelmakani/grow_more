import { Container } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
     
      <Head>
        <title>Grow More</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW='container.xl' zIndex={"base"}>
        <Layout/>
        <HeroSection />

        <main className={styles.main}>
          
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </Container>
    </div>
  )
}

export default Home