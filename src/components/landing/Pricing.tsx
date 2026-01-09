import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Try it out. No credit card required.",
    features: [
      "3 document explanations per month",
      "Up to 3,000 words per document",
      "Basic explanation format",
      "No signup required"
    ],
    cta: "Start for free",
    variant: "outline" as const,
    highlighted: false
  },
  {
    name: "Pro",
    price: "$12",
    period: "per month",
    description: "For professionals who review documents regularly.",
    features: [
      "50 document explanations per month",
      "Up to 25,000 words per document",
      "Detailed explanation with red flags",
      "PDF upload support",
      "Explanation history (30 days)",
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
    description: "For power users and small teams.",
    features: [
      "Unlimited explanations",
      "Up to 50,000 words per document",
      "All Pro features",
      "Batch processing",
      "API access",
      "Explanation history (1 year)",
      "Email support"
    ],
    cta: "Get Unlimited",
    variant: "outline" as const,
    highlighted: false
  }
];

const Pricing = () => {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Simple, transparent pricing
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
              <p className="text-muted-foreground text-sm mt-1 mb-4">{plan.description}</p>
              
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

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            All prices in USD. Billed monthly. Cancel anytime with one click.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
