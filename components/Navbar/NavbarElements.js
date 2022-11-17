import styled from "styled-components";

export const NavbarWrapper = styled.nav`
position: relative;
z-index: 1;
`;

export const NavbarContent = styled.div`
  padding-top: 81px;

  @media screen and (max-width: 1140px) {
    padding-top: 72px;
  }

      @media screen and (max-width: 560px) {
      text-align: center;
      }
`;
