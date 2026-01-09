import { XCircle, Scale, Gavel, Database } from "lucide-react";

const boundaries = [
  {
    icon: Scale,
    title: "Not legal advice",
    description: "We explain documents—we don't tell you what to do."
  },
  {
    icon: Gavel,
    title: "Not a substitute for lawyers",
    description: "For disputes or high-stakes contracts, you need an attorney."
  },
  {
    icon: XCircle,
    title: "No judgments or assumptions",
    description: "We present what the document says, neutrally."
  },
  {
    icon: Database,
    title: "No storage without permission",
    description: "Documents are processed and immediately discarded."
  }
];

const WhatItDoesNot = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
            What ExplainThis AI does <span className="text-muted-foreground">not</span> do
          </h2>
          <p className="text-muted-foreground">
            Clear boundaries make us more trustworthy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {boundaries.map((item, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg"
            >
              <item.icon className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-foreground text-sm">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatItDoesNot;
