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
    roles: [
      'Led frontend development team as Vue Consultant for Reach Mobile (US telecom startup)',
      'Architected and implemented scalable UI/UX using Vue/React ecosystem',
      'Integrated CMS platforms (Contentful, Strapi) for streamlined content management',
      'Coordinated with designers and cross-disciplinary teams for high-quality solutions',
      'Led development of e-commerce storefront with high-performance architecture for US telecom brand',
      'Collaborated closely with designers to ensure cohesive user experience'
    ],
    achievements: [
      'Successfully delivered high-performance e-commerce store for US telecom startup',
      'Delivered consistent user experience across the storefront through CMS integration with Contentful and Strapi',
      'Micro-frontend architecture across 15+ AWS Lambda endpoints with DynamoDB for a US telecom brand',
      'Built architecture that supports rapid product expansion without rework'
    ],
    technologies: ['Vue.js', 'React.js', 'Contentful', 'Strapi', 'TypeScript', 'JavaScript'],
    description: 'Frontend lead for Reach Mobile - a US telecom e-commerce product. Vue/React stack, Contentful and Strapi for CMS, micro-frontend architecture across 15+ AWS Lambda endpoints with DynamoDB.',
    highlights: ['E-commerce Platform', 'CMS Integration', 'Team Leadership', 'Performance Optimization']
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
    roles: [
      'Led full-stack development of multi-tenant AI-driven chat platform',
      'Engineered Node.js backend services with LLM API integrations (LangChain)',
      'Developed centralized JWT/OAuth authentication for unified access',
      'Built internal administrative portal for customer support and tenant management',
      'Implemented data security controls and data loss prevention for multi-tenant environments',
      'Designed database schemas using MySQL with Sequelize ORM',
      'Conducted performance monitoring and optimization for scalability',
      'Maintained comprehensive documentation for system architecture and APIs',
      'Led training sessions for platform adoption and user empowerment'
    ],
    achievements: [
      'Designed JWT authorizer middleware and RBAC system for per-tenant API access control',
      'Implemented event-driven architecture for async AI workflow processing',
      'Built dynamic component library used across all tenant frontends',
      'Reduced development time by 30% through dynamic component library and layout builder',
      'Delivered feature-rich, highly secure chat environment with public/private models',
      'Implemented sensitive data monitoring for real-time risk identification',
      'Established shared and closed chatroom environments with data integrity',
      'Successfully integrated diverse LLMs for advanced AI-powered interactions',
      'Ensured regulatory compliance with data privacy protocols'
    ],
    technologies: ['Vue 2', 'Vue 3', 'Nuxt 2', 'Nuxt 3', 'Node.js', 'Express.js', 'MySQL', 'Sequelize', 'LangChain', 'TypeScript', 'Tailwind CSS', 'Pinia', 'JWT/OAuth'],
    description: 'Built a multi-tenant GenAI SaaS platform - full stack, from auth middleware and RBAC to Vue 3 frontend and Node.js/LangChain backend.',
    highlights: ['AI Integration', '30% Time Reduction', 'Multi-tenant Architecture', 'Security Implementation']
  },
  {
    id: 'senior-swe-geekyants',
    title: 'Senior Software Engineer',
    company: 'Geekyants Private Limited',
    location: 'Remote',
    duration: 'Sept 2021 - Nov 2023',
    startDate: '2021-09',
    endDate: '2023-11',
    current: false,
    roles: [
      'Developed transactional SSR-based investment platform with real-time portfolio tracking',
      'Engineered versatile CMS with role-based workflows and dynamic content preview',
      'Built backend API applications for content management, PDF generation, email systems',
      'Developed SPA admin/advisory console with SSO and role-based access control',
      'Implemented universal state management using Pinia library',
      'Integrated analytics and SEO for enhanced functionality',
      'Created data visualization dashboards using Chart.js and E-charts',
      'Designed database schemas and optimized queries for performance',
      'Collaborated with design teams for engaging and responsive UI/UX'
    ],
    achievements: [
      'Built SSR investment platform in Nuxt 3 - real-time portfolio valuations, deposit/withdrawal flows, and rebalancing notifications for 10,000+ investors',
      'Developed SPA advisory console in Vue 3/Quasar with SSO, RBAC, client portfolio management, and MIS report generation',
      'Built CMS with two-step role-based approval workflow, live content preview, and annotated revision flow',
      'Designed and deployed Node.js/Express content API - email templates via Sendgrid, PDF generation with pdfmake, and scheduled data jobs',
      'Implemented universal state management using Pinia across all frontend products',
      'Worked with GCP, Docker, Kubernetes, and Gitlab CI for deployment across all four products'
    ],
    technologies: ['Vue 2', 'Vue 3', 'Nuxt 2', 'Nuxt 3', 'Quasar v2', 'TypeScript', 'Node.js', 'Express.js', 'Firebase', 'PostgreSQL', 'Docker', 'Kubernetes', 'GCP', 'Pinia', 'Chart.js', 'E-charts', 'Sendgrid', 'pdfmake'],
    description: 'Worked across a four-product fintech ecosystem - an SSR investment platform, an SPA advisory console with SSO, a CMS with approval workflows, and a Node.js content API. Each product shipped independently; all shared the same infrastructure.',
    highlights: ['Fintech Platform', 'Real-time Tracking', 'Data Visualization', 'SSR Implementation'],
    majorProjects: [
      {
        name: 'Transactional Portfolio Investment Website',
        description: 'SSR platform for portfolio investments with real-time tracking, notifications, and rebalancing'
      },
      {
        name: 'Advisory & Admin Console',
        description: 'SPA with SSO, MIS reporting, role-based access, portfolio/client management'
      },
      {
        name: 'Content Management System',
        description: 'Multi-platform CMS with preview, two-step approval, customizable syntax'
      },
      {
        name: 'Content Backend Server',
        description: 'Node.js API for content management, email templates, scheduled jobs'
      }
    ]
  },
  {
    id: 'frontend-dev-kisai',
    title: 'Frontend Developer',
    company: 'Ideanz IT Solutions (now KISAI)',
    location: 'Remote',
    duration: 'May 2021 - Sept 2021',
    startDate: '2021-05',
    endDate: '2021-09',
    current: false,
    roles: [
      'Built UI and core modules for a no-code drag-and-drop platform',
      'Developed reusable component library using Vue.js, Tailwind CSS, and Storybook',
      'Designed intuitive Layout Builder with drag-and-drop functionality',
      'Implemented Schema Builder for complex stateful application logic',
      'Created flow chart constructor for enhanced flexibility and customization',
      'Ensured UI consistency and optimized development workflows',
      'Worked on platform development for web and mobile app creation'
    ],
    achievements: [
      'Built a dynamic UI toolkit that reduced time-to-market for non-technical teams',
      'Core contributor to no-code platform development from initial build to delivery',
      'Significantly optimized development processes through component library',
      'Enabled effortless web page creation through intuitive builder tools',
      'Facilitated complex application design without coding expertise',
      'Reduced development cycles and ensured consistent UI patterns'
    ],
    technologies: ['JavaScript', 'Vue.js 2&3', 'Tailwind CSS', 'Storybook', 'Git', 'GitLab'],
    description: 'Built the frontend for a no-code platform - drag-and-drop layout builder, schema builder for stateful logic, and a reusable component library in Vue.js and Storybook.',
    highlights: ['No-Code Platform', 'Component Library', 'Drag-and-Drop Builder', 'UI Toolkit']
  },
  {
    id: 'software-eng-kalsoft',
    title: 'Software Engineer',
    company: 'Kalsoft Solutions Pvt Ltd',
    location: 'Bhubaneswar, Odisha',
    duration: 'Nov 2019 - May 2021',
    startDate: '2019-11',
    endDate: '2021-05',
    current: false,
    roles: [
      'Developed and maintained scalable web applications using Vue.js and Node.js',
      'Collaborated with design team for intuitive and responsive user interfaces',
      'Developed CRM modules covering account management, project tracking, and deliverable monitoring',
      'Designed UI components and client-side functionality',
      'Implemented multi-tenant architecture for enterprise solutions',
      'Developed spreadsheet interfaces for bulk operations',
      'Created product comparison and analysis modules'
    ],
    achievements: [
      'Built multi-tenant CRM supporting account management, project tracking, deliverable monitoring, and bulk order entry via Jspreadsheet with Apollo GraphQL backend',
      'Developed product comparison and market analysis platform - real-time workshops, Charge Code system for configurable sessions, and multi-language support',
      'Implemented product, comparison, implementation, and advisor modules for the DTV market analysis tool',
      'Worked with NestJS/PostgreSQL on CRM backend and Feathers/MongoDB on the DTV platform',
      'Delivered spreadsheet-based bulk order interface using Jspreadsheet, Excel.js, and SheetJS'
    ],
    technologies: ['Vue.js', 'Vuex', 'Quasar', 'Node.js', 'NestJS', 'FeathersJS', 'PostgreSQL', 'MongoDB', 'Apollo GraphQL', 'E-charts', 'Plotly.js', 'Jspreadsheet', 'Excel.js', 'SheetJS', 'Git', 'Bitbucket'],
    description: 'Built frontend across two products - a multi-tenant sales CRM for Valve and Service Industries, and a real-time market analysis tool with product comparison and design-to-value workflows.',
    highlights: ['Multi-tenant CRM', 'Real-time Platform', 'Bulk Operations', 'Enterprise Solutions'],
    majorProjects: [
      {
        name: 'Salesdesk CRM',
        description: 'Multi-tenant CRM for account management, project tracking, deliverable monitoring'
      },
      {
        name: 'Digital DTV - Market Analysis Tool',
        description: 'Real-time digital workshop platform with product comparison and reporting'
      }
    ]
  }
];
