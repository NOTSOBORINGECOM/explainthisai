import { AlertCircle, Clock, DollarSign, HelpCircle } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Walls of legal jargon",
    description: "Terms like \"indemnification\" and \"force majeure\" weren't written to be understood."
  },
  {
    icon: HelpCircle,
    title: "Fear of missing something",
    description: "That nagging feeling that there's a clause that could come back to haunt you."
  },
  {
    icon: Clock,
    title: "No time to research",
    description: "Googling every confusing term takes hours. You have other things to do."
  },
  {
    icon: DollarSign,
    title: "Lawyers are expensive",
    description: "Paying $300/hour for someone to explain basic terms doesn't make sense."
  }
];

const Problem = () => {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
            Documents are designed to confuse you
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            We've all been there. A contract lands in your inbox. You start reading. 
            By paragraph three, you're lost. So you scroll to the bottom and sign anyway.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-border/80 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <problem.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">{problem.title}</h3>
                  <p className="text-muted-foreground text-sm">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-foreground font-medium italic">
            "I just need to know what I'm actually agreeing to."
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            — Every person who's ever signed something important
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
