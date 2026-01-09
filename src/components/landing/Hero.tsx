import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Shield, ArrowRight } from "lucide-react";

const Hero = () => {
  const [documentText, setDocumentText] = useState("");

  const handleAnalyze = () => {
    if (documentText.trim()) {
      // Scroll to demo section or handle analysis
      const demoSection = document.getElementById("demo");
      if (demoSection) {
        demoSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background pointer-events-none" />
      
      <div className="container-wide relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-up">
            <Shield className="w-4 h-4 text-trust" />
            <span className="text-sm text-muted-foreground">
              Your documents stay private. Always.
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 animate-fade-up text-balance leading-tight" style={{ animationDelay: "0.1s" }}>
            Understand any document
            <span className="block text-muted-foreground">before you sign it</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up text-balance" style={{ animationDelay: "0.2s" }}>
            Paste a contract, offer letter, or policy. Get a clear, plain-English explanation 
            of what you're agreeing to—obligations, risks, and questions to ask.
          </p>

          {/* Input area */}
          <div className="max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="bg-card rounded-2xl border border-border shadow-lg p-2">
              <textarea
                value={documentText}
                onChange={(e) => setDocumentText(e.target.value)}
                placeholder="Paste your document text here..."
                className="w-full h-32 md:h-40 p-4 bg-transparent text-foreground placeholder:text-muted-foreground/60 resize-none focus:outline-none text-base"
              />
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground px-2">
                  <FileText className="w-4 h-4" />
                  <span>Or upload a file</span>
                </div>
                <Button 
                  variant="cta" 
                  size="lg" 
                  onClick={handleAnalyze}
                  className="group"
                >
                  Explain this
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-trust" />
              No signup required
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-trust" />
              Documents never stored
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-trust" />
              Not legal advice
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
