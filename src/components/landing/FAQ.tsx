import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this legal advice?",
    answer: "No. ExplainThis AI explains documents in plain language—it does not provide legal advice. We help you understand what a document says, not what you should do about it. For legal decisions, always consult a qualified attorney in your jurisdiction."
  },
  {
    question: "Are my documents stored?",
    answer: "No. Documents are processed in memory and immediately deleted after generating your explanation. We don't store your documents, we don't log them, and we never use them for training. Your sensitive information never touches our storage systems."
  },
  {
    question: "What types of documents work best?",
    answer: "ExplainThis AI works well with contracts, NDAs, offer letters, employment agreements, terms of service, privacy policies, insurance documents, lease agreements, and any text-heavy document with complex language. It's less suited for technical specifications, financial models, or documents that require visual interpretation."
  },
  {
    question: "How accurate are the explanations?",
    answer: "Our AI is highly accurate at identifying key terms, obligations, and potential concerns in standard documents. However, no AI is perfect. We always recommend using ExplainThis AI as a starting point for understanding, not as a definitive legal interpretation. When in doubt, consult a professional."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. All paid plans can be cancelled with one click from your account settings. There are no cancellation fees, no hidden terms, and no hoops to jump through. When you cancel, you keep access until the end of your billing period."
  },
  {
    question: "What if the explanation is wrong?",
    answer: "If you believe an explanation is incorrect, please let us know through our feedback system. We take accuracy seriously and continuously improve our AI. However, please remember that ExplainThis AI is a tool to aid understanding—for important decisions, always verify with a qualified professional."
  },
  {
    question: "Do you support languages other than English?",
    answer: "Currently, ExplainThis AI works best with English documents. We're working on expanding language support. Documents in other languages may still work, but accuracy may vary."
  },
  {
    question: "Can I use this for my business or team?",
    answer: "Yes. Our Unlimited plan includes API access and is suitable for individuals and small teams. For larger organizations with specific needs, contact us to discuss enterprise options."
  }
];

const FAQ = () => {
  return (
    <section className="section-spacing">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Answers to the questions we hear most often.
          </p>
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
