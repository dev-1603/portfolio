import type { WorkExperience } from '$lib/types/portfolio';

export const workExperience: WorkExperience[] = [
  {
    id: 'sde-2-applore',
    title: 'Software Development Engineer - 2',
    company: 'Applore Technologies',
    location: 'Remote',
    duration: 'Oct 2024 - Present',
    startDate: '2024-10',
    current: true,
    achievements: [
      'Led frontend development for Reach Mobile (US telecom startup) to build an innovative e-commerce store using Vue/React stack',
      'Integrated CMS platforms (Contentful, Strapi) to ensure a seamless UI/UX',
      'Collaborated with cross-functional teams to deliver high-performance, scalable solutions',
      'Architected modern e-commerce solutions with focus on performance and user experience'
    ],
    technologies: ['Vue.js', 'React', 'TypeScript', 'Contentful', 'Strapi', 'Node.js', 'Tailwind CSS'],
    description: 'Leading frontend development for innovative e-commerce solutions in the US telecom industry.'
  },
  {
    id: 'senior-swe-gate-ai',
    title: 'Senior Software Engineer',
    company: 'Gate AI Pvt Ltd',
    location: 'Remote',
    duration: 'Dec 2023 - Sept 2024',
    startDate: '2023-12',
    endDate: '2024-09',
    current: false,
    achievements: [
      'Spearheaded an AI-powered multi-tenant chat application using Vue 3 and Nuxt.js with robust data security and LLM API integrations',
      'Designed breakthrough solutions such as a dynamic Component Library and Layout Builder, reducing development time by 30%',
      'Built a centralized authentication module (JWT/OAuth) for secure access across all components',
      'Implemented advanced AI features and LLM integrations for enhanced user experience'
    ],
    technologies: ['Vue.js', 'Nuxt.js', 'TypeScript', 'JWT', 'OAuth', 'LLM APIs', 'Multi-tenant Architecture'],
    description: 'Developed AI-powered applications with focus on security, scalability, and innovative solutions.'
  },
  {
    id: 'senior-swe-geekyants',
    title: 'Senior Software Engineer',
    company: 'Geekyants',
    location: 'Remote',
    duration: 'Sept 2021 - Nov 2023',
    startDate: '2021-09',
    endDate: '2023-11',
    current: false,
    achievements: [
      'Developed a portfolio-centric investment platform using Nuxt 3 and Firebase, enabling real-time tracking and notifications',
      'Engineered CMS solutions with role-based workflows and dynamic content previews using Vue 3 and Quasar',
      'Created data visualization dashboards with Chart.js to deliver actionable insights',
      'Built scalable fintech solutions with real-time data processing and analytics'
    ],
    technologies: ['Nuxt.js', 'Vue.js', 'Firebase', 'Quasar Framework', 'Chart.js', 'TypeScript', 'Real-time APIs'],
    description: 'Developed fintech and CMS solutions with focus on real-time data processing and user experience.'
  },
  {
    id: 'frontend-dev-kisai',
    title: 'Frontend Developer',
    company: 'KISAI (Ideanz IT Solutions)',
    location: 'Remote',
    duration: 'May 2021 - Sept 2021',
    startDate: '2021-05',
    endDate: '2021-09',
    current: false,
    achievements: [
      'Pioneered a no-code platform featuring drag-and-drop Schema and Layout Builders using Vue.js and Tailwind CSS',
      'Developed a reusable Component Library with Storybook, ensuring consistent UI and reducing development cycles',
      'Implemented innovative drag-and-drop functionality for non-technical users',
      'Created comprehensive documentation and component guidelines'
    ],
    technologies: ['Vue.js', 'Tailwind CSS', 'Storybook', 'Drag-and-Drop APIs', 'Component Libraries'],
    description: 'Developed innovative no-code platforms and reusable component libraries.'
  },
  {
    id: 'software-eng-kalsoft',
    title: 'Software Engineer',
    company: 'Kalsoft Solutions',
    location: 'Bhubaneswar, Odisha',
    duration: 'Nov 2019 - May 2021',
    startDate: '2019-11',
    endDate: '2021-05',
    current: false,
    achievements: [
      'Developed and maintained multiple web applications using Vue.js and Node.js',
      'Implemented responsive designs and optimized application performance',
      'Collaborated with the design team to create intuitive user interfaces',
      'Built foundational skills in full-stack web development'
    ],
    technologies: ['Vue.js', 'Node.js', 'JavaScript', 'HTML5', 'CSS3', 'MySQL', 'Git'],
    description: 'Developed web applications with focus on responsive design and performance optimization.'
  }
];
