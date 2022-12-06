import { useRouter } from "next/router";
import React from "react";
import { ContainerElement } from "../components/Container/Container";
import { HeadingPrimary } from "../components/Heading/HeadingPrimary";
import { SignUpHeaderWrapper } from "../components/SignUpHeader/SignUpHeaderElements";
import { TextRegularElement } from "../components/Text/TextRegular";
import { motion } from "framer-motion";

const Success = () => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SignUpHeaderWrapper>
        <ContainerElement>
          <HeadingPrimary>Success</HeadingPrimary>
          <TextRegularElement>
            Thanks for the email {router.query.name}
          </TextRegularElement>
          <TextRegularElement>
            We have sent you an email over at {router.query.email}. We will get
            back to you as soon as we can!
          </TextRegularElement>
        </ContainerElement>
      </SignUpHeaderWrapper>
    </motion.div>
  );
};

export default Success;
