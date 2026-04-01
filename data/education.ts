export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: "rajarata",
    degree: "BSc in Information Technology",
    institution: "Rajarata University of Sri Lanka",
    location: "Mihintale, Sri Lanka",
    startDate: "2023",
    endDate: "Present",
    description: "Undergraduate",
  },
  {
    id: "etec",
    degree: "Diploma in English",
    institution: "ETEC Campus",
    location: "Kandy, Sri Lanka",
    startDate: "2019",
    endDate: "2019",
  },
  {
    id: "alazhar",
    degree: "G.C.E Advanced Level",
    institution: "Al Azhar College",
    location: "Hemmathagama, Sri Lanka",
    startDate: "2019",
    endDate: "2023",
  },
];
