import { AlertTriangle, CheckCircle2, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const InstantDemo = () => {
  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container-wide">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
            See what you get <span className="text-muted-foreground">(in 10 seconds)</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Input side */}
            <div className="bg-card rounded-xl border border-border p-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Sample input</span>
                <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded">NDA clause</span>
              </div>
              <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                "The Receiving Party agrees to hold and maintain the Confidential Information 
                in strict confidence for the sole and exclusive benefit of the Disclosing Party. 
                The Receiving Party shall not, without prior written approval, use for their own 
                benefit, publish, copy, or otherwise disclose..."
              </p>
            </div>

            {/* Output side */}
            <div className="space-y-3">
              {/* TL;DR */}
              <div className="bg-card rounded-lg border border-border p-4">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">TL;DR</div>
                <p className="text-foreground text-sm">
                  You're promising to keep their confidential information secret and only use it for their benefit.
                </p>
              </div>

              {/* Obligations */}
              <div className="bg-secondary rounded-lg border border-border p-4">
                <div className="text-xs font-semibold text-secondary-foreground uppercase tracking-wide mb-1.5">Your Obligations</div>
                <ul className="text-foreground text-sm space-y-1">
                  <li>• Keep all confidential information secret</li>
                  <li>• Don't use the information for your own benefit</li>
                </ul>
              </div>

              {/* Red Flags */}
              <div className="bg-warning/5 rounded-lg border border-warning/20 p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-warning" />
                  <span className="text-xs font-semibold text-warning uppercase tracking-wide">Red Flags</span>
                </div>
                <ul className="text-foreground text-sm space-y-1">
                  <li><span className="text-warning">⚠️</span> No time limit specified—could bind you indefinitely</li>
                  <li><span className="text-warning">⚠️</span> "Confidential Information" not clearly defined</li>
                </ul>
              </div>

              {/* Questions */}
              <div className="bg-trust/5 rounded-lg border border-trust/20 p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-trust" />
                  <span className="text-xs font-semibold text-trust uppercase tracking-wide">Ask Before Signing</span>
                </div>
                <ul className="text-foreground text-sm space-y-1">
                  <li>• How long does this NDA last?</li>
                  <li>• What exactly counts as "Confidential"?</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button 
              variant="cta" 
              size="lg" 
              onClick={scrollToHero}
              className="group"
            >
              Try this exact example
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstantDemo;
