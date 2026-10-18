export const selectedProjects = [
  {
    title: "Trellis",
    slug: "trellis",
    category: "Subscription management",
    summary: "A renewal decision interface that helps teams review subscriptions and upcoming spend.",
    recent: true,
  },
  {
    title: "Matchscope.pro",
    slug: "matchscope-pro",
    category: "Resume analysis",
    summary: "A focused workspace for reviewing resumes and making sense of candidate information.",
    recent: true,
  },
  {
    title: "Social Listening",
    slug: "social-listening",
    category: "Social listening platform",
    summary: "A platform for monitoring conversations and spotting emerging brand issues.",
    recent: false,
  },
  {
    title: "Whoflex",
    slug: "whoflex",
    category: "Learning platform",
    summary: "A learning interface with lesson navigation, video content, and chapter quizzes.",
    recent: false,
  },
  {
    title: "Design System",
    slug: "design-system",
    category: "Components and visual language",
    summary: "A reusable visual foundation for consistent interfaces, components, and patterns.",
    recent: false,
  },
] as const;

export type Project = (typeof selectedProjects)[number];

export function getProject(slug: string): Project | undefined {
  return selectedProjects.find((project) => project.slug === slug);
}
