export interface ExperienceItem {
  role: string;
  company: string;
  location: "Remote" | "On-site";
  period: string;
  emphasis: "primary" | "secondary";
}

export const experience: ExperienceItem[] = [
  {
    role: "Frontend Developer",
    company: "TruePositive",
    location: "Remote",
    period: "Oct 2025 – Present",
    emphasis: "primary",
  },
  {
    role: "Frontend Developer",
    company: "Oona",
    location: "Remote",
    period: "Mar 2025 – Jun 2025",
    emphasis: "primary",
  },
  {
    role: "Frontend Developer",
    company: "Losyro",
    location: "Remote",
    period: "2023 – 2025",
    emphasis: "primary",
  },
  {
    role: "Frontend Developer (Freelance)",
    company: "Various Clients",
    location: "Remote",
    period: "2023 – Present",
    emphasis: "primary",
  },
  {
    role: "Head of Production",
    company: "Lio / Sindyan",
    location: "On-site",
    period: "2021 – 2023",
    emphasis: "secondary",
  },
];

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export const education: EducationItem = {
  degree: "Bachelor's Degree in Mechatronics Engineering",
  institution: "Tishreen University",
  period: "2015 – 2020",
};
