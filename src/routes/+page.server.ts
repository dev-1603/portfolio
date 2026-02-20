import type { PageServerLoad } from './$types';
import { fetchReposWithMeta } from '$lib/github';
import { env } from '$env/dynamic/private';

// Simple in-memory cache to reduce GitHub API requests during runtime.
// Note: serverless platforms may not preserve this between invocations.
const _cache: { ts: number; value: any } | null = null;
let cache: { ts: number; value: any } | null = _cache;
const CACHE_TTL = 1000 * 60 * 10; // 10 minutes

export const load: PageServerLoad = async () => {
  try {
    const now = Date.now();
    if (cache && now - cache.ts < CACHE_TTL) {
      return cache.value;
    }

    const token = env.GITHUB_TOKEN;
    const enriched = await fetchReposWithMeta('dev-1603', 6, token);
    const payload = { githubRepos: enriched };
    cache = { ts: now, value: payload };
    return payload;
  } catch (err) {
    console.error('Failed to load GitHub repos:', err);
    return { githubRepos: [] };
  }
};

