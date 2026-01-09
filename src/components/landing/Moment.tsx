const Moment = () => {
  return (
    <section className="section-spacing">
      <div className="container-narrow">
        <div className="text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            The moment that matters
          </div>
          
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8 text-balance">
            Right before you agree
          </h2>
        </div>

        <div className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-sm">
          <div className="max-w-2xl mx-auto space-y-6 text-center">
            <p className="text-lg text-foreground leading-relaxed">
              You're about to sign an NDA. Accept a job offer. Agree to a vendor contract. 
              Subscribe to a service. Buy insurance.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              There's a pause. A moment of hesitation. A quiet voice asking:
            </p>

            <blockquote className="text-2xl md:text-3xl font-serif text-foreground italic py-4">
              "Am I missing something important?"
            </blockquote>

            <p className="text-lg text-muted-foreground leading-relaxed">
              That's the moment ExplainThis AI is built for.
            </p>

            <div className="pt-6 border-t border-border mt-8">
              <p className="text-foreground font-medium">
                We're not here to tell you what to do.
              </p>
              <p className="text-muted-foreground mt-2">
                We're here to make sure you understand what you're agreeing to—
                <span className="text-foreground"> so you can decide for yourself.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Moment;
