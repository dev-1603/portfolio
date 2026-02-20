import type { Repository } from '$lib/types/github';

export async function fetchGitHubRepos(
  username: string,
  per_page = 12,
  token?: string
): Promise<Repository[]> {
  const headers: Record<string, string> = { Accept: 'application/vnd.github.v3+json' };
  if (token) headers.Authorization = `Bearer ${token}`;

  const q = encodeURIComponent(`user:${username} topic:debjyoti-portfolio archived:false`);
  const url = `https://api.github.com/search/repositories?q=${q}&sort=updated&per_page=${per_page}`;

  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error(`Failed to search repositories: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  const items = data.items || [];
  return items.map((repo: any) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    html_url: repo.html_url,
    homepage: repo.homepage ?? null,
    language: repo.language ?? null,
    stargazers_count: repo.stargazers_count ?? 0,
    forks_count: repo.forks_count ?? 0,
    updated_at: repo.updated_at ?? repo.pushed_at ?? '',
    topics: repo.topics || []
  }));
}

export async function fetchRepoMeta(owner: string, repo: string, token?: string): Promise<any | null> {
  const url = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/contents/portfolio.json`;
  const headers: Record<string, string> = { Accept: 'application/vnd.github.v3+json' };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(url, { headers });
  if (res.status === 404) return null;
  if (!res.ok) {
    // don't throw on metadata fetch failure - return null so caller can continue
    return null;
  }

  const data = await res.json();
  try {
    return JSON.parse(Buffer.from(data.content, 'base64').toString('utf-8'));
  } catch (e) {
    return null;
  }
}

export async function enrichRepos(repos: Repository[], owner: string, token?: string): Promise<Array<Repository & { portfolioMeta?: any; featured?: boolean }>> {
  const results: Array<Repository & { portfolioMeta?: any; featured?: boolean }> = [];
  for (const repo of repos) {
    try {
      const meta = await fetchRepoMeta(owner, repo.name, token);
      results.push({
        ...repo,
        portfolioMeta: meta ?? undefined,
        featured: (meta && meta.featured) ? true : false
      });
    } catch (e) {
      results.push({ ...repo, portfolioMeta: undefined, featured: false });
    }
  }
  return results;
}

export async function fetchReposWithMeta(username: string, per_page = 12, token?: string) {
  const headers: Record<string, string> = { Accept: 'application/vnd.github.v3+json' };
  const q = encodeURIComponent(`user:${username} topic:portfolio archived:false`);
  const searchUrl = `https://api.github.com/search/repositories?q=${q}&sort=updated&per_page=${per_page}`;
  if (token) headers.Authorization = `Bearer ${token}`;
  const res = await fetch(searchUrl, { headers });
  if (!res.ok) {
    throw new Error(`Failed to search repositories: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  const items = data.items || [];

  // Normalize items into Repository shape (partial)
  const repos: Repository[] = items.map((repo: any) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    html_url: repo.html_url,
    homepage: repo.homepage ?? null,
    language: repo.language ?? null,
    stargazers_count: repo.stargazers_count ?? 0,
    forks_count: repo.forks_count ?? 0,
    updated_at: repo.updated_at ?? repo.pushed_at ?? '',
    topics: repo.topics || []
  }));

  const settled = await Promise.allSettled(repos.map(r => fetchRepoMeta(username, r.name)));

  const merged = repos.map((r, i) => {
    const s = settled[i];
    const meta = s.status === 'fulfilled' ? s.value : null;
    return {
      ...r,
      portfolioMeta: meta ?? undefined,
      featured: meta?.featured ? true : false
    };
  });

  // return only repos that have portfolioMeta and are explicitly featured
  return merged.filter(r => r.portfolioMeta?.featured === true);
}

