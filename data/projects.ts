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
    id: "foodora-mobile-app",
    title: "Foodora – Food Ordering Android Application",
    description:
      "An offline-first Android food ordering application that allows users to browse menus, manage carts, and place orders.",
    longDescription:
      "Foodora is a fully functional offline-first Android mobile application developed as part of the ICT3214 Mobile Application Development module. The app provides a complete food ordering experience where users can browse a dynamic menu, view detailed item descriptions, manage a shopping cart, place orders, and manage their profiles. Built using Java and SQLite, the application demonstrates robust local data management, secure user authentication, and a modern mobile UI.",
    technologies: [
      "Java",
      "Android",
      "SQLite"
    ],
    achievements: [
      "Developed an offline-first Android food ordering application",
      "Implemented local database management using SQLite",
      "Built dynamic menu browsing and detailed item views",
      "Implemented shopping cart and order placement features",
      "Designed a modern and user-friendly Android interface"
    ],
    image: "/images/projects/foodora/foodora.webp",
    github: "https://github.com/Mihiran-Thilakarathna/FoodOrderingApp",
    featured: false,
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
    id: "personal-organizer",
    title: "Personal Organizer – Desktop Application",
    description:
      "A desktop application for managing personal finances and daily tasks, including income and expense tracking, task management, and budgeting.",
    longDescription:
      "Developed a personal organizer desktop application using C++ and .NET to help users manage finances and daily tasks. The application includes features for tracking income and expenses, managing tasks, and maintaining budgets. Implemented a user-friendly interface and integrated an SQL database to securely store and manage user data while providing real-time financial summaries.",
    technologies: [
      "C++",
      ".NET",
      "SQL",
    ],
    achievements: [
      "Developed a desktop application for tracking income, expenses, tasks, and budgeting",
      "Implemented a user-friendly interface using C++ and .NET",
      "Integrated an SQL database to securely store and manage user data",
      "Added functionalities for adding, editing, and deleting financial records",
      "Designed an intuitive dashboard and form-based UI for easy navigation",
    ],
    image: "/images/projects/personal-organizer/personal-organizer.webp",
    github: "https://github.com/afthal-ahamad01/Personal_Organizer",
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
