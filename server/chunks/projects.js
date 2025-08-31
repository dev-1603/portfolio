const professionalProjects = [
  {
    id: "reach-mobile-ecommerce",
    title: "Reach Mobile E-commerce Platform",
    description: "Innovative e-commerce store for US telecom startup built with modern Vue/React stack. Integrated with CMS platforms for seamless content management and enhanced user experience.",
    role: "Software Development Engineer - 2",
    company: "Applore Technologies",
    impact: "Delivered scalable e-commerce solution for US telecom market with CMS integration",
    technologies: ["Vue.js", "React", "TypeScript", "Contentful", "Strapi", "Node.js", "Tailwind CSS"],
    featured: true,
    type: "professional"
  },
  {
    id: "ai-multi-tenant-chat",
    title: "AI-Powered Multi-tenant Chat Application",
    description: "Sophisticated chat application with AI capabilities, robust data security, and LLM API integrations. Features dynamic component library and layout builder reducing development time by 30%.",
    role: "Senior Software Engineer",
    company: "Gate AI Pvt Ltd",
    impact: "30% reduction in development time, secure multi-tenant architecture, AI integration",
    technologies: ["Vue.js", "Nuxt.js", "TypeScript", "JWT", "OAuth", "LLM APIs", "Multi-tenant Architecture"],
    featured: true,
    type: "professional"
  },
  {
    id: "portfolio-investment-platform",
    title: "Portfolio-centric Investment Platform",
    description: "Real-time investment tracking platform with advanced analytics, notifications, and data visualization dashboards. Built with modern fintech standards and user-centric design.",
    role: "Senior Software Engineer",
    company: "Geekyants",
    impact: "Real-time tracking, actionable insights, role-based workflows",
    technologies: ["Nuxt.js", "Vue.js", "Firebase", "Quasar Framework", "Chart.js", "TypeScript"],
    featured: true,
    type: "professional"
  },
  {
    id: "no-code-platform",
    title: "No-Code Platform with Drag-and-Drop Builders",
    description: "Revolutionary no-code platform featuring drag-and-drop Schema and Layout Builders. Includes comprehensive component library with Storybook for consistent UI development.",
    role: "Frontend Developer",
    company: "KISAI (Ideanz IT Solutions)",
    impact: "Reduced development cycles, enabled non-technical users, consistent UI standards",
    technologies: ["Vue.js", "Tailwind CSS", "Storybook", "Drag-and-Drop APIs", "Component Libraries"],
    featured: true,
    type: "professional"
  },
  {
    id: "cms-role-based-workflow",
    title: "CMS with Role-based Workflows",
    description: "Advanced content management system with role-based workflows, dynamic content previews, and comprehensive data visualization capabilities.",
    role: "Senior Software Engineer",
    company: "Geekyants",
    impact: "Streamlined content management, enhanced collaboration, dynamic previews",
    technologies: ["Vue.js", "Quasar Framework", "Node.js", "Role-based Access", "CMS Architecture"],
    featured: false,
    type: "professional"
  }
];
const personalProjects = [
  {
    id: "celestial-ui",
    title: "CelestialUI Component Library",
    description: "Modern, accessible component library built with Vue 3, React, and Svelte. Features 50+ components with TypeScript support.",
    technologies: ["Vue.js", "React", "Svelte", "TypeScript", "Tailwind CSS", "Storybook"],
    githubUrl: "https://github.com/dev-1603/CelestialUI",
    liveUrl: "",
    underDevelopment: true,
    npmPackages: [
      {
        name: "@celestial-ui/vue",
        url: "https://www.npmjs.com/package/@celestial-ui/vue",
        description: "Vue 3 Component Library"
      },
      {
        name: "@celestial-ui/react",
        url: "https://www.npmjs.com/package/@celestial-ui/react",
        description: "React Component Library"
      },
      {
        name: "@celestial-ui/svelte",
        url: "https://www.npmjs.com/package/@celestial-ui/svelte",
        description: "Svelte Component Library"
      }
    ],
    featured: true,
    type: "personal",
    stars: 150,
    forks: 25,
    lastUpdated: "2024-12-01",
    isPublished: true
  },
  {
    id: "healthcare-ai",
    title: "Care Caddy",
    description: "AI-powered healthcare application providing personalized health recommendations and symptom analysis using machine learning.",
    technologies: ["Python", "FastAPI", "React", "TensorFlow", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/dev-1603/healthcare-ai",
    liveUrl: "",
    underDevelopment: true,
    featured: true,
    type: "personal",
    stars: 89,
    forks: 12,
    lastUpdated: "2024-11-15"
  },
  {
    id: "nexus-commerce",
    title: "Nexus Commerce Platform",
    description: "Full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
    technologies: ["Node.js", "React", "PostgreSQL", "Stripe", "Redis", "AWS"],
    githubUrl: "https://github.com/dev-1603/nexus-commerce",
    liveUrl: "",
    underDevelopment: true,
    featured: true,
    type: "personal",
    stars: 67,
    forks: 8,
    lastUpdated: "2024-10-20"
  }
];
export {
  personalProjects as a,
  professionalProjects as p
};
