import AppDownloadSection from "@/components/AppDownloadSection";
import CTASection from "@/components/CTASection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import FounderSection from "@/components/FounderSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImprovingSection from "@/components/ImprovingSection";
import PricingSection from "@/components/PricingSection";
import ProblemSection from "@/components/ProblemSection";
import SecuritySection from "@/components/SecuritySection";
import TeamsSection from "@/components/TeamsSection";
import TutorialsTeaser from "@/components/TutorialsTeaser";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AppDownloadSection />
        <TutorialsTeaser />
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
