import type { SkillGroup } from '$lib/types/portfolio';

export const skillGroups: SkillGroup[] = [
	{
		label: 'Daily tools',
		items: [
			'Vue.js',
			'Nuxt',
			'TypeScript',
			'Node.js',
			'PostgreSQL',
			'Tailwind CSS',
			'Vitest',
			'Git'
		]
	},
	{
		label: 'Strong',
		items: [
			'React.js',
			'Next.js',
			'GraphQL (Apollo)',
			'NestJS',
			'Express.js',
			'Firebase',
			'AWS Lambda',
			'DynamoDB',
			'GCP Pub/Sub',
			'Cloud Functions',
			'Redis',
			'Docker',
			'Storybook',
			'Playwright',
			'Jest',
			'Pinia',
			'Vuex',
			'Quasar'
		]
	},
	{
		label: 'Working knowledge',
		items: ['Python', 'MySQL', 'MongoDB', 'Supabase', 'Kubernetes']
	},
	{
		label: 'AI / LLM',
		items: [
			'LLM API integration (Anthropic/Claude, OpenAI, Google Gemini, Ollama, Meta LLaMA)',
			'Claude Code',
			'Cursor',
			'GitHub Copilot',
			'Prompt engineering',
			'LLM gateway architecture'
		]
	}
];
