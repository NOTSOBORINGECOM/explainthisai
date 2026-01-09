import { Shield, Lock, Eye, Trash2 } from "lucide-react";

const privacyPoints = [
  "We don't sell your data.",
  "We don't use your documents to train public models.",
  "We only store documents if you click Save (paid feature).",
  "You can delete your history anytime."
];

const Privacy = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-trust/10 border border-trust/20 mb-4">
              <Shield className="w-4 h-4 text-trust" />
              <span className="text-sm font-medium text-trust">Privacy first</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
              Your documents are sensitive. We know.
            </h2>
            <p className="text-muted-foreground">
              We built ExplainThis AI with privacy as a core principle.
            </p>
          </div>

          <div className="bg-card rounded-xl border border-border p-6 md:p-8">
            <ul className="space-y-4">
              {privacyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-trust mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">For extra safety:</span> Remove names and numbers—ExplainThis AI still works perfectly.
              </p>
            </div>

            <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                <span>TLS encryption</span>
              </div>
              <span className="text-border">•</span>
              <div className="flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" />
                <span>No human review</span>
              </div>
              <span className="text-border">•</span>
              <div className="flex items-center gap-1.5">
                <Trash2 className="w-3.5 h-3.5" />
                <span>Immediate deletion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
