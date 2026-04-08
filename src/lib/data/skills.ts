import type { Skill, SkillCategory } from '$lib/types/portfolio';

export const skills: Skill[] = [
  // Frontend
  { name: 'Vue 2', category: 'frontend', icon: 'vue2', color: '#42b883' },
  { name: 'Vue 3', category: 'frontend', icon: 'vue3', color: '#42b883' },
  { name: 'JavaScript ES6+', category: 'frontend', icon: 'javascript', color: '#f7df1e' },
  { name: 'TypeScript', category: 'frontend', icon: 'typescript', color: '#3178c6' },
  { name: 'Nuxt.js', category: 'frontend', icon: 'nuxt', color: '#00dc82' },
  { name: 'React.js', category: 'frontend', icon: 'react', color: '#61dafb' },
  { name: 'Next.js', category: 'frontend', icon: 'nextjs', color: '#000000' },
  { name: 'Svelte', category: 'frontend', icon: 'svelte', color: '#ff3e00' },
  { name: 'SvelteKit', category: 'frontend', icon: 'sveltekit', color: '#ff3e00' },
  { name: 'Quasar Framework', category: 'frontend', icon: 'quasar', color: '#1976d2' },
  { name: 'Tailwind CSS', category: 'frontend', icon: 'tailwind', color: '#06b6d4' },
  { name: 'CSS3', category: 'frontend', icon: 'css3', color: '#1572b6' },
  { name: 'HTML5', category: 'frontend', icon: 'html5', color: '#e34f26' },
  { name: 'Pinia', category: 'frontend', icon: 'pinia', color: '#ffd93d' },
  { name: 'Vuex', category: 'frontend', icon: 'vuex', color: '#42b883' },
  { name: 'Redux', category: 'frontend', icon: 'redux', color: '#764abc' },
  { name: 'Component Library Development', category: 'frontend', icon: 'component-library', color: '#ff4785' },
  { name: 'SSR/SSG/ISR', category: 'frontend', icon: 'ssr', color: '#00dc82' },
  { name: 'ARIA', category: 'frontend', icon: 'aria', color: '#0066cc' },
  { name: 'Internationalization', category: 'frontend', icon: 'i18n', color: '#ff9500' },

  // Backend & Architecture (runtime/api + patterns)
  { name: 'Node.js', category: 'backend-architecture', icon: 'nodejs', color: '#339933' },
  { name: 'Express.js', category: 'backend-architecture', icon: 'express', color: '#000000' },
  { name: 'NestJS', category: 'backend-architecture', icon: 'nestjs', color: '#e0234e' },
  { name: 'RESTful APIs', category: 'backend-architecture', icon: 'api', color: '#ff6b6b' },
  { name: 'GraphQL', category: 'backend-architecture', icon: 'graphql', color: '#e10098' },
  { name: 'tRPC', category: 'backend-architecture', icon: 'trpc', color: '#2596be' },
  { name: 'API Design', category: 'backend-architecture', icon: 'api-design', color: '#ff6b6b' },
  { name: 'JWT', category: 'backend-architecture', icon: 'jwt', color: '#d63aff' },
  { name: 'OAuth2', category: 'backend-architecture', icon: 'oauth', color: '#eb5424' },
  { name: 'SSO', category: 'backend-architecture', icon: 'sso', color: '#2563eb' },
  { name: 'Node Event Loop', category: 'backend-architecture', icon: 'node-event-loop', color: '#339933' },
  { name: 'Node Streams', category: 'backend-architecture', icon: 'node-streams', color: '#339933' },
  { name: 'Multi-tenant SaaS', category: 'backend-architecture', icon: 'multi-tenant', color: '#0052cc', subcategory: 'patterns' },
  { name: 'Event-driven Architecture', category: 'backend-architecture', icon: 'event-driven', color: '#7c3aed', subcategory: 'patterns' },
  { name: 'RBAC', category: 'backend-architecture', icon: 'rbac', color: '#0052cc', subcategory: 'patterns' },
  { name: 'Feature Flags', category: 'backend-architecture', icon: 'feature-flags', color: '#7c3aed', subcategory: 'patterns' },
  { name: 'System Design', category: 'backend-architecture', icon: 'system-design', color: '#2563eb', subcategory: 'patterns' },
  { name: 'Microservices', category: 'backend-architecture', icon: 'microservices', color: '#00d4aa', subcategory: 'patterns' },
  { name: 'Headless Architecture', category: 'backend-architecture', icon: 'headless', color: '#6366f1', subcategory: 'patterns' },
  { name: 'Monorepo Architecture', category: 'backend-architecture', icon: 'monorepo', color: '#6366f1', subcategory: 'patterns' },
  { name: 'Design Patterns', category: 'backend-architecture', icon: 'patterns', color: '#8b5cf6', subcategory: 'patterns' },
  { name: 'Scalability Patterns', category: 'backend-architecture', icon: 'scalability', color: '#06b6d4', subcategory: 'patterns' },
  { name: 'Performance Optimization', category: 'backend-architecture', icon: 'performance', color: '#f59e0b', subcategory: 'patterns' },
  { name: 'OOP', category: 'backend-architecture', icon: 'oop', color: '#0f766e', subcategory: 'patterns' },
  { name: 'DSA', category: 'backend-architecture', icon: 'dsa', color: '#b45309', subcategory: 'patterns' },

  // Data & Infrastructure
  { name: 'PostgreSQL', category: 'data-infrastructure', icon: 'postgresql', color: '#336791', subcategory: 'database' },
  { name: 'MySQL', category: 'data-infrastructure', icon: 'mysql', color: '#4479a1', subcategory: 'database' },
  { name: 'MongoDB', category: 'data-infrastructure', icon: 'mongodb', color: '#47a248', subcategory: 'database' },
  { name: 'DynamoDB', category: 'data-infrastructure', icon: 'dynamodb', color: '#4053d6', subcategory: 'database' },
  { name: 'Firebase', category: 'data-infrastructure', icon: 'firebase', color: '#ffca28', subcategory: 'database' },
  { name: 'AWS', category: 'data-infrastructure', icon: 'aws', color: '#ff9900', subcategory: 'infrastructure' },
  { name: 'GCP', category: 'data-infrastructure', icon: 'gcp', color: '#4285f4', subcategory: 'infrastructure' },
  { name: 'Docker', category: 'data-infrastructure', icon: 'docker', color: '#2496ed', subcategory: 'infrastructure' },

  // Testing & Tooling
  { name: 'Git', category: 'testing-tooling', icon: 'git', color: '#f05032', subcategory: 'tools' },
  { name: 'Vitest', category: 'testing-tooling', icon: 'vitest', color: '#6ec38a', subcategory: 'testing' },
  { name: 'Jest', category: 'testing-tooling', icon: 'jest', color: '#c21325', subcategory: 'testing' },
  { name: 'Playwright', category: 'testing-tooling', icon: 'playwright', color: '#2e5aa8', subcategory: 'testing' },
  { name: 'Storybook', category: 'testing-tooling', icon: 'storybook', color: '#ff4785', subcategory: 'tools' },
  { name: 'Vue DevTools', category: 'testing-tooling', icon: 'vue-devtools', color: '#42b883', subcategory: 'tools' },
  { name: 'Postman', category: 'testing-tooling', icon: 'postman', color: '#ff6c37', subcategory: 'tools' },
  { name: 'CI/CD Pipelines', category: 'testing-tooling', icon: 'ci-cd', color: '#0ea5e9', subcategory: 'tools' },
  { name: 'GitHub Actions', category: 'testing-tooling', icon: 'github-actions', color: '#2088ff', subcategory: 'tools' },
  { name: 'Vercel', category: 'testing-tooling', icon: 'vercel', color: '#000000', subcategory: 'tools' },
  { name: 'Figma', category: 'testing-tooling', icon: 'figma', color: '#f24e1e', subcategory: 'tools' },
  { name: 'Jira', category: 'testing-tooling', icon: 'jira', color: '#0052cc', subcategory: 'tools' },
  { name: 'SDLC', category: 'testing-tooling', icon: 'sdlc', color: '#8b5cf6', subcategory: 'tools' },
  { name: 'Miro', category: 'testing-tooling', icon: 'miro', color: '#050038', subcategory: 'tools' },

  // AI / ML
  { name: 'LLM APIs', category: 'ai-ml', icon: 'llm', color: '#412991' },
  { name: 'OpenAI API', category: 'ai-ml', icon: 'openai', color: '#412991' },
  { name: 'Generative AI', category: 'ai-ml', icon: 'ai', color: '#ff6b6b' },
  { name: 'Prompt Engineering', category: 'ai-ml', icon: 'prompt', color: '#412991' }
];

export const skillCategories: SkillCategory[] = [
  {
    key: 'frontend',
    label: 'Frontend',
    description: 'UI engineering, state management, accessibility, and polished user experiences.',
    icon: '💻',
    color: '#3178c6'
  },
  {
    key: 'backend-architecture',
    label: 'Backend & Architecture',
    description: 'Production APIs, secure services, and architectural design for scalable systems.',
    icon: '⚙️',
    color: '#339933',
    subcategories: [
      { key: 'runtime', label: 'Runtime & APIs' },
      { key: 'patterns', label: 'Architecture Patterns' }
    ]
  },
  {
    key: 'data-infrastructure',
    label: 'Data & Infrastructure',
    description: 'Data modeling, persistence, cloud platforms, and deployment infrastructure.',
    icon: '🗄️',
    color: '#ff9900',
    subcategories: [
      { key: 'database', label: 'Databases' },
      { key: 'infrastructure', label: 'Cloud & Infrastructure' }
    ]
  },
  {
    key: 'testing-tooling',
    label: 'Testing & Tooling',
    description: 'Quality assurance practices, test automation, and modern engineering workflow tools.',
    icon: '🧪',
    color: '#ff4785',
    subcategories: [
      { key: 'testing', label: 'Testing' },
      { key: 'tools', label: 'Tooling & Process' }
    ]
  },
  {
    key: 'ai-ml',
    label: 'AI / ML',
    description: 'LLM-powered capabilities, API integrations, and practical generative AI features.',
    icon: '🤖',
    color: '#412991'
  }
];
