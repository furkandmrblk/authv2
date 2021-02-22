import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Register from '../components/Register';
import GlobalStyle from '../theme/globalStyles';

function register() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('accessToken') === null) {
      console.log('User not logged in');
    } else {
      console.log('User logged in');
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
        <title>Registration | myAnimeList</title>
      </Head>
      <GlobalStyle />
      <Register />
    </div>
  );
}

export default register;
