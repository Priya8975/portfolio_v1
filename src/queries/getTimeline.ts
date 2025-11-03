// // queries/getTimeline.ts
// import datoCMSClient from './datoCMSClient';
// import { TimelineItem } from '../types';

// const GET_TIMELINE = `
// {
//   allTimelines {
//    	name
//     timelineType
//     title
//     techStack
//     summaryPoints
//     dateRange
//   }
// }
// `;

// export async function getTimeline(): Promise<TimelineItem[]> {
//   const data = await datoCMSClient.request<{ allTimelines: TimelineItem[] }>(GET_TIMELINE);
//   return data.allTimelines;
// }


// src/queries/getTimeline.ts
// Local static data replacing DatoCMS GraphQL fetch

export async function getTimeline() {
  return [
    {
      name: "Stony Brook University",
      timelineType: "work" as const,
      title: "Graduate Research Assistant",
      techStack: "Python, NumPy, SciPy, scikit-learn, PyTorch, TensorFlow",
      summaryPoints: [
        "I work on applying machine learning to EMI terminal modeling to better predict source impedance and understand signal behavior in power electronics. I build Python pipelines to clean data, train models, and validate results, using FFT/IFFT to make EMI analysis and signal reconstruction more efficient. I’m also using PyTorch and TensorFlow for image-classification tasks related to power electronics.",
       
      ],
      dateRange: "July 2025 – Present",
    },
    {
      name: "Knot Standard",
      timelineType: "work" as const,
      title: "Junior Accountant",
      techStack: "QuickBooks, Excel",
      summaryPoints: [
        "Processed vendor invoices and expense reports ensuring timely and accurate payments.",
        "Performed bank reconciliations and maintained detailed documentation for audit readiness.",
      ],
      dateRange: "2022 – 2024",
    },
    {
      name: "Atalian Global Services",
      timelineType: "work" as const,
      title: "Accounts Payable Assistant",
      techStack: "SAP, Excel",
      summaryPoints: [
        "Streamlined invoice processing and vendor reconciliations improving cycle time by 15%.",
        "Assisted with payroll accruals and monthly close activities.",
      ],
      dateRange: "2020 – 2022",
    },
    {
      name: "Yes Bank Ltd.",
      timelineType: "work" as const,
      title: "Assistant Manager – Corporate Banking",
      techStack: "Oracle JDE, Excel, Power BI",
      summaryPoints: [
        "Managed corporate client portfolios, optimizing cash flow and investment operations.",
        "Prepared financial performance reports and ensured compliance with RBI standards.",
      ],
      dateRange: "2018 – 2020",
    },
    {
      name: "University of Rochester",
      timelineType: "education" as const,
      title: "Master’s in Business Analytics",
      techStack: "Python, Tableau, SQL, Excel",
      summaryPoints: [
        "Developed analytical models for financial forecasting and demand prediction.",
        "Specialized in quantitative decision-making and data-driven strategy.",
      ],
      dateRange: "2023 – 2024",
    },
    {
      name: "NMIMS University",
      timelineType: "education" as const,
      title: "Bachelor of Business Administration",
      techStack: "Finance, Accounting, Business Strategy",
      summaryPoints: [
        "Graduated with distinction focusing on accounting and financial management.",
        "Led multiple case study projects and entrepreneurship initiatives.",
      ],
      dateRange: "2015 – 2018",
    },
  ];
}