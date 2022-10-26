import styled from "styled-components";

export const SectionPricingWrapper = styled.section``;
export const SectionPricingContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 31px;
  transform: translateY(105px);
`;

export const SectionPricingCard = styled.div`
  background: var(--color-white);
  min-height: 400px;
  border-radius: 15px;
  padding: 39px 20px;
  position: relative;
  overflow: hidden;

  &.pro {
    background: var(--color-blue);
  }
`;

export const SectionPricingCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
`;

export const SectionPricingBgPatternWrapper = styled.div`
  position: absolute;
  transform: scale(2.5);
  top: -109px;
  left: 0;
`;

export const SectionPricingPlanName = styled.p`
  color: var(--color-dark);
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 38px;

  &.pro {
    color: var(--color-white);
  }
`;

export const SectionPricingPlanExplanation = styled.p`
  color: var(--color-dark);
  margin-bottom: 61px;

  &.pro {
    color: var(--color-white);
  }
`;
