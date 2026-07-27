import { NextResponse } from "next/server";

const USERNAME = "NakulMakol";

const fallback = {
  username: USERNAME, name: "Nakul Makol",
  bio: "AI/ML Engineer | Computer Vision | Full Stack Developer",
  followers: 0, following: 0, public_repos: 10, total_stars: 0,
  avatar_url: `https://avatars.githubusercontent.com/${USERNAME}`,
  html_url: `https://github.com/${USERNAME}`,
};

export async function GET() {
  try {
    const headers: Record<string, string> = { Accept: "application/vnd.github.v3+json" };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${USERNAME}`, { headers, next: { revalidate: 3600 } }),
      fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`, { headers, next: { revalidate: 3600 } }),
    ]);

    if (!userRes.ok) return NextResponse.json(fallback);

    const user  = await userRes.json();
    const repos = reposRes.ok ? await reposRes.json() : [];
    const total_stars = Array.isArray(repos)
      ? repos.reduce((acc: number, r: { stargazers_count?: number }) => acc + (r.stargazers_count ?? 0), 0)
      : 0;

    return NextResponse.json({
      username: user.login, name: user.name ?? USERNAME, bio: user.bio,
      followers: user.followers, following: user.following,
      public_repos: user.public_repos, total_stars,
      avatar_url: user.avatar_url, html_url: user.html_url,
    });
  } catch {
    return NextResponse.json(fallback);
  }
}
