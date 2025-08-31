import type { Skill } from '$lib/types/portfolio';

export const skills: Skill[] = [
  // Frontend
  { name: 'Vue.js', category: 'frontend', proficiency: 95, icon: 'vue', color: '#42b883' },
  { name: 'Nuxt.js', category: 'frontend', proficiency: 92, icon: 'nuxt', color: '#00dc82' },
  { name: 'Quasar Framework', category: 'frontend', proficiency: 88, icon: 'quasar', color: '#1976d2' },
  { name: 'React.js', category: 'frontend', proficiency: 90, icon: 'react', color: '#61dafb' },
  { name: 'Next.js', category: 'frontend', proficiency: 85, icon: 'nextjs', color: '#000000' },
  { name: 'TypeScript', category: 'frontend', proficiency: 92, icon: 'typescript', color: '#3178c6' },
  { name: 'JavaScript ES6+', category: 'frontend', proficiency: 95, icon: 'javascript', color: '#f7df1e' },
  { name: 'HTML5', category: 'frontend', proficiency: 98, icon: 'html5', color: '#e34f26' },
  { name: 'CSS3', category: 'frontend', proficiency: 92, icon: 'css3', color: '#1572b6' },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 90, icon: 'tailwind', color: '#06b6d4' },
  { name: 'Vuex', category: 'frontend', proficiency: 88, icon: 'vuex', color: '#42b883' },
  { name: 'Pinia', category: 'frontend', proficiency: 85, icon: 'pinia', color: '#ffd93d' },
  { name: 'Redux', category: 'frontend', proficiency: 82, icon: 'redux', color: '#764abc' },

  // Backend
  { name: 'Node.js', category: 'backend', proficiency: 92, icon: 'nodejs', color: '#339933' },
  { name: 'Express.js', category: 'backend', proficiency: 90, icon: 'express', color: '#000000' },
  { name: 'GraphQL', category: 'backend', proficiency: 85, icon: 'graphql', color: '#e10098' },
  { name: 'RESTful APIs', category: 'backend', proficiency: 95, icon: 'api', color: '#ff6b6b' },
  { name: 'Microservices', category: 'backend', proficiency: 82, icon: 'microservices', color: '#00d4aa' },

  // Database
  { name: 'MySQL', category: 'database', proficiency: 90, icon: 'mysql', color: '#4479a1' },
  { name: 'PostgreSQL', category: 'database', proficiency: 85, icon: 'postgresql', color: '#336791' },
  { name: 'MongoDB', category: 'database', proficiency: 82, icon: 'mongodb', color: '#47a248' },
  { name: 'Firebase', category: 'database', proficiency: 88, icon: 'firebase', color: '#ffca28' },

  // Testing
  { name: 'Jest', category: 'testing', proficiency: 88, icon: 'jest', color: '#c21325' },
  { name: 'Vitest', category: 'testing', proficiency: 85, icon: 'vitest', color: '#6ec38a' },
  { name: 'Playwright', category: 'testing', proficiency: 82, icon: 'playwright', color: '#2e5aa8' },

  // Tools
  { name: 'Git', category: 'tools', proficiency: 95, icon: 'git', color: '#f05032' },
  { name: 'Docker', category: 'tools', proficiency: 80, icon: 'docker', color: '#2496ed' },
  { name: 'Jira', category: 'tools', proficiency: 85, icon: 'jira', color: '#0052cc' },
  { name: 'Figma', category: 'tools', proficiency: 82, icon: 'figma', color: '#f24e1e' },
  { name: 'Miro', category: 'tools', proficiency: 75, icon: 'miro', color: '#050038' },
  { name: 'Storybook', category: 'tools', proficiency: 88, icon: 'storybook', color: '#ff4785' },
  { name: 'Vue DevTools', category: 'tools', proficiency: 90, icon: 'vue-devtools', color: '#42b883' },

  // Cloud
  { name: 'AWS', category: 'cloud', proficiency: 85, icon: 'aws', color: '#ff9900' },
  { name: 'GCP', category: 'cloud', proficiency: 78, icon: 'gcp', color: '#4285f4' },
  { name: 'Firebase', category: 'cloud', proficiency: 88, icon: 'firebase', color: '#ffca28' },

  // AI/ML
  { name: 'LLM APIs', category: 'ai-ml', proficiency: 85, icon: 'llm', color: '#412991' },
  { name: 'OpenAI API', category: 'ai-ml', proficiency: 82, icon: 'openai', color: '#412991' },
  { name: 'Generative AI', category: 'ai-ml', proficiency: 80, icon: 'ai', color: '#ff6b6b' }
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
