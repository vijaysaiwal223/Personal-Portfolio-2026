import DocDock from "../DocDock";
import { DesignSnapshot, PageShell, ProjectsSection } from "../PortfolioShared";

export const metadata = {
  title: "Projects",
  description: "Selected product design projects by Vijay Saiwal.",
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <DocDock active="projects" />
      <div className="flex w-[min(800px,100%)] flex-col gap-3" id="top">
        <h1 className="m-0 font-[Youth,sans-serif] text-2xl leading-8 font-bold tracking-[-0.16px] text-black">Projects</h1>
        <p className="m-0 max-w-[560px] font-[var(--font-circular)] tracking-[-0.32px]">
          A rotating stack of recent product design explorations, SaaS concepts, and visual systems.
        </p>
      </div>
      <ProjectsSection />
      <DesignSnapshot />
    </PageShell>
  );
}
