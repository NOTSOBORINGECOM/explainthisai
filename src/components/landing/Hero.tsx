import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Shield, ArrowRight, Lightbulb, Globe } from "lucide-react";

const Hero = () => {
  const [documentText, setDocumentText] = useState("");
  const navigate = useNavigate();

  const handleExplain = () => {
    // Navigate to /try page
    navigate("/try");
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center">
          {/* Privacy Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-8 animate-fade-up">
            <Shield className="w-4 h-4 text-slate-500" />
            <span className="text-sm text-slate-600">Your documents stay private. Always.</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Understand any document</span>
            <br />
            <span className="text-slate-400">before you sign it</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up leading-relaxed" style={{ animationDelay: "0.15s" }}>
            Paste a contract, offer letter, or policy. Get a clear, plain-English explanation of what you're agreeing to—obligations, risks, and questions to ask.
          </p>

          {/* Input Card */}
          <div className="max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 overflow-hidden">
              {/* Textarea Area */}
              <div className="relative p-4 pb-2">
                <textarea
                  value={documentText}
                  onChange={(e) => setDocumentText(e.target.value)}
                  placeholder="Paste your document text here..."
                  className="w-full h-32 md:h-36 bg-transparent text-foreground placeholder:text-slate-400 resize-none focus:outline-none text-base leading-relaxed"
                />
                {/* Small Icons */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center">
                    <Lightbulb className="w-3.5 h-3.5 text-teal-600" />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center">
                    <Globe className="w-3.5 h-3.5 text-amber-600" />
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex items-center justify-between px-4 py-3 border-t border-slate-100">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <FileText className="w-4 h-4" />
                  <span>Or upload a file</span>
                </div>
                <Button 
                  onClick={handleExplain}
                  className="bg-cta hover:bg-cta/90 text-cta-foreground rounded-lg px-6 py-2.5 h-auto font-medium"
                >
                  Explain this
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Trust Row */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-8 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            <span className="flex items-center gap-2 text-sm text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              No signup required
            </span>
            <span className="flex items-center gap-2 text-sm text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Documents never stored
            </span>
            <span className="flex items-center gap-2 text-sm text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Not legal advice
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
