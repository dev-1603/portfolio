import { defineConfig } from 'drizzle-kit';

// Only require DATABASE_URL if not in build environment
const isBuildTime = 
  process.env.VERCEL === '1' || 
  process.env.GITHUB_PAGES === 'true' || 
  process.env.CI === 'true';

if (!process.env.DATABASE_URL && !isBuildTime) {
  throw new Error('DATABASE_URL is not set');
}

export default defineConfig({
	schema: './src/lib/server/db/schema.ts',
	dialect: 'sqlite',
	dbCredentials: { url: process.env.DATABASE_URL || ':memory:' },
	verbose: true,
	strict: true
});
