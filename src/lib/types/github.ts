export interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}
