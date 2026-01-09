import { XCircle, Scale, Gavel, Database } from "lucide-react";

const boundaries = [
  {
    icon: Scale,
    title: "Not legal advice",
    description: "We explain documents—we don't tell you what to do. Always consult a lawyer for legal decisions."
  },
  {
    icon: Gavel,
    title: "Not a substitute for lawyers",
    description: "For complex negotiations, disputes, or high-stakes contracts, you need a real attorney."
  },
  {
    icon: XCircle,
    title: "No judgments or assumptions",
    description: "We present what the document says, neutrally. We don't assume your situation or context."
  },
  {
    icon: Database,
    title: "No document storage",
    description: "Your documents are processed and immediately discarded. We never store your sensitive information."
  }
];

const WhatItDoesNot = () => {
  return (
    <section className="section-spacing">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            What ExplainThis AI does <span className="text-muted-foreground">not</span> do
          </h2>
          <p className="text-lg text-muted-foreground">
            We believe in clear boundaries. Here's what we explicitly don't do—and why that makes us more trustworthy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {boundaries.map((item, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Being clear about our limits isn't a weakness—<span className="text-foreground font-medium">it's how we earn your trust.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatItDoesNot;
