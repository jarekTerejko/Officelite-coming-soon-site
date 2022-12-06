import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { MainElement } from "../components/Main/Main";
import SectionPricing from "../components/SectionPricing/SectionPricing";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <MainElement>
          <Header />
          <SectionPricing />
        </MainElement>
        <Footer />
      </motion.div>
    </>
  );
}
