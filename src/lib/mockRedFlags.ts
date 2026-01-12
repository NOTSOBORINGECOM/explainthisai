export interface RedFlag {
  id: string;
  severity: "high" | "medium" | "low";
  category: string;
  title: string;
  summary: string;
  excerpt: string;
}

export const mockRedFlags: RedFlag[] = [
  {
    id: "1",
    severity: "high",
    category: "Non-compete",
    title: "Extremely broad non-compete clause",
    summary: "24-month restriction with unlimited geographic scope could severely limit your future opportunities.",
    excerpt: "for a period of twenty-four (24) months thereafter, the Receiving Party shall not directly or indirectly engage in any business that competes"
  },
  {
    id: "2",
    severity: "high",
    category: "IP Assignment",
    title: "Overly broad IP assignment",
    summary: "Claims ownership of ALL your inventions, even unrelated ones made on your own time.",
    excerpt: "All inventions, discoveries, and improvements made by the Receiving Party during the term of this Agreement, whether or not related to the Disclosing Party's business"
  },
  {
    id: "3",
    severity: "high",
    category: "Termination",
    title: "Substantial termination penalty",
    summary: "Early exit costs you 6 months of fees—common pressure tactic to lock you in.",
    excerpt: "a termination fee equal to six (6) months of consulting fees shall be payable within 30 days"
  },
  {
    id: "4",
    severity: "medium",
    category: "Auto-renewal",
    title: "Auto-renewal with long notice period",
    summary: "Renews automatically; you need 90 days notice to cancel or you're locked in another year.",
    excerpt: "automatically renew for successive one-year periods unless terminated by either party with ninety (90) days written notice"
  },
  {
    id: "5",
    severity: "medium",
    category: "Liability",
    title: "Extreme liability cap",
    summary: "Their maximum liability is only $100—essentially zero protection for you if something goes wrong.",
    excerpt: "total liability under this Agreement shall not exceed $100, regardless of the nature of the claim"
  },
  {
    id: "6",
    severity: "medium",
    category: "Amendment",
    title: "One-sided amendment rights",
    summary: "They can change the terms anytime with just written notice—you have no say.",
    excerpt: "reserves the right to modify the terms of this Agreement at any time with written notice"
  },
  {
    id: "7",
    severity: "high",
    category: "Data Privacy",
    title: "Broad data sharing permissions",
    summary: "Allows sharing your personal data with third parties for marketing without clear consent.",
    excerpt: "permission to collect, store, and share any personal data with third-party partners for marketing purposes"
  },
  {
    id: "8",
    severity: "medium",
    category: "Dispute",
    title: "Unfavorable arbitration terms",
    summary: "Disputes resolved where they choose, and you pay all costs—stacked against you.",
    excerpt: "binding arbitration in the jurisdiction of the Disclosing Party's choosing, with the Receiving Party bearing all costs"
  }
];
