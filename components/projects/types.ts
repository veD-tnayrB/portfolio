export interface IGitHubRepositoryResponse {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string | null;
  created_at: string;
}

export interface IGitHubRepository extends IGitHubRepositoryResponse {
  languages: string[];
}
