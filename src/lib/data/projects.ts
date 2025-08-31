import type { Project } from '$lib/types/portfolio';

export const professionalProjects: Project[] = [
  {
    id: 'fintech-platform',
    title: 'Fintech Payment Platform',
    description: 'Enterprise-grade payment processing platform handling millions of transactions with real-time fraud detection and compliance features.',
    role: 'Lead Developer',
    company: 'TechCorp Solutions',
    impact: 'Processed $10M+ monthly transactions, 99.99% uptime, 60% performance improvement',
    technologies: ['Vue.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
    featured: true,
    type: 'professional'
  },
  {
    id: 'ai-saas-platform',
    title: 'AI-Powered SaaS Platform',
    description: 'Comprehensive SaaS solution with AI-driven analytics, real-time collaboration, and automated workflow management.',
    role: 'Full Stack Developer',
    company: 'InnovateTech',
    impact: 'Generated $2M+ annual revenue, 50K+ active users, 3-month MVP delivery',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io', 'TensorFlow', 'Heroku'],
    featured: true,
    type: 'professional'
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'High-performance e-commerce solution with advanced inventory management, payment processing, and analytics dashboard.',
    role: 'Frontend Developer',
    company: 'Digital Solutions Inc.',
    impact: '99.9% uptime, 40% performance improvement, WCAG 2.1 AA compliance',
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'Webpack', 'PWA', 'Stripe API'],
    featured: true,
    type: 'professional'
  }
];

export const personalProjects: Project[] = [
  {
    id: 'celestial-ui',
    title: 'CelestialUI Component Library',
    description: 'Modern, accessible component library built with Vue 3, React, and Svelte. Features 50+ components with TypeScript support.',
    technologies: ['Vue.js', 'React', 'Svelte', 'TypeScript', 'Tailwind CSS', 'Storybook'],
    githubUrl: 'https://github.com/dev-1603/CelestialUI',
    liveUrl: 'https://celestialui.dev',
    featured: true,
    type: 'personal',
    stars: 150,
    forks: 25,
    lastUpdated: '2024-12-01'
  },
  {
    id: 'healthcare-ai',
    title: 'Healthcare AI Advisor',
    description: 'AI-powered healthcare application providing personalized health recommendations and symptom analysis using machine learning.',
    technologies: ['Python', 'FastAPI', 'React', 'TensorFlow', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/dev-1603/healthcare-ai',
    liveUrl: 'https://healthcare-ai.vercel.app',
    featured: true,
    type: 'personal',
    stars: 89,
    forks: 12,
    lastUpdated: '2024-11-15'
  },
  {
    id: 'nexus-commerce',
    title: 'Nexus Commerce Platform',
    description: 'Full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
    technologies: ['Node.js', 'React', 'PostgreSQL', 'Stripe', 'Redis', 'AWS'],
    githubUrl: 'https://github.com/dev-1603/nexus-commerce',
    liveUrl: 'https://nexus-commerce.vercel.app',
    featured: true,
    type: 'personal',
    stars: 67,
    forks: 8,
    lastUpdated: '2024-10-20'
  }
];
