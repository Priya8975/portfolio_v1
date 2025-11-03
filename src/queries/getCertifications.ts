// // queries/getCertifications.ts
// import datoCMSClient from './datoCMSClient';
// import { Certification } from '../types';

// const GET_CERTIFICATIONS = `
//   query {
//     allCertifications {
//       title
//       issuer
//       issuedDate
//       link
//       iconName
//     }
//   }
// `;

// export async function getCertifications(): Promise<Certification[]> {
//   const data = await datoCMSClient.request<{ allCertifications: Certification[] }>(GET_CERTIFICATIONS);
//   return data.allCertifications;
// }
// src/queries/getCertifications.ts
// Local static data to replace DatoCMS GraphQL fetch

export async function getCertifications() {
  return [
    {
      title: "React Developer Certification",
      issuer: "Meta / Coursera",
      issuedDate: "June 2024",
      link: "https://www.coursera.org/account/accomplishments/certificate/example123",
      iconName: "react", // optional — if your UI uses icons
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      issuedDate: "March 2024",
      link: "https://www.freecodecamp.org/certification/example/javascript-algorithms",
      iconName: "javascript",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      issuedDate: "January 2023",
      link: "https://www.freecodecamp.org/certification/example/responsive-design",
      iconName: "html5",
    },
  ];
}