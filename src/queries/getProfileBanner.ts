// // queries/getProfileBanner.ts
// import datoCMSClient from './datoCMSClient';
// import { ProfileBanner } from '../types';

// const GET_PROFILE_BANNER = `
//  {
//   profilebanner {
//     backgroundImage {
//       url
//     }
//     headline
//     resumeLink {
//       url
//     }
//     linkedinLink
//     profileSummary
//   }
// }
// `;

// export async function getProfileBanner(): Promise<ProfileBanner> {
//   const data = await datoCMSClient.request<{ profilebanner: ProfileBanner }>(GET_PROFILE_BANNER);
//   console.log("🚀 ~ getProfileBanner ~ data:", data)
//   return data.profilebanner;
// }


// src/queries/getProfileBanner.ts

export async function getProfileBanner() {
  return {
    backgroundImage: { url: "/images/profile-bg.jpg" }, // place your image in public/images
    headline: "Priyanka More - Graduate Research Assistant", // your name or title
    resumeLink: { url: "/Priyanka_Pradip_ResumeML.pdf" }, // replace with your real resume URL
    linkedinLink: "https://www.linkedin.com/in/priyanka-more-a621021b8/", // your LinkedIn link
    profileSummary:
      "I’m a Master’s student in Computer Engineering at Stony Brook University, focused on AI, machine learning, and building software that solves real-world problems. I started with a strong foundation in computer science and grew through hands-on roles as a Software Engineer at Persistent Systems and a Machine Learning Engineer at S3 IT Service, where I built AI-driven platforms like CodeHealth, developed credit scoring engines, and designed IoT-based health monitoring systems. At Stony Brook, my research applies machine learning to complex signal problems, where I design end-to-end ML pipelines to process, model, and predict from challenging datasets. This work has strengthened my ability to turn raw data into meaningful insights and reinforced my interest in scalable, adaptable ML systems. I’m a self-motivated, collaborative learner who believes that curiosity and strong leadership drive meaningful innovation in technology. I’m currently exploring opportunities in AI/ML, software engineering, and data science where I can contribute to impactful products while continuing to grow. When I’m not working on models or research, you’ll usually find me experimenting with new technologies, solving LeetCode challenges, contributing to projects, or volunteering in my community.",
  };
}
