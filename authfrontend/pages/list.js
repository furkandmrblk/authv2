import Head from 'next/head';
import { useEffect } from 'react';
import List from '../components/List';
import GlobalStyle from '../theme/globalStyles';

function list() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Reem+Kufi&display=swap"
          rel="stylesheet"
        />
        <title>List | myAnimeList</title>
      </Head>
      <GlobalStyle />
      <List />
    </div>
  );
}

export default list;
