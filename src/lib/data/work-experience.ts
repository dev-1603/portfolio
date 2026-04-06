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
		description:
			'Multi-tenant MVNO/MSP telecom e-commerce for five US brands: separate storefront templates, feature sets, and UI driven by runtime feature flags so brand-level changes do not need redeploys.',
		roles: [
			'Micro-frontend setup: Vue and React modules with independent builds and deploys.',
			'Versioned REST API with tenant-scoped authorization; 15+ AWS Lambda endpoints backed by DynamoDB, CloudWatch logging, and rate limiting.',
			'Headless stack: Shopware plus Strapi so catalog and content updates roll out without frontend changes.',
			'Led Vue 2 to Vue 3 Composition API migration, Vuex to Pinia, and TypeScript strictness upgrades; noticeable render performance gain after migration.',
			'Vitest and CI/CD ownership; code reviews, mentoring, and release stability.'
		],
		achievements: [
			'Shipped and operate the multi-brand platform end to end on AWS with structured observability.',
			'Third Vue 2→3 migration I have led across companies; same patterns, less risk each time.'
		],
		technologies: [
			'Vue.js',
			'React',
			'TypeScript',
			'AWS Lambda',
			'DynamoDB',
			'Shopware',
			'Strapi',
			'Pinia',
			'Vitest'
		],
		highlights: [
			'0 → Production',
			'5 brands',
			'Multi-tenant',
			'Feature flags',
			'AWS'
		]
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
		description:
			'GenAI orchestration platform: joined at a rough MVP and shipped V1 as the primary engineer. Three production apps plus shared Node.js control plane, PostgreSQL via Sequelize, and strict tenant isolation.',
		roles: [
			'Customer AI chat: multi-tenant chats, provider-agnostic LLM gateway (Anthropic, OpenAI, Gemini) swappable at runtime without client changes; document analysis, image generation, streaming responses.',
			'Central auth portal: JWT and OAuth2, fine-grained RBAC, scoped tokens, tenant-partitioned data, audit logging.',
			'Super admin console: tenant provisioning, master data, MIS reporting, infra monitoring, support and ops tooling.',
			'Shared Express control plane: context assembly, model routing, streaming; design system and layout builder on Vue 3 with Storybook.',
			'Led Vue 2→3 migration on internal dashboards; trained the team on the platform.'
		],
		achievements: [
			'Modular layout builder and shared components removed duplicate UI work on every new screen.',
			'Enterprise tenants stayed isolated: data loss prevention and sensitive-data rules in the chat path.',
			'One API surface for dashboards and external integrations kept integration costs predictable.'
		],
		technologies: [
			'Vue 2',
			'Vue 3',
			'Nuxt 3',
			'Node.js',
			'Express',
			'PostgreSQL',
			'Sequelize',
			'Tailwind CSS',
			'Pinia',
			'LangChain'
		],
		highlights: ['0 → Production', '3 apps', 'LLM gateway', 'Multi-tenant', 'PostgreSQL']
	},
	{
		id: 'senior-swe-geekyants',
		title: 'Senior Software Engineer',
		company: 'Geekyants Private Limited (Elever)',
		location: 'Remote',
		duration: 'Sept 2021 - Nov 2023',
		startDate: '2021-09',
		endDate: '2023-11',
		current: false,
		description:
			'Fintech investment ecosystem: three customer-facing and internal apps plus Firebase-backed services. I owned pieces end to end from Nuxt SSR to Cloud Functions and GCP Pub/Sub.',
		roles: [
			'Investor web app (Nuxt 3 SSR): risk-based portfolios, deposits and withdrawals, real-time valuation, Chart.js and ECharts, Pinia.',
			'CMS: rich content types, preview, two-step approval with approver edits before publish; reused across surfaces.',
			'Advisory and admin console: advisory workflows, MIS reports, RBAC with feature flags, SSO.',
			'Backend: Firebase Cloud Functions, Pub/Sub for async work, SendGrid, PDFs, scheduled jobs; multi-tenant data models on GCP.',
			'Led Vue 2→3 migration; Vitest and Playwright in CI; mentored juniors on TypeScript and tests.'
		],
		achievements: [
			'Investors run deposits, withdrawals, and rebalancing against live portfolio state with notifications for key events.',
			'Content and advisory staff shipped work through approval flows without bypassing audit expectations.',
			'Server-rendered investor app kept first paint fast while pulling from Firebase and custom APIs.'
		],
		technologies: [
			'Vue 2',
			'Vue 3',
			'Nuxt 2',
			'Nuxt 3',
			'Quasar',
			'TypeScript',
			'Firebase',
			'GCP',
			'PostgreSQL',
			'Chart.js'
		],
		highlights: ['0 → Production', '3 apps', 'Fintech', 'Firebase', 'Nuxt 3'],
		majorProjects: [
			{
				name: 'Portfolio investment website',
				description: 'SSR Nuxt app: investments, valuation, cash flows, notifications.'
			},
			{
				name: 'CMS',
				description: 'Authoring, preview, two-step approval with role-based routing.'
			},
			{
				name: 'Advisory and admin console',
				description: 'Advisory, analytics, and admin tiers with RBAC, flags, and SSO.'
			},
			{
				name: 'Content and integration services',
				description: 'Cloud Functions, Pub/Sub, email, PDFs, and scheduled jobs.'
			}
		]
	},
	{
		id: 'frontend-dev-kisai',
		title: 'Frontend Developer',
		company: 'Ideanz IT Solutions (KISAI)',
		location: 'Remote',
		duration: 'May 2021 - Sept 2021',
		startDate: '2021-05',
		endDate: '2021-09',
		current: false,
		description:
			'No-code platform built from scratch: component library, drag-and-drop layout builder, and schema engine that turns YAML/JSON into live UI.',
		roles: [
			'Component library in Vue and Tailwind with Storybook as the single source of truth for platform UI.',
			'Layout builder: drag-and-drop pages with Tailwind; XState for complex editor state.',
			'Schema builder: Vue 3 Composition API and XState; YAML/JSON-driven components, flows, and events; flow-chart tooling for branching logic.'
		],
		achievements: [
			'Authors shipped new screens from shared components instead of one-off forks.',
			'Declarative schemas tied to layouts cut bespoke handoffs between design and runtime.'
		],
		technologies: ['JavaScript', 'Vue 2', 'Vue 3', 'Tailwind CSS', 'Storybook', 'XState', 'Git'],
		highlights: ['0 → Production', 'No-code', 'Layout builder', 'Schema engine', 'Storybook']
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
		description:
			'Industrial SaaS: SalesDesk multi-tenant CRM and Digital DTV real-time workshop tooling. GraphQL and heavy browser data on the same stack.',
		roles: [
			'SalesDesk: accounts, projects, deliverables, bulk orders via spreadsheets; schema-first Apollo GraphQL over PostgreSQL; sync across regions with different record shapes.',
			'Digital DTV: workshops, charge codes, product comparison, reporting, multi-language UI (frontend-heavy).',
			'In-browser analytics: Jspreadsheet and SheetJS for large grids; Plotly and ECharts with Redis-backed caching; automated PDF, PPT, and Excel exports.',
			'Mentored a four-person UI team on modular structure and SQL; established CI/CD on the product line.'
		],
		achievements: [
			'CRM teams moved bulk orders and reporting without leaving the browser for small edits.',
			'Workshop runs stayed consistent across languages with shared admin reporting.',
			'GraphQL layer matched evolving industrial entities without breaking legacy consumers.'
		],
		technologies: [
			'Vue.js',
			'Quasar',
			'Vuex',
			'NestJS',
			'Node.js',
			'Apollo GraphQL',
			'PostgreSQL',
			'MongoDB',
			'Redis',
			'AWS'
		],
		highlights: ['0 → Production', '2 products', 'GraphQL', 'Multi-tenant', 'PostgreSQL'],
		majorProjects: [
			{
				name: 'SalesDesk CRM',
				description: 'Multi-tenant sales and service CRM with GraphQL and spreadsheet bulk ops.'
			},
			{
				name: 'Digital DTV',
				description: 'Live workshop tooling with comparison flows and exportable reports.'
			}
		]
	}
];
