import styled from "styled-components";

export const FooterWrapper = styled.footer`
  min-height: 603px;
  background: var(--color-dark);
  position: relative;
  overflow: hidden;
`;

export const FooterBgPattern = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: -487px;
  left: -404px;
  transform: scale(1.41);
`;

export const FooterContent = styled.div`
  margin-top: 347px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
