import { FileText, Sparkles, CheckCircle2, MessageSquare } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Paste your document",
    description: "Copy and paste text from any contract, agreement, policy, or complex email. Or upload a PDF."
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Click 'Explain this'",
    description: "Our AI reads and analyzes the entire document in seconds, not hours."
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Get a clear breakdown",
    description: "Receive a structured explanation in plain English that actually makes sense."
  }
];

const outputSections = [
  {
    label: "TL;DR",
    description: "A 2-3 sentence summary of what this document is really about",
    color: "bg-secondary"
  },
  {
    label: "Your Obligations",
    description: "What you're committing to do (or not do)",
    color: "bg-muted"
  },
  {
    label: "Risks & Red Flags",
    description: "Unusual clauses, potential issues, things to watch out for",
    color: "bg-warning/10"
  },
  {
    label: "Questions to Ask",
    description: "Smart follow-ups before you sign",
    color: "bg-trust/10"
  }
];

const HowItWorks = () => {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground">
            From confusion to clarity in under a minute.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-5xl font-bold text-muted/60 mb-4">{step.number}</div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{step.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 w-1/3 h-px bg-border translate-x-1/2" />
              )}
            </div>
          ))}
        </div>

        {/* Output structure */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              What you'll get
            </h3>
            <p className="text-muted-foreground">
              Every explanation is structured the same way, so you always know where to look.
            </p>
          </div>

          <div className="space-y-3">
            {outputSections.map((section, index) => (
              <div 
                key={index}
                className={`${section.color} rounded-xl p-5 border border-border`}
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 font-semibold text-foreground">{section.label}</span>
                  <span className="text-muted-foreground">{section.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
