// data/experience.ts
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  type?: "work" | "research" | "education" | "leadership";
}

export const experiences: Experience[] = [
  {
    id: "oncode-fullstack",
    title: "Junior Full Stack Developer",
    company: "Oncode (Pvt) Ltd",
    location: "Remote",
    startDate: "August 2025",
    endDate: "Present",
    description:
      "Developing and deploying multiple production web applications using modern full-stack technologies.",
    achievements: [
      "Developed and deployed multiple production web applications using React.js, Node.js, Express.js, and MongoDB",
      "Built and hosted the GIST Campus website for student services and campus information (gistcampus.com)",
      "Developed the Old Boys Association Membership Management System to manage membership subscription payment plans and track member payments and records (oba.oncodeedu.org)",
      "Currently developing a Bus Booking Platform with reservation management and scheduling features (afthal.oncodetechsolution.com)",
      "Collaborated with senior developers using Git workflows, fixing bugs and deploying production updates",
    ],
    type: "work",
  },
  {
    id: "rotaract-video-editor",
    title: "Video Editor",
    company: "Rotaract Club of Rajarata University",
    location: "Mihintale, Sri Lanka · Hybrid",
    startDate: "August 2024",
    endDate: "January 2026",
    description:
      "Produced engaging video content to support club events, campaigns, and community initiatives.",
    achievements: [
      "Edited and produced promotional videos for social media campaigns, fundraisers, and awareness programs",
      "Collaborated with club members to develop creative storytelling concepts for events and initiatives",
      "Enhanced videos using motion graphics, transitions, and sound design to increase audience engagement",
      "Delivered high-quality video projects within tight deadlines while maintaining strong visual standards",
      "Contributed to strengthening the club’s digital presence through creative visual media",
    ],
    type: "leadership",
  },
  {
    id: "rajarata-majlis-media",
    title: "Graphic Designer & Video Editor",
    company: "Rajarata Majlis",
    location: "Remote",
    startDate: "January 2025",
    endDate: "October 2025",
    description:
      "Created digital media content to support Islamic events, campaigns, and community initiatives.",
    achievements: [
      "Designed Islamic posters, event promotions, and educational graphics using Canva",
      "Produced and edited videos for religious events, awareness campaigns, and community outreach",
      "Used CapCut to create engaging video content with transitions, effects, and subtitles",
      "Collaborated with the team to develop visually appealing content for social media platforms",
      "Strengthened the organization’s online presence through consistent visual storytelling",
    ],
    type: "leadership",
  },
  {
    id: "rotaract-graphic-designer",
    title: "Graphic Designer",
    company: "Rotaract Club of Rajarata University",
    location: "Mihintale, Sri Lanka · Hybrid",
    startDate: "August 2024",
    endDate: "January 2025",
    description:
      "Designed visual materials to support club events, campaigns, and social media outreach.",
    achievements: [
      "Designed posters, banners, and social media graphics for club initiatives and promotional campaigns",
      "Created visually engaging promotional materials using Canva for community outreach and events",
      "Collaborated with team members to develop creative design concepts aligned with club goals",
      "Maintained consistent visual branding across digital promotional materials",
      "Delivered high-quality designs under tight deadlines to support event promotions",
    ],
    type: "leadership",
  },
  {
    "id": "ai-business-risk-analysis",
    "title": "AI Powered Business Risk Analysis and Recommendation System for Online Businesses",
    "company": "Rajarata University of Sri Lanka",
    "location": "Academic Research Project",
    "startDate": "December 2025",
    "endDate": "Present",
    "description": "Developed an AI-driven system that analyzes Sinhala-English code-mixed customer feedback from e-commerce platforms to identify business risks and generate actionable recommendations.",
    "achievements": [
      "Built a custom Code-Mixed Adapter layer on top of XLM-R to effectively handle Sinhala-English code-mixed text",
      "Implemented aspect-based sentiment analysis using BIO tagging to detect delivery, quality, and trust dimensions",
      "Designed and implemented a mathematical Business Risk Index (BRI) model to quantify operational risks",
      "Developed a logic-driven analytics engine that converts sentiment outputs into actionable business insights",
      "Created a complete end-to-end pipeline from data collection to risk visualization and recommendation generation"
    ],
    "type": "research"
  },
  {
    id: "plant-growth-monitoring",
    title: "Plant Growth Monitoring using OpenCV",
    company: "Rajarata University of Sri Lanka",
    location: "Academic Project",
    startDate: "December 2024",
    endDate: "December 2024",
    description:
      "Developed a computer vision system to monitor plant growth using timelapse images and image processing techniques.",
    achievements: [
      "Implemented OpenCV to process and analyze timelapse images of plant growth",
      "Applied image preprocessing techniques to improve image quality and consistency",
      "Used segmentation techniques to detect plant regions and analyze growth patterns",
      "Extracted features such as color variation, leaf count, and growth rate over time",
      "Visualized plant development trends to provide insights into plant health and growth behavior"
    ],
    type: "research",
  }


];
