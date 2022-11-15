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

    @media screen and (max-width: 768px) {
      font-size: 56px;
      margin-bottom: 21px;
    }
  }

  &.pro {
    color: var(--color-white);
  }

  @media screen and (max-width: 1140px) {
    font-size: 48px;
    padding-top: 20px;
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
    padding-top: 0px;
    line-height: 47px;
    margin-bottom: 28px;
  }
`;
