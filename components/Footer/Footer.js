import React from "react";
import Image from "next/image";
import Link from "next/link";

import BgPatternFooter from "../../public/assets/home/bg-pattern-footer.svg";
import { ContainerElement } from "../Container/Container";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import {
  FooterBgPattern,
  FooterContent,
  FooterWrapper,
} from "./FooterElements";
import { LinkElement } from "../Link/Link";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterBgPattern>
        <Image src={BgPatternFooter} />
      </FooterBgPattern>
      <ContainerElement>
        <FooterContent>
          <CountdownTimer />
          <Link href="/signup">
            <LinkElement>Get Started</LinkElement>
          </Link>
        </FooterContent>
      </ContainerElement>
    </FooterWrapper>
  );
};

export default Footer;
