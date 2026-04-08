export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  // ── Featured Projects ──────────────────────────────────────────────

  {
    id: "gist-campus",
    title: "GIST Campus Website",
    description:
      "A campus information and student services website built and hosted for GIST Campus.",
    longDescription:
      "Built and hosted the GIST Campus website for student services and campus information as part of my role at Oncode (Pvt) Ltd.",
    technologies: ["React.js", "Tailwind CSS", "Firebase"],
    achievements: [
      "Built and deployed a fully functional campus website serving student services and information",
      "Collaborated with the Oncode team using Git workflows for seamless deployment",
    ],
    image: "/images/projects/gist-campus/gist-campus.webp",
    liveUrl: "https://gistcampus.com/",
    featured: true,
  },
  {
    id: "oba-membership",
    title: "OBA Membership Management System",
    description:
      "A membership management system to handle subscriptions, payment plans, and member records.",
    longDescription:
      "Developed the Old Boys Association Membership Management System to manage membership subscription payment plans and track member payments and records.",
    technologies: ["PHP", "Tailwind CSS", "MySQL", "JavaScript", "HTML", "CSS"],
    achievements: [
      "Developed a comprehensive membership management system for subscription payment plans",
      "Implemented tracking for member payments and records",
      "Deployed to production at oba.oncodeedu.org",
    ],
    image: "/images/projects/oba-membership/oba-membership.webp",
    liveUrl: "https://oba.oncodeedu.org/index.php",
    featured: true,
  },

  {
    id: "bus-booking",
    title: "Bus Booking Platform",
    description:
      "A bus seat booking platform with reservation management and scheduling features.",
    longDescription:
      "Currently developing a Bus Booking Platform with reservation management and scheduling features, including seat selection, passenger details, and booking management.",
    technologies: ["PHP", "Tailwind CSS", "MySQL", "JavaScript", "HTML", "CSS"],
    achievements: [
      "Building a comprehensive bus booking system with reservation and scheduling features",
      "Implementing seat selection and passenger management functionalities",
    ],
    image: "/images/projects/bus-booking/bus-booking.webp",
    liveUrl: "https://afthal.oncodetechsolution.com/",
    featured: false,
  },
  {
    id: "plant-growth-monitoring",
    title: "Plant Growth Monitoring with OpenCV",
    description:
      "An academic project using OpenCV to monitor and analyze plant growth through time-lapse image processing.",
    longDescription:
      "Developed a system to monitor plant growth using time-lapse images captured over time. Implemented OpenCV to analyze plant images using image preprocessing and segmentation techniques. Identified key growth indicators such as color changes, leaf count, and growth rate.",
    technologies: ["Python", "OpenCV", "Image Processing", "Computer Vision"],
    achievements: [
      "Developed a system to monitor plant growth using time-lapse images captured over time",
      "Implemented OpenCV for image preprocessing and segmentation techniques",
      "Identified key growth indicators such as color changes, leaf count, and growth rate",
      "Visualized plant growth patterns to provide insights into plant health and development",
    ],
    image: "/images/projects/plant-growth/plant-growth.webp",
    github: "https://github.com/afthal-ahamad01/plant-growth-monitoring",
    featured: false,
  },
  {
    id: "lanka-mall",
    title: "Lanka Mall – E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with authentication, product management, and a responsive UI.",
    longDescription:
      "Built a full-stack e-commerce platform with authentication and product management. Developed a responsive frontend using React.js and Tailwind CSS, and implemented backend services using Node.js, Express.js, and MongoDB.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
    ],
    achievements: [
      "Built a full-stack e-commerce platform with authentication and product management",
      "Developed responsive frontend using React.js and Tailwind CSS",
      "Implemented backend services using Node.js, Express.js, and MongoDB",
    ],
    image: "/images/projects/lanka-mall/lanka-mall.webp",
    github: "https://github.com/afthal-ahamad01/my-ecommerce-site",
    featured: true,
  },
];
