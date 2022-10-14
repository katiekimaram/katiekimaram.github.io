import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
        <Head>
            <title>Katie Kim | Software Engineer & Tech Enthusiast</title>

            <link rel="icon" href="logo.svg" />
        </Head>

        <Header />
            <main>{children}</main>
        <Footer />
    </>
    )
}