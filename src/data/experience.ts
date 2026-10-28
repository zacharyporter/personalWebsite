export type Role = {
  title: string;
  company: string;
  industry: string;
  // e.g. "2024 to present"; omitted roles render without a date range
  period?: string;
  // the short year range shown in the home page's career list
  years: string;
  location?: string;
  division?: string;
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
    period: "September 2026 to present",
    years: "2026",
    location: "Cleveland, OH",
    current: true,
    summary:
      "Technical consultant for PNC's FileNet Content Management System, the platform engineering teams across the bank use to store, retain, and view documents.",
    highlights: [
      "Guide internal engineering teams as they connect to and build software on the FileNet platform.",
      "Build out the consumer experience for teams adopting FileNet, creating guidance and standards that help them deliver efficient, secure software.",
    ],
    stack: [
      "FileNet",
      "Enterprise Content Management",
      "Records Retention",
      "Platform Integrations",
    ],
  },
  {
    title: "IT Associate, Software Engineer",
    company: "Parker Hannifin",
    industry: "Manufacturing",
    period: "July 2025 to September 2026",
    years: "2025 to 2026",
    location: "Parker HQ, Cleveland, OH",
    summary:
      "Built Salesforce Sales Cloud solutions and the integrations connecting Salesforce to the rest of the enterprise.",
    highlights: [
      "Designed, developed, and implemented technical solutions for Salesforce Sales Cloud initiatives, and contributed to migration and deployment work in a Salesforce GovCloud environment.",
      "Built a data integration on Microsoft Azure that extracts Salesforce data, cleans the text in a Python Azure Function App, and feeds it to Qualtrics for sentiment analysis.",
      "Led multiple integrations between Salesforce and external tools such as LinkedIn Sales Navigator.",
    ],
    stack: ["Salesforce", "Apex", "GovCloud", "Azure Functions", "Python", "Qualtrics"],
  },
  {
    title: "IT Leadership Development Associate, Software Automation Engineer",
    company: "Parker Hannifin",
    industry: "Manufacturing",
    division: "Hydraulic Aerospace Filtration Division",
    period: "January 2025 to July 2025",
    years: "2025",
    location: "Toledo, OH",
    summary:
      "Automated production workflows for a division generating over $200M in annual revenue.",
    highlights: [
      "Built a Document Management System on the Power Platform, a centralized repository and foundation for future automation.",
      "Automated ERP processes in the line-to-ship process, cutting cycle time by 45 seconds per part.",
    ],
    stack: ["Power Platform", "ERP Automation", "SharePoint"],
  },
  {
    title: "IT Leadership Development Associate, Software Automation Engineer",
    company: "Parker Hannifin",
    industry: "Manufacturing",
    division: "Noise Vibration and Harshness Division",
    period: "July 2024 to January 2025",
    years: "2024",
    location: "Erie, PA",
    summary:
      "Automated user management and reporting for the division's engineering and quality teams.",
    highlights: [
      "Designed a Python automation that streamlines user creation and role management for a PLM tool, cutting manual provisioning and deprovisioning.",
      "Created a Power Automate workflow for weekly Engineering and Quality reports on work completion and application status.",
      "Built a Power BI report of the division's IT infrastructure to help align strategy.",
    ],
    stack: ["Python", "Power Automate", "Power BI", "PLM"],
  },
  {
    title: "IT Leadership Development Associate, Software Developer",
    company: "Parker Hannifin",
    industry: "Manufacturing",
    period: "June 2023 to July 2024",
    years: "2023 to 2024",
    location: "Parker HQ, Cleveland, OH",
    summary:
      "Built archiving, automation, and documentation tools for the enterprise CRM team.",
    highlights: [
      "Designed and engineered an enterprise-scale archive of a legacy CRM system using Azure and Oracle APIs, ensuring long-term retention and access.",
      "Developed a Python RPA solution on ServiceNow APIs that automates CRM user creation requests, saving the team $20,000 annually.",
      "Built a centralized Power App for the team's infrastructure documentation.",
    ],
    stack: ["Python", "RPA", "ServiceNow APIs", "Azure", "Oracle APIs", "Power Apps"],
  },
];
