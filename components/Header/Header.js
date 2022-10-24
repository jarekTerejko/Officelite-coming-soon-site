import Image from "next/image";
import Link from "next/link";

import React from "react";
import {
  HeaderBgPattern,
  HeaderContent,
  HeaderContentColLeft,
  HeaderContentColRight,
  HeaderWrapper,
} from "./HeaderElements";
import IllustrationCharts from "../../public/assets/home/illustration-charts.svg";
import BgPatternHeader from "../../public/assets/home/bg-pattern-header.svg";
import { ContainerElement } from "../Container/Container";
import { HeadingPrimary } from "../Heading/HeadingPrimary";
import { TextRegularElement } from "../Text/TextRegular";
import { LinkElement } from "../Link/Link";

const Header = () => {
  return (
    <HeaderWrapper bgPattern={BgPatternHeader}>
      <HeaderBgPattern>
        <Image src={BgPatternHeader} />
      </HeaderBgPattern>
      <ContainerElement>
        <HeaderContent>
          <HeaderContentColLeft>
            <HeadingPrimary>
              A simple solution to complex tasks is coming soon
            </HeadingPrimary>
            <TextRegularElement>
              Say goodbye to inefficient juggling of multiple apps, teams, and
              projects. Officelite is the new collaboration platform built with
              an intuitive interface to improve productivity.
            </TextRegularElement>
            <Link href="/signup">
              <LinkElement>Get Started</LinkElement>
            </Link>
          </HeaderContentColLeft>
          <HeaderContentColRight>
            <Image src={IllustrationCharts} />
          </HeaderContentColRight>
        </HeaderContent>
      </ContainerElement>
    </HeaderWrapper>
  );
};

export default Header;
