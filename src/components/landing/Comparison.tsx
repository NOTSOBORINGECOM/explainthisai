import { Check, Minus, X } from "lucide-react";

const comparisons = [
  {
    method: "Reading alone",
    speed: "slow",
    accuracy: "low",
    cost: "Free",
    issue: "You'll miss things. Jargon is designed to confuse."
  },
  {
    method: "Googling clauses",
    speed: "slow",
    accuracy: "medium",
    cost: "Free",
    issue: "Generic results. Doesn't understand your specific document."
  },
  {
    method: "General AI chatbots",
    speed: "fast",
    accuracy: "medium",
    cost: "Varies",
    issue: "Not specialized for documents. May hallucinate."
  },
  {
    method: "Hiring a lawyer",
    speed: "slow",
    accuracy: "high",
    cost: "$200-500/hr",
    issue: "Overkill for understanding. Great for complex decisions."
  },
  {
    method: "ExplainThis AI",
    speed: "fast",
    accuracy: "high",
    cost: "From $0",
    issue: null
  }
];

const Comparison = () => {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Why ExplainThis AI
          </h2>
          <p className="text-lg text-muted-foreground">
            There are many ways to understand a document. Here's how we compare.
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-medium text-muted-foreground">Method</th>
                <th className="text-center py-4 px-4 font-medium text-muted-foreground">Speed</th>
                <th className="text-center py-4 px-4 font-medium text-muted-foreground">Accuracy</th>
                <th className="text-center py-4 px-4 font-medium text-muted-foreground">Cost</th>
                <th className="text-left py-4 px-4 font-medium text-muted-foreground hidden md:table-cell">The catch</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-border ${item.issue === null ? 'bg-trust/5' : ''}`}
                >
                  <td className="py-4 px-4">
                    <span className={`font-medium ${item.issue === null ? 'text-trust' : 'text-foreground'}`}>
                      {item.method}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    {item.speed === "fast" ? (
                      <Check className="w-5 h-5 text-trust mx-auto" />
                    ) : (
                      <Minus className="w-5 h-5 text-muted-foreground mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {item.accuracy === "high" ? (
                      <Check className="w-5 h-5 text-trust mx-auto" />
                    ) : item.accuracy === "medium" ? (
                      <Minus className="w-5 h-5 text-muted-foreground mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-warning mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-center text-sm text-muted-foreground">
                    {item.cost}
                  </td>
                  <td className="py-4 px-4 text-sm text-muted-foreground hidden md:table-cell">
                    {item.issue || <span className="text-trust font-medium">Built for this exact purpose</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground">
            <span className="text-foreground font-medium">ExplainThis AI isn't a replacement for lawyers</span>—it's 
            the first step before deciding if you need one. Understand first, then decide what to do next.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
