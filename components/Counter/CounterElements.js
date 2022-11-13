import styled from "styled-components";

export const CounterWrapper = styled.div``;

export const CounterHeading = styled.h2`
  color: var(--color-dark-white);
  text-transform: uppercase;
  font-size: 17px;
  letter-spacing: 4px;
  font-weight: 500;
  word-spacing: 3px;
`;

export const CounterHeadingTimeStr = styled.span`
  color: var(--color-blue);
`;

export const CounterBoxesWrapper = styled.div`
  margin-top: 17px;
  display: flex;
`;

export const CounterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  background: #323a52;
  padding: 17px 0;
  border-radius: 14px;
  min-width: 100px;
`;

export const CounterDigit = styled.h3`
  font-size: 54px;
  color: var(--color-dark-white);
  font-family: "Roboto Mono", monospace;
`;
export const CounterSpan = styled.span`
  font-size: 16px;
  font-weight: 500;
`;
