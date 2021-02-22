import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  NavbarDiv,
  NavLogoDiv,
  NavLogoIcon,
  NavLogoTitle,
  NavItemDiv,
  NavItem,
} from './NavbarStyled';

function Navbar() {
  const router = useRouter();
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('accessToken') === null) {
      setAuth(false);
    } else {
      setAuth(true);
    }
  });

  const logOut = () => {
    const token = localStorage.getItem('refreshToken');
    const refreshToken = token.split(' ');
    axios
      .post('http://localhost:4000/user/logout', {
        refreshToken: refreshToken[1],
      })
      .then(() => {
        localStorage.removeItem('accessToken'),
          localStorage.removeItem('refreshToken');
      })
      .then(() => {
        setAuth(false);
        router.push('/');
      });
  };

  return (
    <>
      <NavbarDiv>
        <Link href="/">
          <NavLogoDiv>
            <NavLogoIcon />
            <NavLogoTitle>myAnimeList</NavLogoTitle>
          </NavLogoDiv>
        </Link>
        <NavItemDiv>
          {isAuth ? (
            <>
              <Link href="/list">
                <NavItem>My List</NavItem>
              </Link>
              <NavItem onClick={logOut}>Logout</NavItem>
            </>
          ) : (
            <>
              <Link href="/register">
                <NavItem>Register</NavItem>
              </Link>
              <Link href="/login">
                <NavItem>Login</NavItem>
              </Link>
            </>
          )}
        </NavItemDiv>
      </NavbarDiv>
    </>
  );
}

export default Navbar;
