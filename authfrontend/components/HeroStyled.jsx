import styled from 'styled-components';

// Hero

// Containers
export const HeroDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10rem;
`;

export const HeroTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 4rem;
`;

export const HeroButtonDiv = styled.div`
  display: flex;
  align-items: center;
`;

// Background
export const HeroBackground = styled.div`
  z-index: -1;
  position: absolute;
  background-image: url('herobg.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  height: 93vh;
  width: 60%;
  margin-left: 48rem;
`;

// Title

export const HeroTitle = styled.h1`
  font-size: 7.5rem;

  margin-bottom: 3rem;
`;

// Subtitle

export const HeroSubTitle = styled.h1`
  font-size: 2.7rem;
  max-width: 50rem;
  margin-bottom: 3rem;
`;

// Buttons
export const HeroButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  height: 3.5rem;
  width: 15rem;
  background-color: #d94f4f;
  border-radius: 10px;
  border: none;

  font-size: 2rem;
  color: #fff;
  cursor: pointer;

  &:not(:first-child) {
    margin-left: 2rem;
  }

  transition: all 150ms ease-in-out;

  &:active {
    transform: scale(1.02);
  }
`;

export const HeroPlus = styled.div`
  background-image: url('plus.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  height: 23px;
  width: 23px;
`;

export const HeroArrow = styled.div`
  background-image: url('arrow.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  height: 23px;
  width: 26px;
`;
