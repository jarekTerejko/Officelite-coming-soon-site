import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: relative;
  overflow: hidden;
  position: relative;
`;

export const HeaderBgPattern = styled.div`
  position: absolute;
  right: -350px;
  top: -419px;
  z-index: 0;
`;

export const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 213px;
`;

export const HeaderContentColLeft = styled.div``;
export const HeaderContentColRight = styled.div`
  margin-left: auto;
  transform: translateX(25px);
`;
