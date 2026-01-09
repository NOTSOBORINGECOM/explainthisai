import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this legal advice?",
    answer: "No. ExplainThis AI explains documents in plain language—it does not provide legal advice. We help you understand what a document says, not what you should do. For legal decisions, consult a qualified attorney."
  },
  {
    question: "Are my documents stored?",
    answer: "Not unless you choose to save them. Documents are processed and immediately deleted. Paid users can optionally save explanations to their history."
  },
  {
    question: "What documents work best?",
    answer: "NDAs, offer letters, employment contracts, vendor agreements, terms of service, privacy policies, insurance documents, and lease agreements. Anything text-heavy with complex language."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. All paid plans can be cancelled with one click. No fees, no hoops. You keep access until the end of your billing period."
  },
  {
    question: "What if it misses something?",
    answer: "ExplainThis AI is for understanding, not definitive interpretation. For high-stakes contracts or complex negotiations, we always recommend professional review. Think of us as the first step, not the last."
  },
  {
    question: "Do I need to remove names and details?",
    answer: "Optional, but recommended for your comfort. The explanation works the same either way. Removing sensitive details can give you extra peace of mind."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Frequently asked questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`faq-${index}`}
              className="bg-card rounded-xl border border-border px-6 data-[state=open]:bg-muted/30"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
