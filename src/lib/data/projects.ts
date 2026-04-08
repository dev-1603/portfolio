import type { Project } from '$lib/types/portfolio';

export const professionalProjects: Project[] = [
  {
    order: 1,
    id: 'ai-multi-tenant-chat',
    title: 'AI-Powered Multi-tenant Chat Application',
    description:
      'Built the core platform for a multi-tenant B2B GenAI SaaS from scratch. Designed the JWT authorizer middleware and RBAC layer that controls per-tenant access across all API routes. Built a dynamic component library and layout builder in Vue 3 that cut feature delivery time by 30%. Led Vue 2 to Vue 3 and Nuxt 2 to Nuxt 3 migrations across the product.',
    role: 'Senior Software Engineer',
    company: 'Gate AI Pvt Ltd',
    impact:
      'Accelerated product delivery by 30% while providing highly secure, custom AI chat environments for diverse enterprise clients.',
    technologies: [
      'Vue 2',
      'Vue 3',
      'Nuxt 2',
      'Nuxt 3',
      'Node.js',
      'TypeScript',
      'JWT',
      'RBAC',
      'Multi-tenant Architecture',
      'Event-driven',
      'Feature Flags',
      'LLM APIs'
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
      'Built a no-code platform letting business users design and launch web and mobile apps with drag-and-drop. Includes a schema builder, layout builder, and component library - cutting go-to-market time and reducing dependency on dev teams.',
    role: 'Frontend Developer',
    company: 'KISAI (Ideanz IT Solutions)',
    impact:
      'Reduced app delivery time by 50% - non-technical teams could launch complex apps without writing code.',
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
      'Built an investment tracking platform with real-time portfolio valuation, analytics dashboards, and notifications for upcoming payments and portfolio rebalancing. SSR for performance, role-based workflows, and direct finance API integration.',
    role: 'Senior Software Engineer',
    company: 'Geekyants',
    impact:
      'Owned the web implementation end-to-end - SSR Nuxt frontend, GCP Pub/Sub integration for real-time portfolio valuations, and RBAC-based advisory console for 10,000+ investors. Recognised by Ametra\'s Co-Founder/CTO for commitment to shipping.',
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
      'Built a Vue/React e-commerce platform for a major US telecom operator with Contentful and Strapi for content management. Supports high transaction volumes, real-time product updates, and rapid content deployment across devices.',
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
		id: 'celestial-auth',
		title: 'Celestial Auth',
		description:
			'Authentication-as-a-Service gateway built with Node.js and TypeScript. Supports multiple identity providers, SSO, JWT issuance, and role-based access control. Frontends in both React and Vue talk to the same auth layer. Designed to be dropped into any multi-tenant SaaS without rewriting auth from scratch.',
		technologies: ['Nuxt 3', 'Node.js', 'Supabase ', 'Express', 'TypeScript', 'Prisma',   'Tailwind CSS', 'shadcn-vue', 'JWT', 'OAuth2', 'SSO', 'RBAC'],
		githubUrl: 'https://github.com/dev-1603/celestial-auth-portal',
		liveUrl: '',
		underDevelopment: false,
		image: '/project-images/celestial-auth.png',
		featured: true,
		type: 'personal',
		stars: 0,
		forks: 0,
		order: 2,
		lastUpdated: Date.now().toString()
	},
	{
		id: 'celestial-ui',
		title: 'CelestialUI Component Library',
		description:
			'Accessible component library with packages for Vue 3, React, and Svelte - all published on npm. Built incrementally with TypeScript support and a shared design system across frameworks. Active development with continuous feature additions.',
		technologies: ['Vue.js', 'React', 'Svelte', 'TypeScript', 'Tailwind CSS', 'Storybook'],
		githubUrl: '',
		liveUrl: '',
		underDevelopment: false,
		image: '/project-images/celestial-ui.png',
    order: 1,
		npmPackages: [
			{
				name: '@celestial-ui/vue',
				url: 'https://www.npmjs.com/package/@celestial-ui/vue',
				description: 'Vue 3 Component Library',
				githubUrl: 'https://github.com/dev-1603/CelestialUI-Vue'
			},
			{
				name: '@celestial-ui/react',
				url: 'https://www.npmjs.com/package/@celestial-ui/react',
				description: 'React Component Library',
				githubUrl: 'https://github.com/dev-1603/celestialui-react'
			},
			{
				name: '@celestial-ui/svelte',
				url: 'https://www.npmjs.com/package/@celestial-ui/svelte',
				description: 'Svelte Component Library'
			}
		],
		featured: true,
		type: 'personal',
    stars: 0,
    forks: 0,
    lastUpdated: Date.now().toString(),
		isPublished: true
	},
	{
		id: 'healthcare-ai',
		title: 'Care Caddy',
		description:
			'An AI-powered healthcare companion that helps users take control of their medical life. Upload a prescription and it reads it — extracting every medication, dosage, and instruction using OCR and LLM processing. Log symptoms and get an AI risk assessment. Track medications, set reminders, and monitor vitals over time. Find doctors by specialty and availability and book appointments directly.Built as a full-stack product with a NestJS microservice handling all AI processing separately from the main API, keeping response times fast and the architecture clean.',
		technologies: ['Next.js', 'Nuxt 4', 'NestJS', 'TypeScript', 'PostgreSQL', 'Supabase', 'Prisma', 'OpenAI GPT-4o', 'AWS Textract', 'Tailwind CSS', 'shadcn/ui', 'Docker', 'HIPAA-aware', 'RBAC'],
    // githubUrl: 'https://github.com/dev-1603/healthcare-ai',
		liveUrl: '',
		underDevelopment: true,
		image: '/project-images/care-caddy.png',
		featured: true,
		type: 'personal',
    stars: 0,
    forks: 0,
		order: 2,
    lastUpdated: Date.now().toString()
	},
];
