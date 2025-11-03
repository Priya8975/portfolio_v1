// // queries/getContactMe.ts
// import datoCMSClient from './datoCMSClient';
// import { ContactMe } from '../types';

// const GET_CONTACT_ME = `
//   query {
//     contactMe {
//       profilePicture {
//         url
//       }
//       name
//       title
//       summary
//       companyUniversity
//       linkedinLink
//       email
//       phoneNumber
//     }
//   }
// `;

// export async function getContactMe(): Promise<ContactMe> {
//   const data = await datoCMSClient.request<{ contactMe: ContactMe }>(GET_CONTACT_ME);
//   return data.contactMe;
// }
// src/queries/getContactMe.ts
// Local static data replacing DatoCMS GraphQL fetch

// src/queries/getContactMe.ts
// Local static data replacing DatoCMS GraphQL fetch

export async function getContactMe() {
  return {
    profilePicture: { url: "/images/profile.jpg" },
    name: "Priya More",
    title: "Front-End Developer",
    summary:
      "Passionate about building user-friendly, responsive, and accessible web experiences using React, TypeScript, and modern web tools.",
    companyUniversity: "Stony Brook University",
    linkedinLink: "https://www.linkedin.com/in/priyanka-more-a621021b8/",
    email: "priyamore8975@gmail.com",
    phoneNumber: "+1 (516) 509-8900",
  };
}