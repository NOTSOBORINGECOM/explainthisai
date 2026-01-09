import { Check, X } from "lucide-react";

const forList = [
  {
    title: "Freelancers & Contractors",
    description: "Reviewing client contracts, NDAs, and scope agreements before signing"
  },
  {
    title: "Founders & Business Owners",
    description: "Understanding vendor terms, partnership agreements, and investor documents"
  },
  {
    title: "Employees",
    description: "Making sense of offer letters, employment contracts, and non-competes"
  },
  {
    title: "Consumers",
    description: "Decoding insurance policies, subscription terms, and financial agreements"
  }
];

const notForList = [
  "People seeking legal advice for specific situations",
  "Court disputes or legal proceedings",
  "Jurisdiction-specific legal interpretations",
  "Contract drafting or negotiation"
];

const WhoItsFor = () => {
  return (
    <section className="section-spacing">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Who this is for
          </h2>
          <p className="text-lg text-muted-foreground">
            ExplainThis AI is for anyone who wants to understand before they agree.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* For */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-trust/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-trust" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Perfect for</h3>
              </div>
              <div className="space-y-4">
                {forList.map((item, index) => (
                  <div key={index} className="bg-card rounded-xl border border-border p-5">
                    <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Not for */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <X className="w-4 h-4 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Not designed for</h3>
              </div>
              <div className="bg-muted/50 rounded-xl border border-border p-6">
                <ul className="space-y-4">
                  {notForList.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <X className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    For these situations, we recommend consulting with a qualified attorney in your jurisdiction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
