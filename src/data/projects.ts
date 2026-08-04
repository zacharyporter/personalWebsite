export type Project = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  context?: string;
  href?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "salesforce-linkedin-sales-navigator",
    name: "Salesforce ↔ LinkedIn Sales Navigator Integration",
    description:
      "Built an integration connecting Salesforce with LinkedIn Sales Navigator, enabling thousands of prospective customers to be routed to Parker's sales teams more efficiently.",
    stack: ["Salesforce", "Apex", "REST APIs", "LinkedIn Sales Navigator"],
    context: "Parker Hannifin",
    featured: true,
  },
  {
    slug: "crm-user-form-automation",
    name: "CRM User Form Automation",
    description:
      "Designed an RPA solution that automated a previously manual, multi-team approval process for provisioning CRM users, significantly cutting turnaround time.",
    stack: ["RPA", "Business Process Automation"],
    context: "Parker Hannifin",
    featured: true,
  },
  {
    slug: "salesforce-qualtrics-integration",
    name: "Salesforce → Qualtrics Sentiment Integration",
    description:
      "Implemented an integration that captures conversational data from Salesforce and delivers it to Qualtrics for sentiment analysis, giving the business deeper insight into customer experience.",
    stack: ["Salesforce", "Apex", "Qualtrics", "REST APIs"],
    context: "Parker Hannifin",
    featured: true,
  },
];
