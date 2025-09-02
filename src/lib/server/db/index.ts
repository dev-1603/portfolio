import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema';
import { env } from '$env/dynamic/private';

let db: ReturnType<typeof drizzle>;

// Check if we're in a build environment
const isBuildTime = process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES === 'true';

try {
  if (!env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set');
  }
  
  // Skip database initialization during build time
  if (isBuildTime) {
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
