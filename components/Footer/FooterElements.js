import styled from "styled-components";

export const FooterWrapper = styled.footer`
  min-height: 603px;
  background: var(--color-dark);
  position: relative;
  overflow: hidden;
  padding-bottom: 50px;

  @media screen and (max-width: 768px) {
    min-height: 986px;
  }
`;

export const FooterBgPattern = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: -487px;
  left: -404px;
  transform: scale(1.41);

  @media screen and (max-width: 768px) {
    top: 457px;
    left: 0px;
    transform: scale(1.9);
  }
  
  @media screen and (max-width: 560px) {
    top: 900px;
  }
`;

export const FooterContent = styled.div`
  margin-top: 347px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media screen and (max-width: 768px) {
  margin-top: 609px;
  flex-direction: column;
  display: flex;
  text-align: center;
  }

  @media screen and (max-width: 650px) {
  margin-top: 700px;
  }

  @media screen and (max-width: 560px) {
  margin-top: 1000px;
  }
`;
