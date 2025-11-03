// // queries/getProjects.ts
// import datoCMSClient from './datoCMSClient';
// import { Project } from '../types';

// const GET_PROJECTS = `
//   query {
//     allProjects(orderBy: title_ASC) {
//       title
//       description
//       techUsed
//       image {
//         url
//       }
//     }
//   }
// `;

// export async function getProjects(): Promise<Project[]> {
//   const data = await datoCMSClient.request<{ allProjects: Project[] }>(GET_PROJECTS);
//   return data.allProjects;
// }



// src/queries/getProjects.ts
// Local static data replacing DatoCMS GraphQL fetch

export async function getProjects() {
  return [
    {
      title: "Personal Portfolio Website",
      description:
        "A modern portfolio site built with React and TypeScript, showcasing my projects, skills, and experience with responsive design and smooth animations.",
      techUsed: "React, TypeScript, Tailwind CSS",
      image: { url: "/imagesp/utilisation.png" }, // place this image in public/images
    },
    {
      title: "Data Dashboard",
      description:
        "An analytics dashboard for visualizing key metrics using interactive charts and dynamic filters. Focused on performance optimization and clean UI.",
      techUsed: "React, Chart.js, Redux",
      image: { url: "/imagesp/utilisation.png" },
    },
    {
      title: "E-Commerce Product Page",
      description:
        "A responsive single-page product layout with add-to-cart functionality, reviews, and filtering system. Built for an optimized mobile-first experience.",
      techUsed: "React, CSS Modules, Firebase",
      image: { url: "/imagesp/utilisation.png" },
    },
  ];
}