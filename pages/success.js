import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ContainerElement } from "../components/Container/Container";
import { HeadingPrimary } from "../components/Heading/HeadingPrimary";
import { SignUpHeaderWrapper } from "../components/SignUpHeader/SignUpHeaderElements";
import { TextRegularElement } from "../components/Text/TextRegular";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

const Success = () => {
  const router = useRouter();

  const [pieces, setPieces] = useState(300);

  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 5000);
  };

  useEffect(() => {
    stopConfetti();

    // return () => {
    //   second
    // }
  }, []);

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
      <Confetti gravity={0.2} numberOfPieces={pieces} />
    </motion.div>
  );
};

export default Success;
