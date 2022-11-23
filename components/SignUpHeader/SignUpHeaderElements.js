import styled from "styled-components";

export const SignUpHeaderWrapper = styled.header`
  min-height: 909px;
  position: relative;
  padding-top: 78px;
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
`;

export const SignUpHeaderPattern = styled.div`
  width: 2036px;
  height: 2036px;
  position: absolute;
  top: -781px;
  left: -763px;
`;

export const SignUpHeaderContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const SignUpHeaderContentColLeft = styled.div``;

export const SignUpHeaderContentColRight = styled.div``;
