import type { WorkExperience } from '$lib/types/portfolio';

export const workExperience: WorkExperience[] = [
  {
    id: 'senior-fullstack-1',
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    location: 'Remote',
    duration: '2023 - Present',
    startDate: '2023-01',
    current: true,
    achievements: [
      'Led development of a fintech platform processing $10M+ monthly transactions',
      'Architected and implemented microservices architecture serving 100K+ users',
      'Reduced application load time by 60% through performance optimization',
      'Mentored 3 junior developers and established coding standards'
    ],
    technologies: ['Vue.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
    description: 'Leading full-stack development for enterprise applications with focus on scalability and performance.'
  },
  {
    id: 'fullstack-developer-2',
    title: 'Full Stack Developer',
    company: 'InnovateTech',
    location: 'San Francisco, CA',
    duration: '2021 - 2023',
    startDate: '2021-03',
    endDate: '2023-01',
    current: false,
    achievements: [
      'Built AI-powered SaaS platform generating $2M+ in annual revenue',
      'Implemented real-time collaboration features used by 50K+ users',
      'Developed RESTful APIs handling 1M+ requests daily',
      'Collaborated with cross-functional teams to deliver MVP in 3 months'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io', 'Heroku', 'Jest'],
    description: 'Developed scalable web applications with focus on user experience and business impact.'
  },
  {
    id: 'frontend-developer-3',
    title: 'Frontend Developer',
    company: 'Digital Solutions Inc.',
    location: 'New York, NY',
    duration: '2020 - 2021',
    startDate: '2020-06',
    endDate: '2021-03',
    current: false,
    achievements: [
      'Built responsive e-commerce platform with 99.9% uptime',
      'Optimized frontend performance resulting in 40% faster page loads',
      'Implemented accessibility features achieving WCAG 2.1 AA compliance',
      'Reduced bundle size by 30% through code splitting and optimization'
    ],
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'Webpack', 'Git', 'Jest', 'Cypress'],
    description: 'Specialized in creating responsive and accessible user interfaces for web applications.'
  }
];
