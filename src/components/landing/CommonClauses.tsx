import { AlertTriangle } from "lucide-react";

const clauses = [
  "Auto-renewal & hidden subscriptions",
  "Termination penalties",
  "Non-compete / exclusivity",
  "Liability caps & indemnity",
  "Late fees & payment timelines",
  "One-sided changes (\"we can update anytime\")",
  "Data sharing & privacy permissions",
  "Refund limitations & dispute clauses"
];

const CommonClauses = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-warning/10 border border-warning/20 mb-4">
            <AlertTriangle className="w-4 h-4 text-warning" />
            <span className="text-sm font-medium text-warning">Common issues we flag</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Clauses we help you spot fast
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {clauses.map((clause, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-warning" />
              {clause}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommonClauses;
