import Hero from "@/components/common/Hero";
import ProductSection from "@/components/common/ProductSection";
import RecognitionSection from "@/components/common/RecognitionSection";
import TruthSection from "@/components/common/TruthSection";
import SolutionSection from "@/components/common/SolutionSection";
import StepsSection from "@/components/common/StepsSection";
import BenefitsSection from "@/components/common/BenefitsSection";
import TableOfContentsSection from "@/components/common/TableOfContentsSection";
import OrderSection from "@/components/common/OrderSection";
import WarrantySection from "@/components/common/WarrantySection";
import FAQSection from "@/components/common/FAQSection";
import ScrollToTopButton from "@/components/common/ScrollToTopButton";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductSection />
      <RecognitionSection />
      <TruthSection />
      <SolutionSection />
      <StepsSection />
      <BenefitsSection />
      <TableOfContentsSection />
      <OrderSection />
      <WarrantySection />
      <FAQSection />
      <ScrollToTopButton />
    </main>
  );
}
