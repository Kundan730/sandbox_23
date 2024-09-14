interface TeamMember {
  name: string; // Name of the team member
  role: string; // Role in the project (e.g., "Developer", "Designer")
}

interface ProjectDetails {
  techStack: string[]; // Array of technologies used
  developmentStage: string; // E.g. "Planning", "In Progress", "Completed"
  businessOpportunity: string; // Description of business potential
  socialLinks: string[]; // Array of social media links
  imgs: string[]; // Array of image URLs
  youtubeLinks: string[]; // Array of YouTube video links
  projectLink: string; // Project demo or live link
  githubLink: string; // GitHub repository link
  shortInfo: string; // Short description like "Created on", "Last updated"
  teamMembers: TeamMember[]; // Array of team members with name, role, and profile link
  feedback: string; // Feedback from users or testers
  projectMentor: string; // Name of the mentor
  acquiredDetails: string; // Any acquisition or collaboration details
  challengesFaced: string[]; // List of challenges faced during development
  solutionsImplemented: string[]; // Key solutions applied to overcome challenges
  futureScope: string; // Potential future developments or expansions
  fundingDetails: string; // Information on project funding or sponsorship
  documentationLink: string; // Link to technical documentation or API docs
  features: string[]; // Key features of the project
}

export interface ProjectShowcase {
  name: string;
  logo: string; // URL to project logo
  description: string; // Brief project description
  projectDetails: ProjectDetails; // Nested details about the project
  headline: string; // A catchy headline or title for the project
  projectType: "Hackathon" | "Personal" | "Professional"; // Type of project
  creationDate: Date; // Date the project was started
  lastUpdate: Date; // Date of the last project update
  rating: number; // Project rating from 1 to 5
  tags: string[]; // Tags to categorize the project (e.g., "AI", "Blockchain")
  targetAudience: string[]; // The intended audience (e.g., "Developers", "Businesses", "Students")
  featured: boolean; // Whether this project is featured on the platform
  views: number; // Number of views the project has received
}