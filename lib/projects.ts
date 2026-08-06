export interface CaseStudyContent {
  problem?: string;
  contribution?: string;
  keyFeatures?: string[];
  technicalHighlights?: string[];
  challenges?: string[];
  outcome?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  /** Short "My Role" line shown under the project title, e.g. "Frontend Development · UI/UX & Interface Design" */
  role: string;
  proprietary: boolean;
  featured: boolean;
  order: number;
  links?: {
    demo?: string;
    github?: string;
  };
  caseStudy?: CaseStudyContent;
}

export const projects: Project[] = [
  {
    slug: "social-media-listener",
    title: "Social Media Listener",
    category: "AI Platform",
    description:
      "Contributed to an enterprise AI-powered social media intelligence platform featuring sentiment analysis, competitor monitoring, geo insights, influencer analytics, real-time dashboards, and automated reporting. Shaped the interface and user experience across the platform's dashboards and analytics views, then developed responsive interfaces, reusable components, interactive data visualizations, and REST API integrations for large-scale analytical workflows.",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Chart.js",
      "React Query",
    ],
    role: "Frontend Development · UI/UX & Interface Design",
    proprietary: true,
    featured: true,
    order: 1,
    caseStudy: {
      problem:
        "Enterprise social media intelligence workflows spanning sentiment analysis, competitor monitoring, geo insights, and influencer analytics needed a responsive, data-dense interface capable of real-time dashboards and automated reporting.",
      contribution:
        "Shaped the interface and user experience across the platform's dashboards and analytics views, then developed them as responsive, data-dense React interfaces with reusable components, interactive data visualizations, and REST API integration.",
      keyFeatures: [
        "Sentiment analysis views",
        "Competitor monitoring",
        "Geo insights",
        "Influencer analytics",
        "Real-time dashboards",
        "Automated reporting",
      ],
      technicalHighlights: [
        "Interactive data visualizations built with Chart.js",
        "REST API integration for large-scale analytical workflows",
        "Reusable component architecture across multiple dashboard views",
        "Responsive layouts for dense, enterprise-scale data",
      ],
    },
  },
  {
    slug: "mtn-dno",
    title: "MTN DNO Premium Onboarding Redesign",
    category: "UI/UX · Product Design",
    description:
      "Redesigned the onboarding experience for MTN Premium, transforming complex identity verification into a modern mobile-first user journey. Refined the user journey and visual hierarchy, designed premium UI screens, and implemented the experience as responsive, production-ready React interfaces.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Figma", "UI/UX Design"],
    role: "Frontend Development · UI/UX & Interface Design",
    proprietary: false,
    featured: true,
    order: 2,
    links: {
      // TODO(Sara): add the live demo URL from your CV here.
      demo: undefined,
    },
    caseStudy: {
      problem:
        "MTN Premium's onboarding relied on a complex identity verification process that needed to become a modern, mobile-first user journey.",
      contribution:
        "Refined the onboarding user journey and interface — improving visual hierarchy and designing premium, mobile-first UI screens — then implemented the experience as responsive React interfaces.",
      keyFeatures: [
        "Modern mobile-first onboarding journey",
        "Identity verification flow",
        "Premium UI screens",
        "Improved visual hierarchy",
      ],
      technicalHighlights: [
        "Interface and visual hierarchy design",
        "Mobile-first responsive interfaces",
        "Refined multi-step onboarding flow logic",
      ],
    },
  },
  {
    slug: "supercars-web",
    title: "SuperCars Virtual Garage",
    category: "Web · Motion Design",
    description:
      "Designed and developed a premium luxury car showcase featuring immersive animations, responsive layouts, and modern UI interactions. Focused on high-performance rendering and polished user experiences inspired by luxury automotive brands.",
    technologies: ["React.js", "Vite", "Framer Motion", "CSS"],
    role: "Frontend Development · UI/UX & Interface Design",
    proprietary: false,
    featured: true,
    order: 3,
    caseStudy: {
      problem:
        "A premium luxury car showcase needed immersive motion design and high-performance rendering inspired by luxury automotive brands.",
      contribution:
        "Shaped the visual direction, interface, interactions, and motion experience for the showcase, then implemented it in React — focusing on high-performance rendering and polished, luxury-inspired interaction design.",
      keyFeatures: ["Immersive animations", "Responsive layouts", "Modern UI interactions"],
      technicalHighlights: [
        "High-performance rendering with Vite",
        "Motion design with Framer Motion",
        "Interaction-focused UI polish inspired by luxury automotive brands",
      ],
    },
  },
  {
    slug: "supercars-mobile",
    title: "SuperCars Virtual Garage Mobile",
    category: "React Native · Mobile",
    description:
      "Developed a cross-platform mobile application showcasing luxury vehicles with secure authentication, responsive layouts, touch-optimized navigation, and smooth native animations.",
    technologies: ["React Native", "Expo", "TypeScript", "React Navigation"],
    role: "React Native Development · UI/UX & Interface Design",
    proprietary: true,
    featured: true,
    order: 4,
    caseStudy: {
      problem:
        "The SuperCars concept needed a cross-platform mobile counterpart with native-feeling interaction and secure access.",
      contribution:
        "Designed the mobile interface and interaction experience — including navigation, authentication flows, and animation — then implemented it with React Native and Expo for a cross-platform, native-feeling experience.",
      keyFeatures: [
        "Secure authentication",
        "Touch-optimized navigation",
        "Smooth native animations",
        "Cross-platform iOS & Android support",
      ],
      technicalHighlights: [
        "Built with React Native & Expo",
        "Navigation handled with React Navigation",
        "TypeScript throughout for type safety",
      ],
    },
  },
  {
    slug: "oona",
    title: "Oona Dashboard",
    category: "Enterprise Dashboard",
    description:
      "Developed an enterprise dashboard with drag-and-drop widgets, dynamic layouts, Redux state management, and REST API integration. Worked on the dashboard's interface and user experience, then implemented it end-to-end in React.",
    technologies: ["React.js", "Redux Toolkit", "React DnD", "Vite", "REST APIs"],
    role: "Frontend Development · UI/UX & Interface Design",
    proprietary: true,
    featured: true,
    order: 5,
    caseStudy: {
      problem:
        "Oona needed an enterprise dashboard with dynamic, user-configurable layouts and reliable state management across widgets.",
      contribution:
        "Worked on the dashboard's interface and user experience — including drag-and-drop widget layouts — then implemented it in React with Redux Toolkit state management and REST API integration.",
      keyFeatures: ["Drag-and-drop widgets", "Dynamic layouts", "Configurable widget interface"],
      technicalHighlights: [
        "State management with Redux Toolkit",
        "Drag-and-drop interactions with React DnD",
        "REST API integration",
        "Built with Vite",
      ],
    },
  },
  {
    slug: "work-culture",
    title: "Work Culture Dashboard",
    category: "Enterprise Dashboard",
    description:
      "Designed and developed an internal dashboard for employee engagement and company culture management. Implemented reusable React components, API integration, responsive layouts, and performance optimizations.",
    technologies: ["React.js", "React Router", "Tailwind CSS", "REST APIs"],
    role: "Frontend Development · UI/UX & Interface Design",
    proprietary: false,
    featured: true,
    order: 6,
    caseStudy: {
      problem:
        "The organization needed an internal dashboard to support employee engagement and company culture management.",
      contribution:
        "Contributed to the interface design of the employee engagement dashboard, then implemented it with reusable React components, API integration, responsive layouts, and performance optimizations.",
      keyFeatures: ["Employee engagement tracking", "Company culture management tools"],
      technicalHighlights: [
        "Reusable component architecture",
        "REST API integration",
        "Performance optimization",
        "Routing with React Router",
      ],
    },
  },
  {
    slug: "digicard",
    title: "DigiCard",
    category: "E-commerce · Bilingual",
    description:
      "Built a bilingual digital voucher platform featuring secure OTP authentication, shopping cart functionality, live pricing, responsive design, and a complete checkout workflow.",
    technologies: ["React.js", "Redux Toolkit", "REST APIs", "Tailwind CSS"],
    role: "Frontend Development · UI/UX & Interface Design",
    proprietary: false,
    featured: true,
    order: 7,
    caseStudy: {
      problem:
        "A bilingual digital voucher platform needed secure authentication and a complete, responsive checkout experience.",
      contribution:
        "Worked across the e-commerce interface and user experience — including the checkout flow and bilingual layout — then implemented it in React with Redux Toolkit and REST API integration.",
      keyFeatures: [
        "Bilingual EN/AR experience",
        "Secure OTP authentication",
        "Shopping cart & live pricing",
        "Complete checkout workflow",
      ],
      technicalHighlights: [
        "State management with Redux Toolkit",
        "REST API integration",
        "Responsive, bilingual UI with Tailwind CSS",
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
