import Head from 'next/head';
import Hero from '../components/Hero';
import GlobalStyle from '../theme/globalStyles';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Reem+Kufi&display=swap"
          rel="stylesheet"
        />
        <title>myAnimeList | Landing Page</title>
      </Head>
      <GlobalStyle />
      <Hero />
    </>
  );
}
