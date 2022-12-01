import styled from "styled-components";

export const SignUpHeaderWrapper = styled.header`
  min-height: 909px;
  position: relative;
  padding-top: 78px;

  @media screen and (max-width: 950px) {
    max-height: 1419px;
  }
`;

export const SignUpHeaderPatternWrapper = styled.div`
  position: absolute;
  min-height: 1024px;
  width: 420px;
  background: var(--color-dark);
  top: -115px;
  right: 0;
  z-index: -1;
  overflow: hidden;

  @media screen and (max-width: 950px) {
    position: relative;
    top: -300px;
    width: 100%;
    min-height: 600px;
  }
`;

export const SignUpHeaderPattern = styled.div`
  width: 2036px;
  height: 2036px;
  position: absolute;
  top: -781px;
  left: -763px;

  @media screen and (max-width: 950px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const SignUpHeaderContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media screen and (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

export const SignUpHeaderContentColLeft = styled.div`
  @media screen and (max-width: 950px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const SignUpHeaderContentColRight = styled.div``;
