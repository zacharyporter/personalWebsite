export type Project = {
  slug: string;
  name: string;
  description: string;
  // where the work was done, e.g. a division or office
  where: string;
  year: string;
  stack: string[];
  href?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "salesforce-qualtrics-integration",
    name: "Salesforce to Qualtrics sentiment pipeline",
    description:
      "Extracts conversational data from Salesforce, cleans and processes the text in a Python Azure Function App, and delivers it to Qualtrics for sentiment analysis, giving the business deeper insight into customer experience.",
    where: "Parker HQ",
    year: "2025 to 2026",
    stack: ["Salesforce", "Azure Functions", "Python", "Qualtrics"],
    featured: true,
  },
  {
    slug: "salesforce-linkedin-sales-navigator",
    name: "Salesforce and LinkedIn Sales Navigator integration",
    description:
      "Connects Salesforce with LinkedIn Sales Navigator so thousands of prospective customers reach Parker's sales teams more efficiently.",
    where: "Parker HQ",
    year: "2025 to 2026",
    stack: ["Salesforce", "Apex", "REST APIs", "LinkedIn Sales Navigator"],
    featured: true,
  },
  {
    slug: "erp-line-to-ship-automation",
    name: "Line-to-ship ERP automation",
    description:
      "Automated ERP steps in the line-to-ship process, reducing manual input and cutting cycle time by 45 seconds per part.",
    where: "Hydraulic Aerospace Filtration Division",
    year: "2025",
    stack: ["ERP", "Workflow Automation"],
  },
  {
    slug: "document-management-system",
    name: "Document Management System",
    description:
      "A centralized, version-controlled repository on the Power Platform for operations generating over $200M in annual revenue, and the foundation for future automation.",
    where: "Hydraulic Aerospace Filtration Division",
    year: "2025",
    stack: ["Power Apps", "Power Automate", "SharePoint"],
  },
  {
    slug: "crm-user-form-automation",
    name: "CRM user provisioning RPA",
    description:
      "A Python RPA solution on ServiceNow APIs that automates CRM user creation requests, replacing a manual, multi-team approval process and saving $20,000 a year.",
    where: "Parker HQ",
    year: "2023 to 2024",
    stack: ["Python", "RPA", "ServiceNow APIs"],
    featured: true,
  },
  {
    slug: "legacy-crm-archive",
    name: "Legacy CRM archive",
    description:
      "Archives data from a legacy CRM system at enterprise scale, keeping it retained and accessible long term.",
    where: "Parker HQ",
    year: "2023 to 2024",
    stack: ["Azure", "Oracle APIs"],
  },
];
