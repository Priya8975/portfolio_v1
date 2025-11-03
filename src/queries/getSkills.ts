// // queries/getTimeline.ts
// import datoCMSClient from './datoCMSClient';
// import { Skill } from '../types';

// const GET_SKILLS = `
// {
//   allSkills(orderBy: category_ASC) {
//     name
//     category
//     description
//     icon
//   }
// }
// `;

// export async function getSkills(): Promise<Skill[]> {
//   const data = await datoCMSClient.request<{ allSkills: Skill[] }>(GET_SKILLS);
//   return data.allSkills;
// }


// src/queries/getSkills.ts
// Local static data replacing DatoCMS GraphQL fetch

export async function getSkills() {
  return [
    {
      name: "React",
      category: "Frontend",
      description: "Building responsive and dynamic user interfaces using React.",
      icon: "react",
    },
    {
      name: "TypeScript",
      category: "Frontend",
      description:
        "Strongly typed JavaScript for scalable, maintainable front-end code.",
      icon: "typescript",
    },
    {
      name: "JavaScript (ES6+)",
      category: "Frontend",
      description:
        "Core language skills for building modern, high-performance web applications.",
      icon: "javascript",
    },
    {
      name: "HTML & CSS",
      category: "Frontend",
      description:
        "Crafting accessible and visually appealing layouts with clean, semantic markup.",
      icon: "html5",
    },
    {
      name: "Redux",
      category: "State Management",
      description:
        "Managing global state efficiently for scalable front-end applications.",
      icon: "redux",
    },
    {
      name: "Tailwind CSS",
      category: "Styling",
      description:
        "Utility-first CSS framework for designing responsive, fast-loading web UIs.",
      icon: "tailwindcss",
    },
    {
      name: "Git & GitHub",
      category: "Tools",
      description: "Version control and collaborative development workflows.",
      icon: "git",
    },
    {
      name: "REST APIs",
      category: "Backend Integration",
      description:
        "Consuming and integrating RESTful APIs to enable dynamic data-driven applications.",
      icon: "api",
    },
  ];
}