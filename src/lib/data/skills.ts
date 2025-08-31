import type { Skill } from '$lib/types/portfolio';

export const skills: Skill[] = [
  // Frontend
  { name: 'Vue.js', category: 'frontend', proficiency: 95, icon: 'vue', color: '#42b883' },
  { name: 'React', category: 'frontend', proficiency: 90, icon: 'react', color: '#61dafb' },
  { name: 'TypeScript', category: 'frontend', proficiency: 92, icon: 'typescript', color: '#3178c6' },
  { name: 'JavaScript', category: 'frontend', proficiency: 95, icon: 'javascript', color: '#f7df1e' },
  { name: 'HTML5', category: 'frontend', proficiency: 98, icon: 'html5', color: '#e34f26' },
  { name: 'CSS3', category: 'frontend', proficiency: 90, icon: 'css3', color: '#1572b6' },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 88, icon: 'tailwind', color: '#06b6d4' },
  { name: 'Svelte', category: 'frontend', proficiency: 85, icon: 'svelte', color: '#ff3e00' },
  { name: 'Next.js', category: 'frontend', proficiency: 82, icon: 'nextjs', color: '#000000' },
  { name: 'Nuxt.js', category: 'frontend', proficiency: 80, icon: 'nuxt', color: '#00dc82' },

  // Backend
  { name: 'Node.js', category: 'backend', proficiency: 92, icon: 'nodejs', color: '#339933' },
  { name: 'Express.js', category: 'backend', proficiency: 90, icon: 'express', color: '#000000' },
  { name: 'Python', category: 'backend', proficiency: 85, icon: 'python', color: '#3776ab' },
  { name: 'FastAPI', category: 'backend', proficiency: 80, icon: 'fastapi', color: '#009688' },
  { name: 'Django', category: 'backend', proficiency: 75, icon: 'django', color: '#092e20' },
  { name: 'GraphQL', category: 'backend', proficiency: 78, icon: 'graphql', color: '#e10098' },
  { name: 'REST APIs', category: 'backend', proficiency: 95, icon: 'api', color: '#ff6b6b' },

  // Database
  { name: 'PostgreSQL', category: 'database', proficiency: 88, icon: 'postgresql', color: '#336791' },
  { name: 'MongoDB', category: 'database', proficiency: 85, icon: 'mongodb', color: '#47a248' },
  { name: 'Redis', category: 'database', proficiency: 80, icon: 'redis', color: '#dc382d' },
  { name: 'MySQL', category: 'database', proficiency: 75, icon: 'mysql', color: '#4479a1' },

  // Testing
  { name: 'Jest', category: 'testing', proficiency: 85, icon: 'jest', color: '#c21325' },
  { name: 'Vitest', category: 'testing', proficiency: 80, icon: 'vitest', color: '#6ec38a' },
  { name: 'Cypress', category: 'testing', proficiency: 78, icon: 'cypress', color: '#17202c' },
  { name: 'Playwright', category: 'testing', proficiency: 75, icon: 'playwright', color: '#2e5aa8' },
  { name: 'React Testing Library', category: 'testing', proficiency: 82, icon: 'rtl', color: '#e33332' },

  // Tools
  { name: 'Git', category: 'tools', proficiency: 90, icon: 'git', color: '#f05032' },
  { name: 'Docker', category: 'tools', proficiency: 85, icon: 'docker', color: '#2496ed' },
  { name: 'Webpack', category: 'tools', proficiency: 80, icon: 'webpack', color: '#8dd6f9' },
  { name: 'Vite', category: 'tools', proficiency: 88, icon: 'vite', color: '#646cff' },
  { name: 'Figma', category: 'tools', proficiency: 70, icon: 'figma', color: '#f24e1e' },
  { name: 'Postman', category: 'tools', proficiency: 85, icon: 'postman', color: '#ff6c37' },

  // Cloud
  { name: 'AWS', category: 'cloud', proficiency: 80, icon: 'aws', color: '#ff9900' },
  { name: 'Vercel', category: 'cloud', proficiency: 85, icon: 'vercel', color: '#000000' },
  { name: 'Netlify', category: 'cloud', proficiency: 80, icon: 'netlify', color: '#00c7b7' },
  { name: 'Heroku', category: 'cloud', proficiency: 75, icon: 'heroku', color: '#430098' },
  { name: 'Firebase', category: 'cloud', proficiency: 70, icon: 'firebase', color: '#ffca28' },

  // DevOps
  { name: 'CI/CD', category: 'devops', proficiency: 80, icon: 'cicd', color: '#ff6b6b' },
  { name: 'GitHub Actions', category: 'devops', proficiency: 85, icon: 'github-actions', color: '#2088ff' },
  { name: 'Kubernetes', category: 'devops', proficiency: 65, icon: 'kubernetes', color: '#326ce5' },
  { name: 'Nginx', category: 'devops', proficiency: 75, icon: 'nginx', color: '#009639' },

  // AI/ML
  { name: 'TensorFlow', category: 'ai-ml', proficiency: 70, icon: 'tensorflow', color: '#ff6f00' },
  { name: 'Machine Learning', category: 'ai-ml', proficiency: 75, icon: 'ml', color: '#ff6b6b' },
  { name: 'OpenAI API', category: 'ai-ml', proficiency: 80, icon: 'openai', color: '#412991' },
  { name: 'LangChain', category: 'ai-ml', proficiency: 70, icon: 'langchain', color: '#00ff00' }
];

export const skillCategories = [
  { key: 'frontend', label: 'Frontend', icon: '💻' },
  { key: 'backend', label: 'Backend', icon: '⚙️' },
  { key: 'database', label: 'Database', icon: '🗄️' },
  { key: 'testing', label: 'Testing', icon: '🧪' },
  { key: 'tools', label: 'Tools', icon: '🛠️' },
  { key: 'cloud', label: 'Cloud', icon: '☁️' },
  { key: 'devops', label: 'DevOps', icon: '🚀' },
  { key: 'ai-ml', label: 'AI/ML', icon: '🤖' }
];
