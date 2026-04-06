import type { PersonalInfo, ContactInfo } from '$lib/types/portfolio';

/** Shown in hero badge (static copy aligned to ~6.5y narrative). */
export const heroExperienceLabel = '6.5+ Years';

export const siteMeta = {
	siteUrl: 'https://debjyoti.in',
	/** Use absolute URL for OG/Twitter when prerendering */
	ogImagePath: '/resumes/myAvatar.png',
	get ogImageUrl() {
		return `${this.siteUrl}${this.ogImagePath}`;
	}
};

export const personalInfo: PersonalInfo = {
	name: 'Debjyoti Mohapatra',
	title: 'Full Stack Engineer',
	yearsOfExperience: 6,
	domains: ['GenAI / AI', 'Fintech', 'Telecom (MVNO)', 'SaaS / Low-code'],
	summary:
		'9 applications built from scratch and shipped to production. Fintech, GenAI, telecom, SaaS — every time starting from an empty repo.',
	aboutIntro:
		'Nine production apps across five product ecosystems. I start from blank repos and own the stack through to stable releases.',
	about: `I've spent 6.5 years building products from zero. Not adding features to someone else's codebase — starting from blank repos and owning everything through to production.

Across my last five roles I've shipped 9 applications as part of 5 product ecosystems. At a GenAI startup I built three from scratch: a customer-facing AI chat app, a centralized auth portal, and a super admin console for tenant management and MIS — all sharing Node.js backends with PostgreSQL and multi-tenant data isolation. At a fintech company, another three: an investor-facing portfolio app, a CMS with a two-step approval workflow, and a three-tier advisory console with RBAC and feature flags. Before that, a no-code platform engine, and a Sales CRM with a GraphQL API syncing industrial data across global clients. Right now I own a multi-tenant MVNO/MSP platform serving 5 US telecom brands on AWS.

The pattern is the same every time: walk into ambiguity, figure out the architecture, ship it, keep it stable. Vue.js, TypeScript, Node.js, and PostgreSQL are my daily tools. I've led three Vue 2 to Vue 3 migrations at three different companies and set up testing pipelines at each one.

I'm available for permanent roles, freelance projects, and consulting. If you need someone who can own a product end-to-end — architecture through production — let's talk.`,
	location: 'Bhubaneswar, Odisha, India',
	availableForWork: true
};

export const contactInfo: ContactInfo = {
	email: 'mohapatra.dev02@gmail.com',
	phone: '+91-7568802836',
	location: 'Bhubaneswar, Odisha, India',
	linkedin: 'https://linkedin.com/in/debjyoti-mohapatra',
	github: 'https://github.com/dev-1603',
	resume: '/resumes/Debjyoti Mohapatra-Resume.pdf',
	resume2024: '/resumes/Debjyoti_Mohapatra-SeniorSoftwareDeveloper.pdf'
};

/** Hero stat grid: value + short label under each cell */
export const heroStats = [
	{ value: '9', label: 'Production Apps' },
	{ value: '5', label: 'Product Ecosystems' },
	{ value: '4', label: 'Domains' },
	{ value: 'All', label: 'Built from scratch' }
] as const;
