import type { Project } from '$lib/types/portfolio';

export const professionalProjects: Project[] = [
  {
    order: 1,
    id: 'ai-multi-tenant-chat',
    title: 'AI-Powered Multi-tenant Chat Application',
    description:
      'Architected an end-to-end chat application enabling multiple organizations to securely interact using advanced AI and LLM integrations. The system features modular chatroom configurations, real-time data protection, and customizable AI services for content understanding, automating workflows, and enhancing user communication.',
    role: 'Senior Software Engineer',
    company: 'Gate AI Pvt Ltd',
    impact:
      'Accelerated product delivery by 30% while providing highly secure, custom AI chat environments for diverse enterprise clients.',
    technologies: [
      'Vue.js',
      'Nuxt.js',
      'TypeScript',
      'JWT',
      'OAuth',
      'LLM APIs',
      'Multi-tenant Architecture'
    ],
    featured: true,
    image: '/project-images/ai-multi-tenant-chat.png',
    type: 'professional'
  },
  {
    order: 3,
    id: 'no-code-platform',
    title: 'Next-Gen No-Code Development Platform',
    description:
      'Pioneered a no-code platform allowing business users to design and launch web and mobile apps with a drag-and-drop experience. Integrated dynamic schema and layout builders, a universal component library, and robust UI prototyping tools, dramatically reducing go-to-market time and dependency on dedicated development teams.',
    role: 'Frontend Developer',
    company: 'KISAI (Ideanz IT Solutions)',
    impact:
      'Reduced app delivery time by 50%, empowering teams without coding expertise to launch complex solutions.',
    technologies: [
      'Vue.js',
      'Tailwind CSS',
      'Storybook',
      'Drag-and-Drop APIs',
      'Component Libraries'
    ],
    featured: true,
    image: '/project-images/no-code-platform.png',
    type: 'professional'
  },
  {
    order: 2,
    id: 'portfolio-investment-platform',
    title: 'Portfolio-centric Investment Platform',
    description:
      'Engineered an all-in-one investment tracking platform empowering users with real-time portfolio valuation, analytics dashboards, and proactive notifications for payments and rebalancing. The product is optimized for performance, featuring role-based workflows and seamless integration with finance APIs—enabling instant, data-driven decision making.',
    role: 'Senior Software Engineer',
    company: 'Geekyants',
    impact:
      'Enabled 10,000+ investors to manage assets efficiently, leading to smarter financial decisions and improved platform retention.',
    technologies: ['Nuxt.js', 'Vue.js', 'Firebase', 'Quasar Framework', 'Chart.js', 'TypeScript'],
    featured: true,
    image: '/project-images/investment-app.png',
    type: 'professional'
  },
  {
    order: 4,
    id: 'reach-mobile-ecommerce',
    title: 'Mobile E-commerce Platform',
    description:
      'Developed a modern, scalable e-commerce platform tailored for a major US telecom operator, integrating a Vue/React stack with robust CMS support. The solution delivers seamless shopping experiences, centralized content management, and rapid deployment of new product offerings, supporting high transaction volumes and real-time updates across devices.',
    role: 'Software Development Engineer - 2',
    company: 'Applore Technologies',
    impact:
      'Supported nationwide operations with 99.9% uptime, reduced product launch times, and enabled real-time marketing content changes.',
    technologies: [
      'Vue.js',
      'React',
      'TypeScript',
      'Contentful',
      'Strapi',
      'Node.js',
      'Tailwind CSS'
    ],
    featured: true,
    image: '/project-images/reach-ecommerce.png',
    type: 'professional'
  },
  {
    order: 5,
    id: 'cms-role-based-workflow',
    title: 'CMS with Role-based Workflows',
    description:
      'Built a flexible content management system supporting multi-level workflows, dynamic content previews, and live data visualizations. Enabled granular permissions, automated publishing processes, and collaborative editing for large enterprise content teams.',
    role: 'Senior Software Engineer',
    company: 'Geekyants',
    impact:
      'Streamlined content operations, improved compliance, and reduced publication errors for enterprise marketing and communications.',
    technologies: [
      'Vue.js',
      'Quasar Framework',
      'Node.js',
      'Role-based Access',
      'CMS Architecture'
    ],
    featured: false,
    image: '/project-images/cms-workflow.webp',
    type: 'professional'
  },
  {
    order: 6,
    id: 'sales-crm-kalsoft',
    title: 'SalesDesk: Sales CRM Platform',
    description:
      'Delivered a highly-customizable CRM and order management platform for industrial service teams. The project features multi-tenant account handling, centralized project and deliverable tracking, bulk order spreadsheets, and rich pipeline analytics—all wrapped in a user-friendly interface to support comprehensive sales and service workflows.',
    role: 'Full Stack Developer',
    company: 'Kalsoft Solutions Pvt Ltd',
    impact:
      'Improved deal closure speed, increased sales visibility, and empowered teams with unified data views.',
    technologies: [
      'JavaScript',
      'Vue.js',
      'Vuex',
      'Quasar',
      'Node.js',
      'NestJS',
      'Apollo GraphQL',
      'PostgreSQL',
      'E-charts',
      'Plotly.js',
      'Jspreadsheet',
      'Sheetjs',
      'Git',
      'Bitbucket'
    ],
    featured: false,
    image: '/project-images/sales-crm-kalsoft.png',
    type: 'professional'
  },
  {
    order: 7,
    id: 'dtv-market-analysis-tool',
    title: 'Digital DTV: Real-Time Market & Value Analysis',
    description:
      'Developed a digital workshop and product analysis application enabling expert advisors and business teams to compare products, track idea development, and generate real-time reports. Advanced visualization, multi-language support, and dynamic input modules drive better decision-making and collaborative analysis.',
    role: 'Frontend Developer',
    company: 'Kalsoft Solutions Pvt Ltd',
    impact:
      'Boosted workshop efficiency, powered data-driven decisions, and expanded product analysis capabilities for clients in multiple markets.',
    technologies: [
      'JavaScript',
      'Vue.js',
      'Vuex',
      'Quasar',
      'Node.js',
      'Feathers',
      'MongoDB',
      'E-charts',
      'Plotly.js',
      'Jspreadsheet',
      'Excel.js',
      'pptgen.js',
      'Git',
      'Bitbucket'
    ],
    featured: false,
    image: '/project-images/dtv-market-analysis-tool.png',
    type: 'professional'
  }
];


export const personalProjects: Project[] = [
	{
		id: 'celestial-ui',
		title: 'CelestialUI Component Library',
		description:
			'Modern, accessible component library built with Vue 3, React, and Svelte. Features 50+ components with TypeScript support.',
		technologies: ['Vue.js', 'React', 'Svelte', 'TypeScript', 'Tailwind CSS', 'Storybook'],
		githubUrl: 'https://github.com/dev-1603/CelestialUI',
		liveUrl: '',
		underDevelopment: true,
		image: '',
		npmPackages: [
			{
				name: '@celestial-ui/vue',
				url: 'https://www.npmjs.com/package/@celestial-ui/vue',
				description: 'Vue 3 Component Library'
			},
			{
				name: '@celestial-ui/react',
				url: 'https://www.npmjs.com/package/@celestial-ui/react',
				description: 'React Component Library'
			},
			{
				name: '@celestial-ui/svelte',
				url: 'https://www.npmjs.com/package/@celestial-ui/svelte',
				description: 'Svelte Component Library'
			}
		],
		featured: true,
		type: 'personal',
		stars: 150,
		forks: 25,
		lastUpdated: '2024-12-01',
		isPublished: true
	},
	{
		id: 'healthcare-ai',
		title: 'Care Caddy',
		description:
			'AI-powered healthcare application providing personalized health recommendations and symptom analysis using machine learning.',
		technologies: ['Python', 'FastAPI', 'React', 'TensorFlow', 'PostgreSQL', 'Docker'],
		githubUrl: 'https://github.com/dev-1603/healthcare-ai',
		liveUrl: '',
		underDevelopment: true,
		image: '',
		featured: true,
		type: 'personal',
		stars: 89,
		forks: 12,
		lastUpdated: '2024-11-15'
	},
	{
		id: 'nexus-commerce',
		title: 'Nexus Commerce Platform',
		description:
			'Full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
		technologies: ['Node.js', 'React', 'PostgreSQL', 'Stripe', 'Redis', 'AWS'],
		githubUrl: 'https://github.com/dev-1603/nexus-commerce',
		liveUrl: '',
		underDevelopment: true,
		image: '',
		featured: true,
		type: 'personal',
		stars: 67,
		forks: 8,
		lastUpdated: '2024-10-20'
	}
];
