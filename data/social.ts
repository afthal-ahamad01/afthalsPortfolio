export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/afthal-ahamad01",
    icon: "github",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com/in/afthal-ahamed",
    icon: "linkedin",
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:afthal6958@gmail.com",
    icon: "mail",
  },
  {
    id: "phone",
    name: "Phone",
    url: "tel:+94702598743",
    icon: "phone",
  },
];
