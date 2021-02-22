import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import {
  RegisterDiv,
  RegisterTitle,
  RegisterInput,
  RegisterButton,
  RegisterPage,
  RegisterForm,
} from './RegisterStyled';

export default function Register() {
  const router = useRouter();
  const [input, setInput] = useState({
    name: '',
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
      .post(`http://localhost:4000/user/register`, {
        name: input.name,
        email: input.email,
        password: input.password,
      })
      .then(() => {
        router.push('/login');
      })
      .catch((error) => {
        if (error) return alert(error.response.data.error.message);
      });
  };

  return (
    <>
      <RegisterPage>
        <RegisterDiv>
          <RegisterTitle>Registration</RegisterTitle>
          <RegisterForm onSubmit={submitData}>
            <RegisterInput
              name="name"
              onChange={changeHandler}
              type="text"
              placeholder="Name"
            ></RegisterInput>
            <RegisterInput
              name="email"
              onChange={changeHandler}
              type="email"
              placeholder="Email"
            ></RegisterInput>
            <RegisterInput
              name="password"
              onChange={changeHandler}
              type="password"
              placeholder="Password"
            ></RegisterInput>
            <RegisterButton type="submit">Sign Up</RegisterButton>
          </RegisterForm>
        </RegisterDiv>
      </RegisterPage>
    </>
  );
}
