import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Shield, ArrowRight, Clock, Lock, CheckCircle2, FileCheck } from "lucide-react";

const sampleNDA = `The Receiving Party agrees to hold and maintain the Confidential Information in strict confidence for the sole and exclusive benefit of the Disclosing Party. The Receiving Party shall not, without the prior written approval of the Disclosing Party, use for the Receiving Party's own benefit, publish, copy, or otherwise disclose to others, or permit the use by others for their benefit or to the detriment of the Disclosing Party, any Confidential Information.`;

const Hero = () => {
  const [documentText, setDocumentText] = useState("");

  const handleAnalyze = () => {
    if (documentText.trim()) {
      const demoSection = document.getElementById("demo");
      if (demoSection) {
        demoSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleTrySample = () => {
    setDocumentText(sampleNDA);
    setTimeout(() => {
      const demoSection = document.getElementById("demo");
      if (demoSection) {
        demoSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-16">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background pointer-events-none" />
      
      <div className="container-wide relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 animate-fade-up text-balance leading-tight">
            Before you sign anything—
            <span className="block text-muted-foreground">understand it in plain English</span>
          </h1>

          {/* Subheadline - specific */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up text-balance" style={{ animationDelay: "0.1s" }}>
            Paste text or upload a file. Get a TL;DR, your obligations, red flags, and smart questions to ask—without legal jargon.
          </p>

          {/* Input area */}
          <div className="max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card rounded-2xl border border-border shadow-lg p-2">
              <textarea
                value={documentText}
                onChange={(e) => setDocumentText(e.target.value)}
                placeholder="Paste your document text here..."
                className="w-full h-32 md:h-36 p-4 bg-transparent text-foreground placeholder:text-muted-foreground/60 resize-none focus:outline-none text-base"
              />
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground px-2">
                  <FileText className="w-4 h-4" />
                  <span>Or upload a file</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    onClick={handleTrySample}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Try a sample NDA
                  </Button>
                  <Button 
                    variant="cta" 
                    size="lg" 
                    onClick={handleAnalyze}
                    className="group"
                  >
                    Explain my document
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Privacy microcopy */}
            <p className="text-xs text-muted-foreground/70 mt-3 text-center">
              Tip: Remove names or sensitive details if you want. You'll still get the same clarity.
            </p>
          </div>

          {/* Trust Strip - directly under CTA */}
          <div className="mt-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="inline-flex flex-wrap items-center justify-center gap-x-5 gap-y-2 px-5 py-3 rounded-xl bg-secondary/50 border border-border">
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-trust" />
                No signup needed
              </span>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-trust" />
                Not legal advice
              </span>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="w-4 h-4 text-trust" />
                Documents aren't stored
              </span>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileCheck className="w-4 h-4 text-trust" />
                NDAs, offer letters, policies
              </span>
            </div>
          </div>

          {/* Free tier hint */}
          <p className="text-sm text-muted-foreground mt-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Get your first explanation free. <span className="text-foreground">Save history on Pro.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
