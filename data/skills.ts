// data/skills.ts
export type SkillCategory =
  | "Languages"
  | "Frameworks/Libraries"
  | "Databases"
  | "Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string; // Used to generate the CDN URL
}

export const skills: Record<SkillCategory, Skill[]> = {
  Languages: [
    { name: "Java", category: "Languages", logoKey: "java" },
    { name: "JavaScript", category: "Languages", logoKey: "javascript" },
    { name: "PHP", category: "Languages", logoKey: "php" },
    { name: "TypeScript", category: "Languages", logoKey: "typescript" },
    { name: "Python", category: "Languages", logoKey: "python" },
    { name: "C++", category: "Languages", logoKey: "cplusplus" },
    { name: "HTML", category: "Languages", logoKey: "html5" },
    { name: "CSS", category: "Languages", logoKey: "css3" },
  ],
  "Frameworks/Libraries": [
    { name: "React.js", category: "Frameworks/Libraries", logoKey: "react" },
    { name: "Node.js", category: "Frameworks/Libraries", logoKey: "nodejs" },
    { name: "Express.js", category: "Frameworks/Libraries", logoKey: "express" },
    { name: "Tailwind CSS", category: "Frameworks/Libraries", logoKey: "tailwindcss" },
    { name: ".NET", category: "Frameworks/Libraries", logoKey: "dotnet" },
  ],
  Databases: [
    { name: "MongoDB", category: "Databases", logoKey: "mongodb" },
    { name: "MySQL", category: "Databases", logoKey: "mysql" },
    { name: "Firebase", category: "Databases", logoKey: "firebase" },
  ],
  Tools: [
    { name: "Git", category: "Tools", logoKey: "git" },
    { name: "GitHub", category: "Tools", logoKey: "github" },
    { name: "REST APIs", category: "Tools", logoKey: "postman" },
  ],
};
