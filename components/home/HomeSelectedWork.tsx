import Image from "next/image";
import Link from "next/link";
import { selectedProjects } from "@/lib/projects";

export default function HomeSelectedWork() {
  return (
    <section
      className="relative mx-auto w-full max-w-[1128px] py-[100px] max-[760px]:py-20"
      id="selected-work"
      aria-labelledby="selected-work-title"
    >
      <div className="absolute inset-x-0 top-10 flex h-9 items-center">
        <span className="h-px w-12 shrink-0 bg-[#272729] max-[600px]:w-6" aria-hidden="true" />
        <span className="flex h-9 shrink-0 items-center gap-2 rounded-full border border-[#272729] bg-white/5 px-[15px] text-[13px] leading-[19px] font-medium text-[#ededed]">
          <span className="flex size-5 shrink-0 items-center justify-center" aria-hidden="true">
            <Image src="/assets/figma-home/project-label.svg" alt="" width={17.9164} height={16.25} unoptimized />
          </span>
          Selected work
        </span>
        <span className="h-px flex-1 bg-[#272729]" aria-hidden="true" />
      </div>

      <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-20 max-[1048px]:px-6 max-[760px]:gap-14">
        <h2
          className="m-0 text-[32px] leading-10 font-medium tracking-[-1.3px] text-white max-[600px]:text-[28px] max-[600px]:leading-9"
          id="selected-work-title"
        >
          Selected projects, carefully crafted.
        </h2>
        <div className="flex w-full flex-wrap items-start gap-x-10 gap-y-16 overflow-visible pb-2">
          {selectedProjects.map((project) => {
            const cardClassName = "relative flex w-40 shrink-0 flex-col gap-4 border-0 bg-transparent p-0 text-left no-underline";
            const cardContent = <>
            <div className={`relative flex h-52 w-40 items-center justify-center rounded-[18px] ${project.title === "Design System" || project.title === "Whoflex" ? "shadow-[0_0_0_3px_#121213,0_0_0_6px_#2a2a2c]" : "shadow-[0_0_0_3px_#040404,0_0_0_6px_#2a2a2c]"} ${project.title === "Design System" ? "bg-white" : "bg-[#f9f9f9]"}`}>
              {project.title === "Design System" && (
                <Image
                  alt=""
                  className="block max-w-none"
                  height={73.8042}
                  src="/assets/portfolio/the-maverick-design-logo.svg"
                  unoptimized
                  width={134.424}
                />
              )}
              {project.title === "Matchscope.pro" && (
                <div className="absolute inset-0 overflow-hidden rounded-[18px]">
                  <div className="absolute -top-1 left-0 h-[216px] w-40">
                    <Image
                      className="object-fill"
                      src="/assets/portfolio/matchscope-background.jpg"
                      alt=""
                      fill
                      sizes="160px"
                    />
                  </div>
                  <Image
                    className="absolute top-4 right-4 max-w-none rounded-[6px] object-cover"
                    src="/assets/portfolio/matchscope-dashboard.png"
                    alt="Matchscope resume analysis dashboard"
                    width={304}
                    height={176}
                    sizes="304px"
                  />
                </div>
              )}
              {project.title === "Social Listening" && (
                <Image
                  className="rounded-[18px] object-cover"
                  src="/assets/portfolio/social-listening-thumbnail.png"
                  alt="Sketchnote Social Listening laptop mockup"
                  fill
                  sizes="160px"
                />
              )}
              {project.title === "Whoflex" && (
                <div className="absolute inset-0 overflow-hidden rounded-[18px]">
                  <Image
                    alt=""
                    className="object-cover"
                    fill
                    sizes="160px"
                    src="/assets/portfolio/whoflex-project-image.png"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0)_40%)]" aria-hidden="true" />
                  <Image
                    alt=""
                    className="absolute left-1/2 top-6 h-5 w-24 -translate-x-1/2 object-cover"
                    height={20}
                    sizes="96px"
                    src="/assets/portfolio/whoflex-wordmark.png"
                    width={96}
                  />
                </div>
              )}
              {project.title === "Trellis" && (
                <div className="absolute inset-0 overflow-hidden rounded-[18px]">
                  <Image
                    className="object-cover"
                    src="/assets/portfolio/trellis-landscape.jpg"
                    alt=""
                    fill
                    sizes="160px"
                  />
                  <Image
                    className="absolute top-4 left-4 max-w-none rounded-[4px] object-cover"
                    src="/assets/portfolio/trellis-dashboard.png"
                    alt="Trellis renewal decision dashboard"
                    width={387}
                    height={218}
                    sizes="387px"
                  />
                </div>
              )}
              {project.recent && <div className="absolute top-[-26px] left-1/2 flex -translate-x-1/2 items-end justify-center whitespace-nowrap" aria-label="Recent project">
                <Image
                  className="block rotate-180"
                  src="/assets/figma-home/selected-work-tab-left.svg"
                  alt=""
                  width={10}
                  height={10}
                  unoptimized
                />
                <span className="rounded-t-lg bg-[#2a2a2c] px-2 py-0.5 text-[12px] leading-4 font-normal text-[#ededed]">
                  Recent project
                </span>
                <Image
                  className="block scale-y-[-1]"
                  src="/assets/figma-home/selected-work-tab-right.svg"
                  alt=""
                  width={10}
                  height={10}
                  unoptimized
                />
              </div>}
            </div>
            <span className="flex flex-col gap-1.5">
              <span className="text-[16px] leading-[19.2px] font-medium text-white">{project.title}</span>
              <span className="text-[14px] leading-[16.8px] font-normal text-[#757575]">{project.category}</span>
            </span>
            </>;

            return project.title === "Design System" ? (
              <div className={`${cardClassName} cursor-wait`} key={project.title} title="Work in progress">
                {cardContent}
                <span className="sr-only">Work in progress</span>
              </div>
            ) : (
              <Link
                aria-label={`View ${project.title} case study`}
                className={`${cardClassName} cursor-pointer focus-visible:rounded-[18px] focus-visible:outline-2 focus-visible:outline-offset-[7px] focus-visible:outline-white`}
                href={`/projects/${project.slug}`}
                key={project.title}
              >
                {cardContent}
              </Link>
            );
          })}
        </div>
        <div className="relative flex w-full items-start" role="note">
          <span className="relative h-[30px] w-5 shrink-0 overflow-hidden" aria-hidden="true">
            <Image
              alt=""
              className="absolute left-0 top-0 h-[30px] w-[65px] max-w-none"
              height={30}
              src="/assets/figma-home/selected-work-note-icon.png"
              width={65}
            />
          </span>
          <div className="min-h-12 min-w-0 flex-1 rounded-xl border border-[#428ad5] bg-[rgba(66,138,213,0.2)] px-4 py-3 text-[14px] leading-6 text-white">
            Some projects are covered by confidentiality agreements, so I can only share selected details publicly.
          </div>
          <Image
            alt=""
            className="absolute left-5 top-0"
            height={14}
            src="/assets/figma-home/selected-work-note-pointer.svg"
            unoptimized
            width={14}
          />
        </div>
      </div>
    </section>
  );
}
