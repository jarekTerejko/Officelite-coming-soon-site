import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: relative;
  overflow: hidden;
  position: relative;
  padding-bottom: 105px;
`;

export const HeaderBgPattern = styled.div`
  position: absolute;
  right: -350px;
  top: -419px;
  z-index: -1;

  @media screen and (max-width: 768px) {
    max-width: 660px;
    top: -152px;
    right: -288px;
  }

  @media screen and (max-width: 560px) {
    left: 50%;
    top: -200px;
    width: 560px;
    transform: translateX(-50%);
  }
`;

export const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 213px;

  @media screen and (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const HeaderContentColLeft = styled.div`
  @media screen and (max-width: 560px) {
    text-align: center;
  }
`;

export const HeaderContentColRight = styled.div`
  margin-left: auto;
  transform: translateX(25px);

  @media screen and (max-width: 1140px) {
    transform: translateX(0);
  }

  @media screen and (max-width: 768px) {
    transform: translateX(15px);
    max-width: 312px;
    margin-top: 22px;
  }

  @media screen and (max-width: 560px) {
    grid-row: 1/1;
    transform: translate(0);
    text-align: center;
    margin: 22px auto 0;
  }
`;
