import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema';
import { env } from '$env/dynamic/private';

let db: ReturnType<typeof drizzle>;

// Check if we're in a build environment (Vercel, GitHub Pages, or CI)
const isBuildTime = 
  process.env.VERCEL === '1' || 
  process.env.GITHUB_PAGES === 'true' || 
  process.env.CI === 'true' ||
  !env.DATABASE_URL;

try {
  // Skip database initialization during build time
  if (isBuildTime || !env.DATABASE_URL) {
    console.log('Skipping database initialization during build time');
    db = {} as any;
  } else {
    const client = new Database(env.DATABASE_URL);
    db = drizzle(client, { schema });
  }
} catch (error) {
  console.warn('Database initialization failed:', error);
  // Create a mock database for build time
  db = {} as any;
}

export { db };
