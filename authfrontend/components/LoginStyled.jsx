import styled from 'styled-components';

// Login

// Containers
export const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url('loginbg.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  height: 93vh;
  width: 100vw;
`;

export const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #d94f4f;
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  height: 22rem;
  width: 30rem;
`;

// Title
export const LoginTitle = styled.a`
  font-size: 2.5rem;
  color: #fff;

  margin-bottom: 1rem;
`;

// Inputs
export const LoginInput = styled.input`
  height: 3.0625rem;
  width: 25.3125rem;

  font-size: 1.2rem;
  padding-left: 1rem;

  background-color: #fff;
  border-radius: 5px;
  border: none;
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25);

  &:focus,
  input:focus {
    outline: none;
  }

  &::-webkit-input-placeholder {
    color: #c3c2c2;
    font-size: 1.2rem;
  }
  &:-ms-input-placeholder {
    color: #c3c2c2;
    font-size: 1.2rem;
  }
  &:-moz-placeholder {
    color: #c3c2c2;
    font-size: 1.2rem;
  }
  &::-moz-placeholder {
    color: #c3c2c2;
    font-size: 1.2rem;
  }

  margin-bottom: 1rem;
`;

// SubmitButton
export const LoginButton = styled.button`
  height: 3.0625rem;
  width: 25.3125rem;

  font-size: 1.2rem;

  text-align: center;
  color: #fff;
  background-color: rgb(56, 180, 15);
  border-radius: 5px;
  border: none;
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25);

  &:focus,
  input:focus {
    outline: none;
  }

  cursor: pointer;

  transition: all 150ms ease-in-out;

  &:active {
    transform: scale(1.02);
  }
`;

// Forms
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
