import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="section-spacing bg-primary text-primary-foreground">
      <div className="container-narrow text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-balance">
          Before you agree to anything important, understand it.
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          The next contract you receive doesn't have to be confusing. 
          Paste it in and see what you're really agreeing to.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            variant="cta" 
            size="xl"
            className="group"
          >
            Try ExplainThis AI free
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        <p className="text-sm text-primary-foreground/60 mt-6">
          No signup required. Your documents stay private.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
