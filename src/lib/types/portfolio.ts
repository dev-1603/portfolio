export interface WorkExperience {
	id: string;
	title: string;
	company: string;
	location: string;
	duration: string;
	startDate: string;
	endDate?: string;
	current: boolean;
	logo?: string;
	roles: string[];
	achievements: string[];
	technologies: string[];
	description: string;
	highlights: string[];
	majorProjects?: {
		name: string;
		description: string;
	}[];
}

export interface NpmPackage {
	name: string;
	url: string;
	description: string;
}

export interface Project {
	id: string;
	title: string;
	description: string;
	role?: string;
	company?: string;
	impact?: string;
	image?: string;
	technologies: string[];
	githubUrl?: string;
	liveUrl?: string;
	npmUrl?: string;
	npmPackages?: NpmPackage[];
	featured: boolean;
	type: 'professional' | 'personal';
	stars?: number;
	forks?: number;
	lastUpdated?: string;
	isPublished?: boolean;
	underDevelopment?: boolean;
	/** Shown on "in progress" CTA, e.g. "Storybook and npm packages live" */
	developmentStatus?: string;
	order: number;
}

/** Grouped skill lists (no percentages) */
export interface SkillGroup {
	label: string;
	items: string[];
}

export interface ContactInfo {
	email: string;
	phone: string;
	location: string;
	linkedin: string;
	github: string;
	resume: string;
	resume2024: string;
}

export interface PersonalInfo {
	name: string;
	title: string;
	yearsOfExperience: number;
	domains: string[];
	summary: string;
	/** One line under "About Me" heading */
	aboutIntro: string;
	about: string;
	location: string;
	availableForWork: boolean;
}
