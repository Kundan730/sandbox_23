import { ProjectShowcase } from "@/lib/types";
export const projects: ProjectShowcase[] = [
  {
    name: "mangachi",
    logo: "/mangachi/logo.png",
    headline: "Manga Sharing Platform",
    description:
      "Welcome to Mangachi, a web application that serves as a platform for manga enthusiasts to share and upload their own manga creations. With the ease of use and a user-friendly interface, Mangachi aims to create a diverse community where manga creators can showcase their work, and readers can discover unique and original manga content.",
    projectDetails: {
      techStack: ["React", "Node.js", "MongoDB", "Next.js", "Clerk"],
      developmentStage: "Completed",
      businessOpportunity:
        "Potential to scale across industries for reducing food wastage.",
      socialLinks: [
        "https://twitter.com/project1",
        "https://linkedin.com/project1",
      ],
      imgs: ["/mangachi/1.png", "/mangachi/2.png", "/mangachi/3.png"],
      youtubeLinks: ["https://youtube.com/project1demo"],
      projectLink: "https://mangachi.vercel.app/",
      githubLink: "https://github.com/HEMANTH123SR/Mangachi-Manga-Platform",
      shortInfo: "Created on: Jan 2024, Last Updated: Feb 2024",
      teamMembers: [
        {
          name: "Hemanth",
          role: "Lead Developer",
        },
        {
          name: "Rida",
          role: "UI/UX Designer",
        },
        {
          name: "Rashmitha",
          role: "Data Scientist",
        },
      ],
      feedback: "I liked the mangachi app i wished it had more mangas",
      projectMentor: "Zain",
      acquiredDetails: "Partnered with local food banks to trial the solution.",
      challengesFaced: [
        "Limited data availability",
        "Integration with existing systems",
      ],
      solutionsImplemented: [
        "Built a custom dataset",
        "Used an API-based approach for integration",
      ],
      futureScope:
        "Expand to other regions and collaborate with food waste organizations.",
      fundingDetails: "Received initial funding from Hackathon sponsors.",
      documentationLink: "https://docs.project1.com",
      features: [
        "user can create there own mana",
        "search funcationality",
        "top manga , showcase mangas",
      ],
    },
    projectType: "Personal",
    creationDate: new Date("2024-01-15"),
    lastUpdate: new Date("2024-02-20"),
    rating: 4.8,
    tags: ["AI", "Sustainability", "Hackathon"],
    targetAudience: ["Manga Readers", "Anime watchers", "Webtoon"],
    featured: true,
    views: 100,
  },
  {
    name: "zenistu",
    logo: "https://cdn.dribbble.com/userupload/16561192/file/original-6c6fc9c1fd54dab3100df254fdec93d4.jpg?resize=1200x900",
    description:
      "A hackathon project focused on reducing global food waste using AI and machine learningLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    projectDetails: {
      techStack: ["React", "Node.js", "MongoDB"],
      developmentStage: "Completed",
      businessOpportunity:
        "Potential to scale across industries for reducing food wastage.",
      socialLinks: [
        "https://twitter.com/project1",
        "https://linkedin.com/project1",
      ],
      imgs: [
        "https://example.com/image1.png",
        "https://example.com/image2.png",
      ],
      youtubeLinks: ["https://youtube.com/project1demo"],
      projectLink: "https://project1.com",
      githubLink: "https://github.com/project1",
      shortInfo: "Created on: Jan 2024, Last Updated: Feb 2024",
      teamMembers: [
        {
          name: "Alice",
          role: "Lead Developer",
        },
        {
          name: "Bob",
          role: "UI/UX Designer",
        },
        {
          name: "Charlie",
          role: "Data Scientist",
        },
      ],
      feedback:
        "Received excellent feedback during the hackathon. Recognized for innovation.",
      projectMentor: "Dr. John Smith",
      acquiredDetails: "Partnered with local food banks to trial the solution.",
      challengesFaced: [
        "Limited data availability",
        "Integration with existing systems",
      ],
      solutionsImplemented: [
        "Built a custom dataset",
        "Used an API-based approach for integration",
      ],
      futureScope:
        "Expand to other regions and collaborate with food waste organizations.",
      fundingDetails: "Received initial funding from Hackathon sponsors.",
      documentationLink: "https://docs.project1.com",
      features: [
        "Real-time food waste detection",
        "Custom AI algorithms",
        "Seamless integration with food distribution networks",
      ],
    },
    headline: "AI-Powered Solution to Reduce Food Waste",
    projectType: "Hackathon",
    creationDate: new Date("2024-01-15"),
    lastUpdate: new Date("2024-02-20"),
    rating: 4.8,
    tags: ["AI", "Sustainability", "Hackathon"],
    targetAudience: ["Non-profits", "Governments", "Businesses"],
    featured: true,
    views: 5000,
  },
  {
    name: "autlk",
    logo: "https://example.com/logo2.png",
    description:
      "A personal project aimed at automating financial reports for small businesses.",
    projectDetails: {
      techStack: ["Python", "Flask", "PostgreSQL"],
      developmentStage: "In Progress",
      businessOpportunity:
        "Targeting small businesses for automated financial reporting.",
      socialLinks: ["https://github.com/project2"],
      imgs: ["https://example.com/image3.png"],
      youtubeLinks: [],
      projectLink: "https://project2.com",
      githubLink: "https://github.com/project2",
      shortInfo: "Created on: May 2023",
      teamMembers: [
        {
          name: "John Doe",
          role: "Full Stack Developer",
        },
      ],
      feedback:
        "Beta users have expressed interest in a subscription-based model.",
      projectMentor: "Jane Doe",
      acquiredDetails: "None so far, in talks with potential clients.",
      challengesFaced: [
        "Handling large amounts of data",
        "Ensuring financial accuracy",
      ],
      solutionsImplemented: [
        "Optimized data queries",
        "Implemented robust financial algorithms",
      ],
      futureScope:
        "Integrate with accounting software and offer an enterprise version.",
      fundingDetails: "Self-funded.",
      documentationLink: "https://docs.project2.com",
      features: [
        "Automated financial report generation",
        "Customizable reporting templates",
        "Data export options",
      ],
    },
    headline: "Automating Financial Reporting for Small Businesses",
    projectType: "Personal",
    creationDate: new Date("2023-05-10"),
    lastUpdate: new Date("2024-02-20"),
    rating: 4.8,
    tags: ["AI", "Sustainability", "Hackathon"],
    targetAudience: ["Non-profits", "Governments", "Businesses"],
    featured: true,
    views: 5000,
  },
];
