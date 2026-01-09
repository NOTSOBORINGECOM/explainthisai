import { AlertTriangle, CheckCircle2, HelpCircle, FileText } from "lucide-react";

const Demo = () => {
  return (
    <section id="demo" className="section-spacing bg-muted/30">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            See it in action
          </h2>
          <p className="text-lg text-muted-foreground">
            Here's how ExplainThis AI breaks down a standard Non-Disclosure Agreement.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input side */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium text-foreground">Original Document</span>
                <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded">NDA excerpt</span>
              </div>
              <div className="bg-card rounded-xl border border-border p-6 h-full">
                <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                  "The Receiving Party agrees to hold and maintain the Confidential Information 
                  in strict confidence for the sole and exclusive benefit of the Disclosing Party. 
                  The Receiving Party shall not, without the prior written approval of the Disclosing Party, 
                  use for the Receiving Party's own benefit, publish, copy, or otherwise disclose to others, 
                  or permit the use by others for their benefit or to the detriment of the Disclosing Party, 
                  any Confidential Information. The Receiving Party shall return to the Disclosing Party 
                  any and all records, notes, and other written, printed, or tangible materials in its 
                  possession pertaining to Confidential Information immediately upon written request..."
                </p>
              </div>
            </div>

            {/* Output side */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-trust" />
                <span className="font-medium text-foreground">Clear Explanation</span>
              </div>
              <div className="space-y-4">
                {/* TL;DR */}
                <div className="bg-card rounded-xl border border-border p-5">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">TL;DR</div>
                  <p className="text-foreground">
                    You're promising to keep their confidential information secret and only use it 
                    for their benefit, not yours or anyone else's.
                  </p>
                </div>

                {/* Obligations */}
                <div className="bg-secondary rounded-xl border border-border p-5">
                  <div className="text-xs font-semibold text-secondary-foreground uppercase tracking-wide mb-2">Your Obligations</div>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      Keep all confidential information completely secret
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      Don't use the information for your own benefit
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      Return all materials when asked
                    </li>
                  </ul>
                </div>

                {/* Red Flags */}
                <div className="bg-warning/5 rounded-xl border border-warning/20 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-warning" />
                    <span className="text-xs font-semibold text-warning uppercase tracking-wide">Red Flag</span>
                  </div>
                  <p className="text-foreground text-sm">
                    No time limit specified. This NDA could bind you indefinitely. 
                    Most standard NDAs expire after 2-5 years.
                  </p>
                </div>

                {/* Questions */}
                <div className="bg-trust/5 rounded-xl border border-trust/20 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <HelpCircle className="w-4 h-4 text-trust" />
                    <span className="text-xs font-semibold text-trust uppercase tracking-wide">Questions to Ask</span>
                  </div>
                  <ul className="space-y-1 text-foreground text-sm">
                    <li>• How long does this NDA last?</li>
                    <li>• What exactly counts as "Confidential Information"?</li>
                    <li>• Can I discuss publicly available information?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
