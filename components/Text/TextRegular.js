import styled from "styled-components";

export const TextRegularElement = styled.p`
  font-size: 18px;
  word-spacing: 1px;
  line-height: 26px;
  margin-bottom: 37px;

  &.pricing-card {
    font-size: 16px;
    margin-bottom: 18px;

    &:last-of-type {
      margin-bottom: 35px;
    }
  }

  &.pro {
    color: var(--color-white);
  }

  &.counter-signup {
    margin-bottom: 57px;

    @media screen and (max-width: 950px) {
      max-width: 570px;
    }
  }

  @media screen and (max-width: 1140px) {
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 23px;
  }
`;
