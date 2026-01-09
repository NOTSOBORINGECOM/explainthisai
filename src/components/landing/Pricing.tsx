import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    whoFor: "Try it out",
    features: [
      "3 documents per month",
      "Up to 3,000 words per document",
      "Basic explanation format",
      "No signup required",
      "No history saved"
    ],
    cta: "Start free",
    variant: "outline" as const,
    highlighted: false
  },
  {
    name: "Pro",
    price: "$12",
    period: "per month",
    whoFor: "For professionals who review documents regularly",
    features: [
      "50 documents per month",
      "Up to 25,000 words per document",
      "Detailed red flags & questions",
      "PDF upload support",
      "30-day history",
      "Priority processing"
    ],
    cta: "Get Pro",
    variant: "cta" as const,
    highlighted: true
  },
  {
    name: "Unlimited",
    price: "$29",
    period: "per month",
    whoFor: "For power users and small teams",
    features: [
      "Unlimited documents",
      "Up to 50,000 words per document",
      "All Pro features",
      "Batch processing",
      "API access",
      "1-year history",
      "Email support"
    ],
    cta: "Get Unlimited",
    variant: "outline" as const,
    highlighted: false
  }
];

const Pricing = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Simple pricing. Peace of mind.
          </h2>
          <p className="text-lg text-muted-foreground">
            Start free. Upgrade when you need more. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-card rounded-2xl p-6 border ${
                plan.highlighted 
                  ? 'border-cta shadow-lg ring-1 ring-cta/20' 
                  : 'border-border'
              }`}
            >
              {plan.highlighted && (
                <div className="text-xs font-semibold text-cta uppercase tracking-wide mb-4">
                  Most popular
                </div>
              )}
              
              <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mt-1 mb-4">{plan.whoFor}</p>
              
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">/{plan.period}</span>
              </div>

              <Button 
                variant={plan.variant} 
                className="w-full mb-6"
                size="lg"
              >
                {plan.cta}
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-trust mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* One-off pack */}
        <div className="mt-10 max-w-xl mx-auto">
          <div className="bg-card rounded-xl border border-border p-5 text-center">
            <p className="text-foreground font-medium">
              Need this once? <span className="text-cta">Get 3 documents for $9</span> — no subscription.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            All prices in USD. Cancel anytime with one click.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
