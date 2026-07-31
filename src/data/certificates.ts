export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  certificateNo: string;
  creditHours?: number;
  image: string;
  pdfUrl?: string;
  badge?: string;
  skills: string[];
  description: string;
  partners?: string[];
  verifyUrl?: string;
}

export const certificates: Certificate[] = [
  {
    id: "dlytica-data-analytics-ai-2026",
    title: "Data Analytics with AI Workshop",
    issuer: "DLYTICA Academy",
    issueDate: "2026-07-25",
    certificateNo: "DLYWS-139-2026",
    creditHours: 3,
    image: "/anupam-baral-certificate.png",
    pdfUrl: "/ANUPAM BARAL.png.pdf",
    badge: "ISO 27001:2022 Certified",
    skills: ["Data Analytics", "Artificial Intelligence", "Python Data Pipelines", "Machine Learning"],
    description: "Certificate of Participation for completing the intensive live workshop on Data Analytics with AI, covering predictive modeling, automated analytics workflows, and AI integration.",
    partners: [
      "IIMS College",
      "Academia International College",
      "Sunway College Kathmandu",
      "Kantipur Engineering College",
      "CSIT Association of Nepal",
      "CSA",
      "Intern Nepal",
      "Recruit Nepal"
    ]
  },
  {
    id: "dlytica-1-month-data-ai-2026",
    title: "1-Month Data & AI Training Program",
    issuer: "DLYTICA Academy",
    issueDate: "2026-07-10",
    certificateNo: "DLY-001-2026",
    image: "/certification-1-month-workshop.png",
    badge: "ISO 27001:2022 Certified",
    skills: ["Data Analytics", "Artificial Intelligence", "Machine Learning", "Cloud Systems", "Python Data Pipelines"],
    description: "Certificate of Participation and Appreciation for successful completion of the intensive 1-Month Data & AI Training Program at Dlytica Academy.",
  },
  {
    id: "dlytica-1-day-workshop-2026",
    title: "Career Guidance: Data, AI, DevOps & Cybersecurity",
    issuer: "DLYTICA Academy",
    issueDate: "2026-07-10",
    certificateNo: "DLYTICA-011-2026",
    image: "/certification-1-day-workshop.png",
    badge: "ISO 27001:2022 Certified",
    skills: ["Data Analytics", "Artificial Intelligence", "DevOps", "Cybersecurity", "Cloud Infrastructure"],
    description: "Certificate of Participation and Appreciation for completing the specialized career guidance session on Data, AI, DevOps, and Cybersecurity held by Dlytica Academy.",
  }
];
