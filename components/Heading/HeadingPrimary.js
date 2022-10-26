import styled from "styled-components";

export const HeadingPrimary = styled.h1`
  font-size: 56px;
  padding-top: 66px;
  line-height: 64px;
  color: var(--color-dark);
  margin-bottom: 30px;

  &.pricing-card {
    padding-top: 0;
    margin-bottom: 16px;
  }

  &.pro {
    color: var(--color-white);
  }
`;
