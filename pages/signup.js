import React from "react";
import SignUpHeader from "../components/SignUpHeader/SignUpHeader";
import { motion } from "framer-motion";

const SignUp = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <SignUpHeader />
      </motion.div>
    </>
  );
};

export default SignUp;
