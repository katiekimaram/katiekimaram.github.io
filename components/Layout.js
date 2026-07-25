import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';
import BackgroundFX from './BackgroundFX';

export default function Layout({ children, title = 'Katie Kim | Support & Platform Operations Engineer' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Katie Kim, enterprise support and platform operations engineer based in Austin, TX."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <BackgroundFX />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
