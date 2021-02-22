import styled from 'styled-components';

// Navbar

// Containers
export const NavbarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #d33939;
  padding: 0.5rem 10rem;

  height: 7vh;
`;

// Logo
export const NavLogoDiv = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
`;

export const NavLogoTitle = styled.a`
  font-size: 2rem;
  color: #fff;
`;

export const NavLogoIcon = styled.div`
  height: 32px;
  width: 32px;
  background-image: url('noteIcon.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  margin-right: 0.3rem;
`;

// Items

export const NavItemDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.a`
  font-size: 1.8rem;
  color: #fff;

  cursor: pointer;

  &:not(:first-child) {
    margin-left: 5rem;
  }
`;
