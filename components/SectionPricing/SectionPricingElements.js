import styled from "styled-components";

export const SectionPricingWrapper = styled.section`
  position: relative;
  z-index: 1;
`;
export const SectionPricingContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 31px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 23px;
  }
`;

export const SectionPricingCard = styled.div`
  background: var(--color-white);
  min-height: 400px;
  border-radius: 15px;
  padding: 39px 20px;
  position: relative;
  overflow: hidden;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;

  &.pro {
    background: var(--color-blue);
  }

  @media screen and (max-width: 768px) {
    padding: 49px 47px 73px 47px;
    min-height: unset;
    gap: 30px;
  }
`;

export const SectionPricingCardContent = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: left;
  }
`;

export const SectionPricingCardContentColLeft = styled.div``;
export const SectionPricingCardContentColRight = styled.div`
  @media screen and (max-width: 768px) {
    padding: 45px 0px 0px 55px;
  }

  @media screen and (max-width: 700px) {
    padding: 20px 0px 0px 20px;
  }
`;

export const SectionPricingBgPatternWrapper = styled.div`
  position: absolute;
  transform: scale(2.5);
  top: -109px;
  left: 0;

  @media screen and (max-width: 768px) {
    top: -280px;
    left: -320px;
    transform: scale(1);
  }
`;

export const SectionPricingPlanName = styled.p`
  color: var(--color-dark);
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 38px;

  &.pro {
    color: var(--color-white);
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 22px;
  }
`;

export const SectionPricingPlanExplanation = styled.p`
  color: var(--color-dark);
  margin-bottom: 61px;

  &.pro {
    color: var(--color-white);
  }
`;
