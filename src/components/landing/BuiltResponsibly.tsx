import { Shield, Mail, Heart } from "lucide-react";

const BuiltResponsibly = () => {
  return (
    <section className="py-12 border-t border-border">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border mb-4">
            <Heart className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Built responsibly</span>
          </div>
          
          <div className="space-y-3 text-muted-foreground">
            <p>
              ExplainThis AI is for understanding documents, not legal advice.
            </p>
            <p>
              We built this for freelancers, founders, and anyone tired of legal jargon.
            </p>
            <div className="flex items-center justify-center gap-2 pt-2">
              <Mail className="w-4 h-4" />
              <a 
                href="mailto:support@explainthis.ai" 
                className="text-foreground hover:text-cta transition-colors"
              >
                support@explainthis.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltResponsibly;
