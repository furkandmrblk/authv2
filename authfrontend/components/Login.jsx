import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import {
  LoginButton,
  LoginDiv,
  LoginForm,
  LoginInput,
  LoginPage,
  LoginTitle,
} from './LoginStyled';

export default function Login() {
  const router = useRouter();
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setInput((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  const submitData = (e) => {
    e.preventDefault();
    const API_URL = process.env.API_URL;

    axios
      .post(`http://localhost:4000/user/login`, {
        email: input.email,
        password: input.password,
      })
      .then((response) => {
        localStorage.setItem(
          'accessToken',
          'Bearer ' + response.data.accessToken
        ),
          localStorage.setItem(
            'refreshToken',
            'Bearer ' + response.data.refreshToken
          );
      })
      .then(() => {
        router.push('/');
      })
      .catch((error) => {
        if (error) return alert(error.response.data.error.message);
      });
  };

  return (
    <LoginPage>
      <LoginDiv>
        <LoginTitle>Login</LoginTitle>
        <LoginForm onSubmit={submitData}>
          <LoginInput
            name="email"
            onChange={changeHandler}
            type="email"
            placeholder="Email"
          />
          <LoginInput
            name="password"
            onChange={changeHandler}
            type="password"
            placeholder="Password"
          />
          <LoginButton type="submit">Sign In</LoginButton>
        </LoginForm>
      </LoginDiv>
    </LoginPage>
  );
}
