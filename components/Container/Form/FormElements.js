import styled from "styled-components";
import { LinkElement } from "../../Link/Link";

export const ContactFormEl = styled.form`
  max-width: 446px;
  margin-left: auto;
  border-radius: 15px;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  background: var(--color-white);
  margin-top: 44px;
  padding: 42px 44px;
  min-height: 508px;
`;

export const ContactFormRow = styled.div`
  margin-bottom: 26px;
  position: relative;
`;

export const ContactFormLabel = styled.label`
  display: block;
  padding-left: 16px;
  font-size: 16px;
  margin-bottom: 2px;
`;

export const ContactFormTextInput = styled.input`
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--color-light-grey);
  padding-left: 16px;
  transition: var(--transition) border-color;
  font-family: var(--font-family);
  font-size: 1.6rem;
  outline: none;

    &:focus {
    border-color: var(--color-blue);
  }
`;

export const ContactFormSelect = styled.select`
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--color-light-grey);
  color: var(--color-light-grey);
  transition: var(--transition) border-color;
  font-family: var(--font-family);
  font-size: 1.6rem;
  padding-left: 16px;
  padding-bottom: 22px;
  outline: none;
  appearance: none;
  font-weight: 700;
  background-repeat: no-repeat;
  background-position: 324px 8px;

  &:focus {
    border-color: var(--color-blue);
  }
`;

export const ContactFormBtn = styled(LinkElement)`
  border: none;
  font-family: var(--font-family);
  margin-top: 12px;
  width: 100%;
  font-size: 16px;
`;

export const ContactFormErrorMsg = styled.span`
  color: red;
  display: block;
  font-size: 1.2rem;
  position: absolute;
  left: 16px;
  bottom: -15px;
`;
