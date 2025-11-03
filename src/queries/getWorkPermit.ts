// // queries/getWorkPermit.ts
// import datoCMSClient from './datoCMSClient';
// import { WorkPermit } from '../types';

// const GET_WORK_PERMIT = `
//   query {
//     workPermit {
//       visaStatus
//       expiryDate
//       summary
//       additionalInfo
//     }
//   }
// `;

// export async function getWorkPermit(): Promise<WorkPermit> {
//   const data = await datoCMSClient.request<{ workPermit: WorkPermit }>(GET_WORK_PERMIT);
//   return data.workPermit;
// }


// src/queries/getWorkPermit.ts
// Local static data replacing DatoCMS GraphQL fetch

// src/queries/getWorkPermit.ts
export async function getWorkPermit() {
  return {
    visaStatus: "F1",
    expiryDate: new Date(" 13 June 2029"),
    summary:
      "",
    additionalInfo:
      "Actively seeking full-time opportunities with a start date of May 2026 and flexible to relocate within the U.S.",
  };
}