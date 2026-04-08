import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { fetchGitHubRepos } from './github';

describe('fetchGitHubRepos', () => {
  let originalFetch: typeof fetch;

  beforeEach(() => {
    originalFetch = globalThis.fetch;
  });

  afterEach(() => {
    vi.restoreAllMocks();
    globalThis.fetch = originalFetch;
  });

  it('requests repository search and maps response items', async () => {
    const fakeItems = [
      {
        id: 1,
        name: 'repo1',
        description: 'd',
        html_url: 'https://github.com/alice/repo1',
        homepage: null,
        language: null,
        stargazers_count: 0,
        forks_count: 0,
        updated_at: '',
        topics: []
      }
    ];

    globalThis.fetch = vi.fn(async (input: RequestInfo | URL) => {
      const url = input.toString();
      expect(url.startsWith('https://api.github.com/search/repositories')).toBe(true);
      expect(url.includes('user%3Aalice')).toBe(true);
      expect(url.includes('topic%3Adebjyoti-portfolio')).toBe(true);
      expect(url.includes('per_page=10')).toBe(true);
      return {
        ok: true,
        json: async () => ({ items: fakeItems })
      } as any;
    }) as typeof fetch;

    const res = await fetchGitHubRepos('alice', 10, 'token123');
    expect(res).toHaveLength(1);
    expect(res[0].name).toBe('repo1');
    expect(res[0].topics).toEqual([]);
  });
});

