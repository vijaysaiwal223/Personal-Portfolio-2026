import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectPreview from "@/components/projects/ProjectPreview";
import SocialListeningCaseStudy from "@/components/projects/SocialListeningCaseStudy";
import TrellisCaseStudy from "@/components/projects/TrellisCaseStudy";
import WhoflexCaseStudy from "@/components/projects/WhoflexCaseStudy";
import { getProject, selectedProjects } from "@/lib/projects";
import SiteFooter from "@/components/SiteFooter";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return selectedProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const isSocialListening = slug === "social-listening";
  const isWhoflex = slug === "whoflex";
  const isMatchscope = slug === "matchscope-pro";
  const isTrellis = slug === "trellis";

  return (
    <main className="h-dvh bg-[#f1f1f1] p-1">
      <div className="relative h-full overflow-hidden rounded-2xl bg-[#f1f1f1]">
        <div className="case-page-island absolute top-0 left-1/2 z-20 flex max-w-[calc(100%-24px)] -translate-x-1/2 items-center gap-6 rounded-b-[20px] bg-[#f1f1f1] p-2 max-[560px]:gap-3">
          <div className="flex min-w-0 items-center gap-3">
            {isSocialListening && (
              <Image src="/assets/figma-home/social-listening/profile.png" alt="Sketchnote logo" width={40} height={40} className="size-10 shrink-0 rounded-[10px] border border-black/10 object-cover" />
            )}
            {isWhoflex && (
              <span className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-[9.333px] border-[0.5px] border-black/10 bg-black">
                <Image src="/assets/portfolio/whoflex-logo-mark.png" alt="" width={32} height={32} className="size-8 object-cover" />
              </span>
            )}
            {isMatchscope && (
              <Image src="/assets/portfolio/matchscope-logo-mark.png" alt="" width={40} height={40} className="size-10 shrink-0 rounded-[9.333px] object-cover" />
            )}
            {isTrellis && (
              <span className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-[9.333px] border-[0.5px] border-black/10 bg-white">
                <Image src="/assets/portfolio/trellis-logo.svg" alt="" width={32} height={18} unoptimized />
              </span>
            )}
            <div className="flex min-w-0 flex-col whitespace-nowrap">
              <span className="truncate text-[16px] leading-5 font-medium tracking-[-0.16px] text-black max-[560px]:max-w-[140px]">{isSocialListening ? "Sketchnote Social Listening" : project.title}</span>
              <span className="truncate text-[14px] leading-5 tracking-[-0.28px] text-[#737373]">{isSocialListening ? "Product Designer" : project.category}</span>
            </div>
          </div>
          <Link className="case-page-back inline-flex h-7 shrink-0 items-center gap-1.5 rounded-lg bg-[#2e2e2e] px-2 text-[14px] leading-5 tracking-[-0.28px] no-underline shadow-[0_1.5px_3px_rgba(31,31,31,.08),0_0_0_1px_#0f0f0f,inset_0_1px_2px_rgba(255,255,255,.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6820ae]" href="/#selected-work" aria-label="Back to selected work">
            <Image src="/assets/figma-home/social-listening-case/back.svg" alt="" width={16} height={16} />
            Back
          </Link>
        </div>
        <div className="h-full overflow-y-auto overscroll-contain">
          <div className="min-h-full overflow-hidden rounded-b-2xl bg-[#121213]">
            {isSocialListening ? <SocialListeningCaseStudy /> : isWhoflex ? <WhoflexCaseStudy /> : isTrellis ? <TrellisCaseStudy /> : <ProjectPreview project={project} />}
          </div>
          <SiteFooter />
        </div>
      </div>
    </main>
  );
}
