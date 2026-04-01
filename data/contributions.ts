export interface Contribution {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  type: "open-source" | "community" | "tool" | "library";
  technologies: string[];
  github?: string;
  liveUrl?: string;
  stars?: number;
  contributions?: string[]; // bullet points describing what was contributed
  image?: string;
}

export const contributions: Contribution[] = [
  // Add your open source contributions and community work here.
  // Example:
  // {
  //   id: "my-contribution",
  //   title: "Project Name",
  //   description: "Short description of what this is.",
  //   type: "open-source",
  //   technologies: ["React", "TypeScript"],
  //   github: "https://github.com/...",
  //   contributions: [
  //     "Fixed bug in the authentication module",
  //     "Added dark mode support",
  //   ],
  // },
  {
    id: "hugin-mobile-translation",
    title: "Hugin Mobile – Italian Translation Contribution",
    description: "Contributed to the open-source Hugin Mobile app by adding Italian language support to improve accessibility for Italian-speaking users.",
    type: "open-source",
    technologies: ["React Native", "JSON", "Localization"],
    github: "https://github.com/kryptokrona/hugin-native",
    contributions: [
      "Added Italian language translations to the Hugin Mobile application",
      "Worked with the project’s localization files to implement multi-language support",
      "Improved accessibility of the app for Italian-speaking users",
      "Learned the workflow of contributing to an open-source project through GitHub"
    ],
    image: "/images/hugin.webp"
  },
  {
    id: "asp-ij-benchmarking-tool",
    title: "Built-in Benchmarking Tool for Active Segmentation Platform (ASP/IJ)",
    description: "Developed and merged a performance benchmarking tool for the Active Segmentation Platform for ImageJ. This tool compares CPU and GPU execution times of convolution filters, calculates speedup multipliers, and exports results to CSV — laying the foundation for the GSoC 2026 Parallel Engine project with TornadoVM.",
    type: "open-source",
    technologies: ["Java", "Swing", "ImageJ", "JUnit"],
    github: "https://github.com/sumit3203/ACTIVESEGMENTATION",
    contributions: [
      "Designed and implemented a new Benchmark window that displays CPU vs GPU execution times side-by-side",
      "Added automatic speedup calculation to clearly show performance gains (e.g. 5x, 18x faster)",
      "Integrated the benchmarking UI into the existing filter workflow",
      "Implemented CSV export functionality using native Java I/O for offline analysis",
      "Created essential profiling infrastructure for future TornadoVM acceleration"
    ],
    image: "/images/incf.webp"
  },
];
