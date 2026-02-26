import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import FounderSection from "@/components/FounderSection";
import TeamsSection from "@/components/TeamsSection";
import PricingSection from "@/components/PricingSection";
import ImprovingSection from "@/components/ImprovingSection";
import SecuritySection from "@/components/SecuritySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <FounderSection />
        <TeamsSection />
        <PricingSection />
        <ImprovingSection />
        <SecuritySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
