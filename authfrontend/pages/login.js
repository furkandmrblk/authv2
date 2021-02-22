import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Login from '../components/Login';
import GlobalStyle from '../theme/globalStyles';

function login() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('accessToken') === null) {
    } else {
      router.push('/');
    }
  });

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Reem+Kufi&display=swap"
          rel="stylesheet"
        />
        <title>Login | myAnimeList</title>
      </Head>
      <GlobalStyle />
      <Login />
    </div>
  );
}

export default login;
