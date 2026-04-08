import type { Skill, SkillCategory } from '$lib/types/portfolio';

export const skills: Skill[] = [
  // Frontend
  { name: 'Vue 2', category: 'frontend', proficiency: 90, icon: 'vue2', color: '#42b883' },
  { name: 'Vue 3', category: 'frontend', proficiency: 95, icon: 'vue3', color: '#42b883' },
  { name: 'JavaScript ES6+', category: 'frontend', proficiency: 95, icon: 'javascript', color: '#f7df1e' },
  { name: 'HTML5', category: 'frontend', proficiency: 94, icon: 'html5', color: '#e34f26' },
  { name: 'TypeScript', category: 'frontend', proficiency: 92, icon: 'typescript', color: '#3178c6' },
  { name: 'CSS3', category: 'frontend', proficiency: 92, icon: 'css3', color: '#1572b6' },
  { name: 'Nuxt.js', category: 'frontend', proficiency: 91, icon: 'nuxt', color: '#00dc82' },
  { name: 'Quasar Framework', category: 'frontend', proficiency: 85, icon: 'quasar', color: '#1976d2' },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 90, icon: 'tailwind', color: '#06b6d4' },
  { name: 'Pinia', category: 'frontend', proficiency: 89, icon: 'pinia', color: '#ffd93d' },
  { name: 'Vuex', category: 'frontend', proficiency: 88, icon: 'vuex', color: '#42b883' },
  { name: 'React.js', category: 'frontend', proficiency: 70, icon: 'react', color: '#61dafb' },
  { name: 'Next.js', category: 'frontend', proficiency: 55, icon: 'nextjs', color: '#000000' },
  { name: 'Redux', category: 'frontend', proficiency: 50, icon: 'redux', color: '#764abc' },
  { name: 'Svelte', category: 'frontend', proficiency: 72, icon: 'svelte', color: '#ff3e00' },
  { name: 'SvelteKit', category: 'frontend', proficiency: 70, icon: 'sveltekit', color: '#ff3e00' },
  { name: 'ARIA', category: 'frontend', proficiency: 68, icon: 'aria', color: '#0066cc' },
  { name: 'Internationalization', category: 'frontend', proficiency: 64, icon: 'i18n', color: '#ff9500' },

  // Backend & Architecture (runtime/api + patterns)
  { name: 'RESTful APIs', category: 'backend-architecture', proficiency: 93, icon: 'api', color: '#ff6b6b' },
  { name: 'Express.js', category: 'backend-architecture', proficiency: 91, icon: 'express', color: '#000000' },
  { name: 'Node.js', category: 'backend-architecture', proficiency: 89, icon: 'nodejs', color: '#339933' },
  { name: 'API Design', category: 'backend-architecture', proficiency: 88, icon: 'api-design', color: '#ff6b6b' },
  { name: 'JWT', category: 'backend-architecture', proficiency: 85, icon: 'jwt', color: '#d63aff' },
  { name: 'OAuth2', category: 'backend-architecture', proficiency: 80, icon: 'oauth', color: '#eb5424' },
  { name: 'SSO', category: 'backend-architecture', proficiency: 78, icon: 'sso', color: '#2563eb' },
  { name: 'GraphQL', category: 'backend-architecture', proficiency: 64, icon: 'graphql', color: '#e10098' },
  { name: 'tRPC', category: 'backend-architecture', proficiency: 62, icon: 'trpc', color: '#2596be' },
  { name: 'NestJS', category: 'backend-architecture', proficiency: 72, icon: 'nestjs', color: '#e0234e' },
  { name: 'Node Event Loop', category: 'backend-architecture', proficiency: 78, icon: 'node-event-loop', color: '#339933' },
  { name: 'Node Streams', category: 'backend-architecture', proficiency: 70, icon: 'node-streams', color: '#339933' },
  { name: 'Design Patterns', category: 'backend-architecture', proficiency: 88, icon: 'patterns', color: '#8b5cf6', subcategory: 'patterns' },
  { name: 'Performance Optimization', category: 'backend-architecture', proficiency: 86, icon: 'performance', color: '#f59e0b', subcategory: 'patterns' },
  { name: 'Scalability Patterns', category: 'backend-architecture', proficiency: 84, icon: 'scalability', color: '#06b6d4', subcategory: 'patterns' },
  { name: 'Monorepo Architecture', category: 'backend-architecture', proficiency: 82, icon: 'monorepo', color: '#6366f1', subcategory: 'patterns' },
  { name: 'RBAC', category: 'backend-architecture', proficiency: 80, icon: 'rbac', color: '#0052cc', subcategory: 'patterns' },
  { name: 'Feature Flags', category: 'backend-architecture', proficiency: 76, icon: 'feature-flags', color: '#7c3aed', subcategory: 'patterns' },
  { name: 'System Design', category: 'backend-architecture', proficiency: 84, icon: 'system-design', color: '#2563eb', subcategory: 'patterns' },
  { name: 'OOP', category: 'backend-architecture', proficiency: 82, icon: 'oop', color: '#0f766e', subcategory: 'patterns' },
  { name: 'DSA', category: 'backend-architecture', proficiency: 80, icon: 'dsa', color: '#b45309', subcategory: 'patterns' },
  { name: 'Headless Architecture', category: 'backend-architecture', proficiency: 74, icon: 'headless', color: '#6366f1', subcategory: 'patterns' },
  { name: 'Microservices', category: 'backend-architecture', proficiency: 35, icon: 'microservices', color: '#00d4aa', subcategory: 'patterns' },

  // Data & Infrastructure (database + infra)
  { name: 'MySQL', category: 'data-infrastructure', proficiency: 68, icon: 'mysql', color: '#4479a1', subcategory: 'database' },
  { name: 'Firebase', category: 'data-infrastructure', proficiency: 64, icon: 'firebase', color: '#ffca28', subcategory: 'database' },
  { name: 'PostgreSQL', category: 'data-infrastructure', proficiency: 62, icon: 'postgresql', color: '#336791', subcategory: 'database' },
  { name: 'MongoDB', category: 'data-infrastructure', proficiency: 40, icon: 'mongodb', color: '#47a248', subcategory: 'database' },
  { name: 'DynamoDB', category: 'data-infrastructure', proficiency: 45, icon: 'dynamodb', color: '#4053d6', subcategory: 'database' },
  { name: 'AWS', category: 'data-infrastructure', proficiency: 42, icon: 'aws', color: '#ff9900', subcategory: 'infrastructure' },
  { name: 'GCP', category: 'data-infrastructure', proficiency: 38, icon: 'gcp', color: '#4285f4', subcategory: 'infrastructure' },
  { name: 'Docker', category: 'data-infrastructure', proficiency: 36, icon: 'docker', color: '#2496ed', subcategory: 'infrastructure' },

  // Testing & Tooling (testing + tools)
  { name: 'Vitest', category: 'testing-tooling', proficiency: 66, icon: 'vitest', color: '#6ec38a', subcategory: 'testing' },
  { name: 'Jest', category: 'testing-tooling', proficiency: 60, icon: 'jest', color: '#c21325', subcategory: 'testing' },
  { name: 'Playwright', category: 'testing-tooling', proficiency: 56, icon: 'playwright', color: '#2e5aa8', subcategory: 'testing' },
  { name: 'Git', category: 'testing-tooling', proficiency: 92, icon: 'git', color: '#f05032', subcategory: 'tools' },
  { name: 'Vue DevTools', category: 'testing-tooling', proficiency: 90, icon: 'vue-devtools', color: '#42b883', subcategory: 'tools' },
  { name: 'Storybook', category: 'testing-tooling', proficiency: 86, icon: 'storybook', color: '#ff4785', subcategory: 'tools' },
  { name: 'SDLC', category: 'testing-tooling', proficiency: 82, icon: 'sdlc', color: '#8b5cf6', subcategory: 'tools' },
  { name: 'Jira', category: 'testing-tooling', proficiency: 62, icon: 'jira', color: '#0052cc', subcategory: 'tools' },
  { name: 'Figma', category: 'testing-tooling', proficiency: 60, icon: 'figma', color: '#f24e1e', subcategory: 'tools' },
  { name: 'Miro', category: 'testing-tooling', proficiency: 50, icon: 'miro', color: '#050038', subcategory: 'tools' },
  { name: 'Postman', category: 'testing-tooling', proficiency: 78, icon: 'postman', color: '#ff6c37', subcategory: 'tools' },
  { name: 'CI/CD Pipelines', category: 'testing-tooling', proficiency: 80, icon: 'ci-cd', color: '#0ea5e9', subcategory: 'tools' },
  { name: 'GitHub Actions', category: 'testing-tooling', proficiency: 70, icon: 'github-actions', color: '#2088ff', subcategory: 'tools' },
  { name: 'Vercel', category: 'testing-tooling', proficiency: 72, icon: 'vercel', color: '#000000', subcategory: 'tools' },

  // AI / ML
  { name: 'LLM APIs', category: 'ai-ml', proficiency: 50, icon: 'llm', color: '#412991' },
  { name: 'OpenAI API', category: 'ai-ml', proficiency: 48, icon: 'openai', color: '#412991' },
  { name: 'Generative AI', category: 'ai-ml', proficiency: 44, icon: 'ai', color: '#ff6b6b' }
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