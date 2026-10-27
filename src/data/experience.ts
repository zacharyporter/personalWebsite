export type Role = {
  title: string;
  company: string;
  industry: string;
  // e.g. "2024 — Present"; omitted roles render without a date range
  period?: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experience: Role[] = [
  {
    title: "Senior Software Engineer",
    company: "PNC",
    industry: "Banking & Financial Services",
    period: "Present",
    current: true,
    summary:
      "Engineer on PNC's Content Management System (CMS) platform — the shared service engineering teams across the bank use to store, retain, and view documents.",
    highlights: [
      "Help engineering teams across the bank onboard to and integrate with the CMS platform for document storage, retention, and viewing.",
      "Support records retention in a regulated banking environment, where documents must be kept, governed, and disposed of according to policy.",
      "Act as a platform partner to consuming teams — guiding integration design and making the platform easier to adopt.",
    ],
    stack: [
      "Enterprise Content Management",
      "Document Storage",
      "Records Retention",
      "Document Viewing",
      "Platform Integrations",
    ],
  },
  {
    title: "Software Engineer — Salesforce",
    company: "Parker Hannifin",
    industry: "Manufacturing",
    summary:
      "Built the integrations and automations connecting Salesforce to the rest of the enterprise.",
    highlights: [
      "Built a Salesforce ↔ LinkedIn Sales Navigator integration that routes thousands of prospective customers to Parker's sales teams.",
      "Delivered a pipeline capturing conversational data from Salesforce and sending it to Qualtrics for customer-sentiment analysis.",
    ],
    stack: ["Salesforce", "Apex", "LWC", "REST/SOAP APIs", "Qualtrics"],
  },
  {
    title: "Automation Engineer",
    company: "Parker Hannifin",
    industry: "Manufacturing",
    period: "2 years",
    summary:
      "Designed robotic process automations and software solutions that streamlined operations across multiple divisions.",
    highlights: [
      "Automated a manual, multi-team approval process for provisioning CRM users, significantly cutting turnaround time.",
      "Built a centralized, version-controlled Document Management System for standard work documentation.",
    ],
    stack: ["RPA", "SharePoint", "Power Apps", "Power Automate"],
  },
];
