import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Moment from "@/components/landing/Moment";
import HowItWorks from "@/components/landing/HowItWorks";
import WhatItDoesNot from "@/components/landing/WhatItDoesNot";
import Demo from "@/components/landing/Demo";
import WhoItsFor from "@/components/landing/WhoItsFor";
import Comparison from "@/components/landing/Comparison";
import Privacy from "@/components/landing/Privacy";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Moment />
        <HowItWorks />
        <WhatItDoesNot />
        <Demo />
        <WhoItsFor />
        <Comparison />
        <Privacy />
        <section id="pricing">
          <Pricing />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
