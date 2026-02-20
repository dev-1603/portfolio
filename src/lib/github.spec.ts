import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { fetchGitHubRepos } from './github';

describe('fetchGitHubRepos', () => {
  let originalFetch: any;

  beforeEach(() => {
    originalFetch = globalThis.fetch;
  });

  afterEach(() => {
    vi.restoreAllMocks();
    globalThis.fetch = originalFetch;
  });

  it('uses code search when searchQuery is has:portfolio.json and returns repositories', async () => {
    const fakeItems = [
      { repository: { id: 1, name: 'repo1', full_name: 'alice/repo1', description: 'd', html_url: 'https://github.com/alice/repo1', homepage: null, language: null, stargazers_count: 0, forks_count: 0, updated_at: '', topics: [] } }
    ];

    globalThis.fetch = vi.fn(async (url: string) => {
      expect(url.startsWith('https://api.github.com/search/code')).toBe(true);
      return {
        ok: true,
        json: async () => ({ items: fakeItems })
      } as any;
    });

    const res = await fetchGitHubRepos('alice', { per_page: 10, searchQuery: 'has:portfolio.json', token: 'token123' });
    expect(res).toHaveLength(1);
    expect(res[0].name).toBe('repo1');
  });

  it('uses repository search when searchQuery is a repo query fragment', async () => {
    const fakeItems = [
      { id: 2, name: 'repo2', description: 'd2', html_url: 'https://github.com/alice/repo2', homepage: null, language: null, stargazers_count: 1, forks_count: 0, updated_at: '', topics: [] }
    ];

    globalThis.fetch = vi.fn(async (url: string) => {
      expect(url.startsWith('https://api.github.com/search/repositories')).toBe(true);
      return {
        ok: true,
        json: async () => ({ items: fakeItems })
      } as any;
    });

    const res = await fetchGitHubRepos('alice', { per_page: 10, searchQuery: 'topic:portfolio', token: 'token123' });
    expect(res).toHaveLength(1);
    expect(res[0].name).toBe('repo2');
  });

  it('falls back to user repos when searchQuery is empty', async () => {
    const fakeRepos = [
      { id: 3, name: 'repo3', description: 'd3', html_url: 'https://github.com/alice/repo3', homepage: null, language: null, stargazers_count: 2, forks_count: 1, updated_at: '', topics: [] }
    ];

    globalThis.fetch = vi.fn(async (url: string) => {
      expect(url.startsWith('https://api.github.com/users/alice/repos')).toBe(true);
      return {
        ok: true,
        json: async () => fakeRepos
      } as any;
    });

    const res = await fetchGitHubRepos('alice', { per_page: 10, searchQuery: '', token: undefined });
    expect(res).toHaveLength(1);
    expect(res[0].name).toBe('repo3');
  });
});

