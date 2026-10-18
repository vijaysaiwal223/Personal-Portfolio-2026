import Image from "next/image";
import type { Project } from "@/lib/projects";

const previewImages: Partial<Record<Project["slug"], { src: string; alt: string; background: string }>> = {
  trellis: {
    src: "/assets/portfolio/trellis-dashboard.png",
    alt: "Trellis renewal decision interface",
    background: "#071b4b",
  },
  "matchscope-pro": {
    src: "/assets/portfolio/matchscope-dashboard.png",
    alt: "Matchscope resume analysis interface",
    background: "#eee8f6",
  },
};

export default function ProjectPreview({ project }: { project: Project }) {
  const image = previewImages[project.slug];

  return (
    <article className="mx-auto flex w-full max-w-[748px] flex-col gap-10 px-6 pt-[145px] pb-24 max-[748px]:pt-28">
      <div className="flex flex-col gap-2">
        <p className="m-0 text-sm text-[#85858a]">{project.category}</p>
        <h1 className="m-0 text-[32px] leading-10 font-semibold tracking-[-0.5px] text-white">{project.title}</h1>
        <p className="m-0 text-[16px] leading-7 text-[#85858a]">{project.summary}</p>
      </div>

      {image && (
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl" style={{ backgroundColor: image.background }}>
          <Image src={image.src} alt={image.alt} fill sizes="(max-width: 748px) calc(100vw - 48px), 700px" className="object-contain" />
        </div>
      )}
      <p className="m-0 border-t border-white/10 pt-6 text-sm leading-6 text-[#85858a]">Full case study coming soon.</p>
    </article>
  );
}
