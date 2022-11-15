import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  SectionPricingBgPatternWrapper,
  SectionPricingCard,
  SectionPricingCardContent,
  SectionPricingCardContentColLeft,
  SectionPricingCardContentColRight,
  SectionPricingContent,
  SectionPricingPlanExplanation,
  SectionPricingPlanName,
  SectionPricingWrapper,
} from "./SectionPricingElements";
import { ContainerElement } from "../Container/Container";
import { HeadingPrimary } from "../Heading/HeadingPrimary";
import { TextRegularElement } from "../Text/TextRegular";
import { LinkElement } from "../Link/Link";
import BgPatternPricing from "../../public/assets/home/bg-pattern-pricing.svg";

const SectionPricing = () => {
  const pricingData = [
    {
      name: "Basic",
      price: "Free",
      explanation: "Up to 5 users for free",
      mainAdvantage: "Basic document collaboration",
      storage: "2 GB storage",
      additionalAdvantage: "Great security and support",
      className: "pricing-card",
    },
    {
      name: "Pro",
      price: "$9.99",
      explanation: "Per user, billed monthly",
      mainAdvantage: "All essential integrations",
      storage: "50 GB storage",
      additionalAdvantage: "More control and insights",
      className: "pricing-card pro",
    },
    {
      name: "Ultimate",
      price: "$19.99",
      explanation: "Per user, billed monthly",
      mainAdvantage: "Robust work management",
      storage: "100 GB storage",
      additionalAdvantage: "VIP support",
      className: "pricing-card",
    },
  ];

  return (
    <>
      <SectionPricingWrapper>
        <ContainerElement>
          <SectionPricingContent>
            {pricingData.map((card, i) => {
              return (
                <SectionPricingCard key={card.name} className={card.className}>
                  {card.className === "pricing-card pro" ? (
                    <SectionPricingBgPatternWrapper>
                      <Image src={BgPatternPricing} />
                    </SectionPricingBgPatternWrapper>
                  ) : (
                    ""
                  )}
                  <SectionPricingCardContent>
                    <SectionPricingCardContentColLeft>
                      <SectionPricingPlanName className={card.className}>
                        {card.name}
                      </SectionPricingPlanName>
                      <HeadingPrimary className={card.className}>
                        {card.price}
                      </HeadingPrimary>
                      <SectionPricingPlanExplanation className={card.className}>
                        {card.explanation}
                      </SectionPricingPlanExplanation>
                    </SectionPricingCardContentColLeft>
                    <SectionPricingCardContentColRight>
                      <TextRegularElement className={card.className}>
                        {card.mainAdvantage}
                      </TextRegularElement>
                      <TextRegularElement className={card.className}>
                        {card.storage}
                      </TextRegularElement>
                      <TextRegularElement className={card.className}>
                        {card.additionalAdvantage}
                      </TextRegularElement>
                      <Link href="/signup">
                        <LinkElement className={card.className}>
                          Try for Free
                        </LinkElement>
                      </Link>
                    </SectionPricingCardContentColRight>
                  </SectionPricingCardContent>
                </SectionPricingCard>
              );
            })}
          </SectionPricingContent>
        </ContainerElement>
      </SectionPricingWrapper>
    </>
  );
};

export default SectionPricing;
