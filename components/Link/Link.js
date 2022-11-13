import styled from "styled-components";

export const LinkElement = styled.a`
  background: var(--color-blue);
  color: var(--color-white);
  padding: 18px 41px;
  font-weight: 500;
  border-radius: 30px;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  cursor: pointer;

  &.pricing-card {
    background: var(--color-light-grey-2);
    color: var(--color-blue);
  }

  &.pro {
    background: var(--color-white);
  }
`;
