import { Shield, Lock, Eye, Trash2 } from "lucide-react";

const privacyFeatures = [
  {
    icon: Lock,
    title: "End-to-end encryption",
    description: "Your documents are encrypted in transit. We use industry-standard TLS encryption."
  },
  {
    icon: Trash2,
    title: "Immediate deletion",
    description: "Documents are processed and immediately deleted. We don't store your sensitive information."
  },
  {
    icon: Eye,
    title: "No human review",
    description: "Your documents are never seen by humans. Only our AI processes your text."
  },
  {
    icon: Shield,
    title: "No training on your data",
    description: "We don't use your documents to train our models. Your information stays yours."
  }
];

const Privacy = () => {
  return (
    <section className="section-spacing">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <Shield className="w-4 h-4 text-trust" />
            <span className="text-sm font-medium text-foreground">Privacy first</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Your documents are sensitive. We know.
          </h2>
          <p className="text-lg text-muted-foreground">
            We built ExplainThis AI with privacy as a core principle, not an afterthought.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {privacyFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-trust/10 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-trust" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-2xl mx-auto bg-muted/50 rounded-xl p-6 border border-border">
          <p className="text-center text-muted-foreground">
            <span className="text-foreground font-medium">In plain English:</span> We see your document 
            just long enough to explain it, then we forget it ever existed. No logs. No storage. No exceptions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
