import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="container-narrow text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-balance">
          Before you agree to anything important—understand it.
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Your first explanation is free. No signup needed.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/try">
            <Button 
              variant="cta" 
              size="xl"
              className="group"
            >
              Explain my document
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/try">
            <Button 
              variant="outline" 
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Try sample NDA
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
