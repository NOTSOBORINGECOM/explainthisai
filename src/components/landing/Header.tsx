import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border/50">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground text-lg">ExplainThis AI</span>
          </a>

          {/* Navigation - Center */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How it works
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a href="#" className="hidden sm:inline-flex text-sm text-foreground hover:text-muted-foreground transition-colors">
              Log in
            </a>
            <Button className="bg-cta hover:bg-cta/90 text-cta-foreground rounded-full px-5">
              Try free
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
