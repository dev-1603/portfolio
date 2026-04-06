import type { Skill } from '$lib/types/portfolio';

export const skills: Skill[] = [
  // Frontend (Highly experienced)
  { name: 'Vue.js', category: 'frontend', proficiency: 95, icon: 'vue', color: '#42b883' },
  { name: 'Nuxt.js', category: 'frontend', proficiency: 92, icon: 'nuxt', color: '#00dc82' },
  { name: 'JavaScript ES6+', category: 'frontend', proficiency: 95, icon: 'javascript', color: '#f7df1e' },
  { name: 'TypeScript', category: 'frontend', proficiency: 92, icon: 'typescript', color: '#3178c6' },
  { name: 'HTML5', category: 'frontend', proficiency: 95, icon: 'html5', color: '#e34f26' },
  { name: 'CSS3', category: 'frontend', proficiency: 92, icon: 'css3', color: '#1572b6' },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 90, icon: 'tailwind', color: '#06b6d4' },
  { name: 'Pinia', category: 'frontend', proficiency: 90, icon: 'pinia', color: '#ffd93d' },
  { name: 'Vuex', category: 'frontend', proficiency: 88, icon: 'vuex', color: '#42b883' },
  { name: 'Quasar Framework', category: 'frontend', proficiency: 85, icon: 'quasar', color: '#1976d2' },

  // Frontend (Mid level)
  { name: 'React.js', category: 'frontend', proficiency: 60, icon: 'react', color: '#61dafb' },
  { name: 'Next.js', category: 'frontend', proficiency: 55, icon: 'nextjs', color: '#000000' },
  { name: 'Redux', category: 'frontend', proficiency: 50, icon: 'redux', color: '#764abc' },

  // Backend (High in Express/REST, Mid in GraphQL, Low in Microservices)
  { name: 'RESTful APIs', category: 'backend', proficiency: 92, icon: 'api', color: '#ff6b6b' },
  { name: 'Express.js', category: 'backend', proficiency: 90, icon: 'express', color: '#000000' },
  { name: 'Node.js', category: 'backend', proficiency: 88, icon: 'nodejs', color: '#339933' },
  { name: 'GraphQL', category: 'backend', proficiency: 60, icon: 'graphql', color: '#e10098' },
  { name: 'Microservices', category: 'backend', proficiency: 35, icon: 'microservices', color: '#00d4aa' },

  // Database (Mid in SQL/Firebase, Low in Mongo)
  { name: 'MySQL', category: 'database', proficiency: 60, icon: 'mysql', color: '#4479a1' },
  { name: 'PostgreSQL', category: 'database', proficiency: 55, icon: 'postgresql', color: '#336791' },
  { name: 'Firebase', category: 'database', proficiency: 60, icon: 'firebase', color: '#ffca28' },
  { name: 'MongoDB', category: 'database', proficiency: 30, icon: 'mongodb', color: '#47a248' },

  // Testing (Mid level)
  { name: 'Vitest', category: 'testing', proficiency: 60, icon: 'vitest', color: '#6ec38a' },
  { name: 'Jest', category: 'testing', proficiency: 55, icon: 'jest', color: '#c21325' },
  { name: 'Playwright', category: 'testing', proficiency: 50, icon: 'playwright', color: '#2e5aa8' },

  // Tools (High in Git/Storybook/DevTools, Mid in Figma/Jira, Low in Docker)
  { name: 'Git', category: 'tools', proficiency: 92, icon: 'git', color: '#f05032' },
  { name: 'Vue DevTools', category: 'tools', proficiency: 90, icon: 'vue-devtools', color: '#42b883' },
  { name: 'Storybook', category: 'tools', proficiency: 85, icon: 'storybook', color: '#ff4785' },
  { name: 'Jira', category: 'tools', proficiency: 60, icon: 'jira', color: '#0052cc' },
  { name: 'Figma', category: 'tools', proficiency: 55, icon: 'figma', color: '#f24e1e' },
  { name: 'Miro', category: 'tools', proficiency: 50, icon: 'miro', color: '#050038' },
  { name: 'Docker', category: 'tools', proficiency: 30, icon: 'docker', color: '#2496ed' },

  // Cloud (Low level)
  { name: 'AWS', category: 'cloud', proficiency: 35, icon: 'aws', color: '#ff9900' },
  { name: 'GCP', category: 'cloud', proficiency: 30, icon: 'gcp', color: '#4285f4' },

  // AI/ML (Low level)
  { name: 'LLM APIs', category: 'ai-ml', proficiency: 35, icon: 'llm', color: '#412991' },
  { name: 'OpenAI API', category: 'ai-ml', proficiency: 30, icon: 'openai', color: '#412991' },
  { name: 'Generative AI', category: 'ai-ml', proficiency: 25, icon: 'ai', color: '#ff6b6b' }
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
