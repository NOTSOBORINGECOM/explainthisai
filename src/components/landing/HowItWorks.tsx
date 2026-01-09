import { FileText, Sparkles, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: FileText,
    title: "Paste or upload",
    description: "Copy text from any document or upload a PDF."
  },
  {
    number: "2",
    icon: Sparkles,
    title: "Click explain",
    description: "We analyze the entire document in seconds."
  },
  {
    number: "3",
    icon: CheckCircle2,
    title: "Get clarity",
    description: "TL;DR, obligations, red flags, and questions to ask."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
            How it works
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <span className="text-xl font-bold text-primary">{step.number}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 right-0 w-1/3 h-px bg-border translate-x-full" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground">
            If something looks risky, <span className="text-foreground font-medium">you'll know exactly what to ask or negotiate next.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
