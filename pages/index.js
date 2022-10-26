import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { MainElement } from "../components/Main/Main";
import SectionPricing from "../components/SectionPricing/SectionPricing";

export default function Home() {
  return (
    <>
      <MainElement>
        <Header />
        <SectionPricing />
      </MainElement>
      <Footer />
    </>
  );
}
