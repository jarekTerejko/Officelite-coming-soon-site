import React from "react";
import Image from "next/image";
import { ContainerElement } from "../Container/Container";
import { HeadingPrimary } from "../Heading/HeadingPrimary";
import {
  SignUpHeaderPatternWrapper,
  SignUpHeaderContent,
  SignUpHeaderContentColLeft,
  SignUpHeaderContentColRight,
  SignUpHeaderWrapper,
  SignUpHeaderPattern,
} from "./SignUpHeaderElements";
import { TextRegularElement } from "../Text/TextRegular";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import BgPatternSignUp from "../../public/assets/sign-up/bg-pattern-side.svg";
import Form from "../Form/Form";

const SignUpHeader = () => {
  return (
    <SignUpHeaderWrapper>
      <SignUpHeaderPatternWrapper>
        <SignUpHeaderPattern>
          <Image src={BgPatternSignUp} />
        </SignUpHeaderPattern>
      </SignUpHeaderPatternWrapper>
      <ContainerElement>
        <SignUpHeaderContent>
          <SignUpHeaderContentColLeft>
            <HeadingPrimary>Work smarter. Save time.</HeadingPrimary>
            <TextRegularElement className="counter-signup">
              Easily manage your projects. Get on the list and receive in-app
              perks available only to early subscribers. We are moving into
              final development and getting ready for official launch soon.
            </TextRegularElement>
            <CountdownTimer />
          </SignUpHeaderContentColLeft>
          <SignUpHeaderContentColRight>
            <Form />
          </SignUpHeaderContentColRight>
        </SignUpHeaderContent>
      </ContainerElement>
    </SignUpHeaderWrapper>
  );
};

export default SignUpHeader;
