import React from 'react';
import Link from 'next/link';
import {
  HeroArrow,
  HeroBackground,
  HeroButton,
  HeroButtonDiv,
  HeroDiv,
  HeroPlus,
  HeroSubTitle,
  HeroTextDiv,
  HeroTitle,
} from './HeroStyled';

function Hero() {
  return (
    <div>
      <HeroBackground />
      <HeroDiv>
        <HeroTextDiv>
          <HeroTitle>Welcome to myAnimeList</HeroTitle>
          <HeroSubTitle>
            Create yourself a list of your favorite animes or the ones you want
            to watch
          </HeroSubTitle>
          <HeroButtonDiv>
            <Link href="/list">
              <HeroButton>
                Create a list <HeroPlus />
              </HeroButton>
            </Link>
            <Link href="/list">
              <HeroButton>
                My animelist <HeroArrow />
              </HeroButton>
            </Link>
          </HeroButtonDiv>
        </HeroTextDiv>
      </HeroDiv>
    </div>
  );
}

export default Hero;
