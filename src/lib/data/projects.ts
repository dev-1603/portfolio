import type { Project } from '$lib/types/portfolio';

export const professionalProjects: Project[] = [
	{
		order: 1,
		id: 'ai-multi-tenant-chat',
		title: 'AI multi-tenant chat platform',
		description:
			'Enterprise chat across tenants with a runtime-swappable LLM gateway (Anthropic, OpenAI, Gemini), streaming responses, document and image flows, and sensitive-data handling so client context does not leak.',
		role: 'Senior Software Engineer',
		company: 'Gate AI Pvt Ltd',
		impact:
			'Shipped as part of a three-app V1: modular UI and layout builder sped up new screens without duplicating stacks.',
		technologies: ['Vue.js', 'Nuxt 3', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'OAuth', 'LLM APIs'],
		featured: true,
		image: '/project-images/ai-multi-tenant-chat.png',
		type: 'professional'
	},
	{
		order: 3,
		id: 'no-code-platform',
		title: 'KISAI no-code platform',
		description:
			'Component library, visual layout builder, and YAML/JSON schema engine that renders real UI and flows—authors ship pages and apps without writing app code.',
		role: 'Frontend Developer',
		company: 'KISAI (Ideanz IT Solutions)',
		impact:
			'Reusable components and builders replaced one-off screens; authors iterated in Storybook-backed patterns.',
		technologies: ['Vue.js', 'Tailwind CSS', 'Storybook', 'XState'],
		featured: true,
		image: '/project-images/no-code-platform.png',
		type: 'professional'
	},
	{
		order: 2,
		id: 'portfolio-investment-platform',
		title: 'Portfolio-centric investment platform',
		description:
			'Nuxt 3 SSR investor experience: risk-scored portfolios, live valuation, deposits and withdrawals, and notifications for payments and rebalancing.',
		role: 'Senior Software Engineer',
		company: 'Geekyants (Elever)',
		impact:
			'Investors and advisors work through the same ecosystem: real-time money movement plus CMS and console tooling behind RBAC.',
		technologies: ['Nuxt 3', 'Vue.js', 'Firebase', 'TypeScript', 'Pinia', 'Chart.js'],
		featured: true,
		image: '/project-images/investment-app.png',
		type: 'professional'
	},
	{
		order: 4,
		id: 'reach-mobile-ecommerce',
		title: 'MVNO/MSP e-commerce platform',
		description:
			'Multi-brand telecom commerce: micro-frontends in Vue and React, tenant-scoped APIs, Shopware and Strapi for catalog and content, Lambda services on AWS.',
		role: 'Software Development Engineer - 2',
		company: 'Applore Technologies',
		impact:
			'Brands launch and change storefront behavior via flags and headless CMS instead of redeploying the whole front end.',
		technologies: ['Vue.js', 'React', 'TypeScript', 'AWS Lambda', 'DynamoDB', 'Shopware', 'Strapi', 'Tailwind CSS'],
		featured: true,
		image: '/project-images/reach-ecommerce.png',
		type: 'professional'
	},
	{
		order: 5,
		id: 'cms-role-based-workflow',
		title: 'CMS with role-based workflows',
		description:
			'Content pipelines with preview, two-step approval, and granular roles so marketing and compliance could review before anything went live.',
		role: 'Senior Software Engineer',
		company: 'Geekyants',
		impact:
			'Publishing stayed traceable: approvers could edit or send back drafts without bypassing the workflow.',
		technologies: ['Vue.js', 'Quasar', 'Node.js', 'Firebase'],
		featured: false,
		image: '/project-images/cms-workflow.webp',
		type: 'professional'
	},
	{
		order: 6,
		id: 'sales-crm-kalsoft',
		title: 'SalesDesk CRM',
		description:
			'Multi-tenant CRM for industrial sales: accounts, projects, deliverables, bulk orders through spreadsheets, and Apollo GraphQL over PostgreSQL.',
		role: 'Software Engineer',
		company: 'Kalsoft Solutions Pvt Ltd',
		impact:
			'Teams in different regions could sync irregular record shapes through one GraphQL contract and shared reporting.',
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
			'Sheetjs'
		],
		featured: false,
		image: '/project-images/sales-crm-kalsoft.png',
		type: 'professional'
	},
	{
		order: 7,
		id: 'dtv-market-analysis-tool',
		title: 'Digital DTV market analysis',
		description:
			'Real-time workshop tooling: charge codes, product comparison, ranked ideas, and exportable admin reports with multi-language UI.',
		role: 'Software Engineer',
		company: 'Kalsoft Solutions Pvt Ltd',
		impact:
			'Facilitators and analysts shared one workspace for live sessions instead of static slide decks only.',
		technologies: [
			'JavaScript',
			'Vue.js',
			'Quasar',
			'Node.js',
			'MongoDB',
			'E-charts',
			'Plotly.js',
			'Jspreadsheet',
			'Excel.js',
			'pptgen.js'
		],
		featured: false,
		image: '/project-images/dtv-market-analysis-tool.png',
		type: 'professional'
	}
];

export const personalProjects: Project[] = [
	{
		id: 'celestial-ui',
		title: 'CelestialUI component library',
		description:
			'Cross-framework UI kit: Vue 3, React, and Svelte packages with TypeScript and Storybook. Published on npm.',
		technologies: ['Vue.js', 'React', 'Svelte', 'TypeScript', 'Tailwind CSS', 'Storybook'],
		githubUrl: 'https://github.com/dev-1603/CelestialUI',
		liveUrl: '',
		underDevelopment: true,
		developmentStatus: 'npm packages live; expanding docs and coverage',
		image: '',
		order: 1,
		npmPackages: [
			{
				name: '@celestial-ui/vue',
				url: 'https://www.npmjs.com/package/@celestial-ui/vue',
				description: 'Vue 3 component library'
			},
			{
				name: '@celestial-ui/react',
				url: 'https://www.npmjs.com/package/@celestial-ui/react',
				description: 'React component library'
			},
			{
				name: '@celestial-ui/svelte',
				url: 'https://www.npmjs.com/package/@celestial-ui/svelte',
				description: 'Svelte component library'
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
			'Healthcare assistant concept: structured intake and guidance layers on top of model-backed analysis (stack in flux).',
		technologies: ['Python', 'FastAPI', 'React', 'PostgreSQL'],
		liveUrl: '',
		underDevelopment: true,
		developmentStatus: 'prototype; no public demo yet',
		image: '',
		featured: true,
		type: 'personal',
		stars: 0,
		forks: 0,
		order: 2,
		lastUpdated: Date.now().toString()
	},
	{
		id: 'nexus-commerce',
		title: 'Nexus Commerce Platform',
		description:
			'Full-stack commerce experiment: catalog, checkout, and admin flows with Stripe and Redis (early repo).',
		technologies: ['Node.js', 'React', 'PostgreSQL', 'Stripe', 'Redis', 'AWS'],
		githubUrl: 'https://github.com/dev-1603/nexus-commerce',
		liveUrl: '',
		underDevelopment: true,
		developmentStatus: 'repository active; demo not wired',
		image: '',
		featured: true,
		type: 'personal',
		stars: 0,
		forks: 0,
		order: 3,
		lastUpdated: Date.now().toString()
	}
];
