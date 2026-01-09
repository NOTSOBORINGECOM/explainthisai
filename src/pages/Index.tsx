import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import InstantDemo from "@/components/landing/InstantDemo";
import HowItWorks from "@/components/landing/HowItWorks";
import CommonClauses from "@/components/landing/CommonClauses";
import WhatItDoesNot from "@/components/landing/WhatItDoesNot";
import Privacy from "@/components/landing/Privacy";
import WhoItsFor from "@/components/landing/WhoItsFor";
import Comparison from "@/components/landing/Comparison";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import BuiltResponsibly from "@/components/landing/BuiltResponsibly";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <InstantDemo />
        <HowItWorks />
        <CommonClauses />
        <WhatItDoesNot />
        <Privacy />
        <WhoItsFor />
        <Comparison />
        <section id="pricing">
          <Pricing />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <FinalCTA />
        <BuiltResponsibly />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
