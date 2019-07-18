import styled from 'styled-components';

export const Navbar = styled.div`
    height: 70px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `;

  export const NavbarLogo = styled.div`
    color: white;
    margin-right: auto;
    margin-left: 2.5rem;
    font-size: 2.2rem;
  `;

  export const NavbarLinks = styled.nav`
    width: 50%;
    display: flex;
    justify-content: space-around;
  `;

  export const NavbarLink = styled.a`
    font-size: 1.2rem;
    color: ${props => props.status === `active` ? `white` : `gray`};
    text-transform: uppercase;
    text-decoration: none;

    :hover {
        color: white;
    }
  `;