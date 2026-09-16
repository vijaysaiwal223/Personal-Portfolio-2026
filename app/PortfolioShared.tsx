import Image from "next/image";
import localFont from "next/font/local";
import AnimatedCardStack from "../components/ui/animate-card-animation";
import BounceCards from "./BounceCards";

export const circular = localFont({
  src: [
    { path: "../public/font/CircularStd-Book.otf", weight: "400" },
    { path: "../public/font/CircularStd-Medium.otf", weight: "500" },
    { path: "../public/font/CircularStd-Bold.otf", weight: "700" },
  ],
  variable: "--font-circular",
  display: "swap",
});

export const assets = "/assets/portfolio";

const collageCards = [
  {
    src: `${assets}/collage-gym.png`,
    alt: "Vijay at the gym. Small reps, big progress.",
  },
  {
    src: `${assets}/collage-outdoors.png`,
    alt: "Vijay exploring outdoors. Living a little outside the frame.",
  },
  {
    src: `${assets}/collage-design.png`,
    alt: "Vijay at his desk. Building ideas, one screen at a time.",
  },
];

const collageTransforms = ["rotate(2deg)", "rotate(10deg)", "rotate(-6deg)"];

const experience = [
  {
    company: "Sketchnote",
    logo: "sketchnote.png",
    role: "Product Designer",
    description:
      "Designed project management, social planner, and social listening products from scratch, contributing to product strategy and user research.",
    dates: "2023 - Present",
  },
  {
    company: "Procreator",
    logo: "procreator.png",
    role: "Associate Senior Designer",
    description: "Worked on crypto apps like ZebPay and helped build and scale a design system.",
    dates: "2023",
  },
  {
    company: "Zazzy",
    logo: "zazzy.png",
    role: "UI/UX Designer",
    description: "Designed multiple SaaS products across fintech and B2C, focusing on simple and scalable user experiences.",
    dates: "2022 - 2023",
  },
];

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className={`${circular.variable} flex min-h-screen flex-col items-center gap-14 bg-white px-6 pt-20 pb-36 font-[Youth,sans-serif] text-[16px] leading-6 tracking-[-0.16px] text-[#71717a] max-[760px]:gap-12 max-[760px]:pt-12 max-[760px]:pb-32 max-[560px]:gap-10 max-[560px]:px-5 max-[560px]:pt-8 max-[560px]:pb-32`}>
      {children}
    </main>
  );
}

export function SectionHeading({ title, count, id }: { title: string; count?: string; id?: string }) {
  return (
    <div className="flex w-full items-center gap-6">
      <div className="flex shrink-0 items-center gap-2">
        <span className="flex size-6 items-center justify-center overflow-hidden rounded-[4px]" aria-hidden="true">
          <Image className="block shrink-0" src="/assets/beyond-pixels.svg" alt="" width={24} height={24} />
        </span>
        <h2 className="m-0 font-[Youth,sans-serif] text-base leading-6 font-medium tracking-[-0.32px] text-[#71717a] lowercase" id={id}>
          {title}
        </h2>
        {count ? <span className="font-[var(--font-circular)] text-base leading-6 font-normal tracking-[-0.32px] text-black">{count}</span> : null}
      </div>
      <span className="h-px flex-1 rounded-full bg-[#e4e4e7]" aria-hidden="true" />
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section className="w-screen" aria-label="Projects">
      <AnimatedCardStack />
    </section>
  );
}

export function DesignSnapshot() {
  const snapshots = [1, 2, 3, 4, 5].map((number) => ({
    src: `${assets}/design-snapshot/${number}.png`,
    alt: `Design snapshot ${number}`,
  }));

  return (
    <section className="grid w-full grid-cols-3 gap-4 px-20 max-[1100px]:grid-cols-2 max-[760px]:px-6 max-[640px]:grid-cols-1 max-[560px]:px-5" aria-label="Design snapshot">
      {snapshots.map((snapshot) => (
        <div className="relative aspect-[592/444] overflow-hidden rounded-xl border border-solid border-[#e4e4e7] bg-white" key={snapshot.src}>
          <Image className="object-cover" src={snapshot.src} alt={snapshot.alt} fill sizes="(max-width: 900px) calc(100vw - 48px), 592px" />
        </div>
      ))}
    </section>
  );
}

export function AboutSections() {
  return (
    <>
      <section className="grid w-[min(800px,100%)] grid-cols-[minmax(0,1fr)_392px] items-start gap-4 max-[760px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] max-[760px]:gap-6 max-[560px]:grid-cols-1" aria-labelledby="background-title">
        <div className="col-span-full">
          <SectionHeading title="beyond pixels" />
        </div>
        <div className="flex flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <h2 className="m-0 inline-flex items-center gap-2 rounded bg-[#dbeafe] px-1.5 py-1 font-[JetBrains_Mono,Menlo,Consolas,monospace] text-sm leading-5 font-normal tracking-[2px] text-[#1e40af] uppercase" id="background-title">
              <Image className="block shrink-0" src={`${assets}/background.svg`} alt="" width={20} height={20} />
              Background
            </h2>
            <p className="m-0 font-[var(--font-circular)] font-medium tracking-normal text-[#27272a]">“do the work and trust the process”</p>
            <p className="m-0 font-[var(--font-circular)]">Since I was a kid, I loved making stuff. I enjoyed bringing my ideas to life. I began with creating posters for university events and soon got interested in designing websites and products.</p>
            <p className="m-0 font-[var(--font-circular)]">I spent the most of my time on improving my design skills and sharing my work online. I also had the chance to take on some freelance projects from connections I made during my college days.</p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h2 className="m-0 inline-flex items-center gap-2 rounded bg-[#ede9fe] px-1.5 py-1 font-[JetBrains_Mono,Menlo,Consolas,monospace] text-sm leading-5 font-normal tracking-[2px] text-[#5b21b6] uppercase">
              <Image className="block shrink-0" src={`${assets}/principles.svg`} alt="" width={20} height={20} />
              Principles
            </h2>
            <ul className="m-0 pl-6 font-[var(--font-circular)]">
              <li>Focus on improving your technique, outcomes will follow.</li>
              <li>Just showing up every day can change your life.</li>
              <li>There is no such thing as a bad decision.</li>
              <li>There&apos;s no meaning to life. Find what gives you joy and do more of it.</li>
            </ul>
          </div>
          <div
            className="h-11 w-[94px] bg-no-repeat"
            style={{ backgroundImage: "url('/assets/portfolio/design-reference.png')", backgroundSize: "1280px 2322px", backgroundPosition: "-240px -1750px" }}
            role="img"
            aria-label="Featured on Wall of Portfolios"
          />
        </div>
        <BounceCards className="shrink-0" images={collageCards} transformStyles={collageTransforms} aria-label="A little of life inside and outside design" />
      </section>

      <section className="flex w-[min(800px,100%)] flex-col gap-8" aria-labelledby="experience-title">
        <SectionHeading id="experience-title" title="experience" />
        {experience.map((job) => (
          <article className="grid grid-cols-[200px_minmax(0,1fr)_120px] items-start gap-8 max-[760px]:grid-cols-[150px_minmax(0,1fr)_108px] max-[760px]:gap-5 max-[560px]:grid-cols-[minmax(0,1fr)_auto] max-[560px]:gap-x-4 max-[560px]:gap-y-3" key={job.company}>
            <div className="flex items-center gap-3 font-medium tracking-normal text-[#27272a]">
              <Image className="block shrink-0 rounded-sm" src={`${assets}/${job.logo}`} alt="" width={24} height={24} />
              <span>{job.company}</span>
            </div>
            <div className="flex flex-col gap-2 max-[560px]:col-span-full max-[560px]:row-start-2">
              <h3 className="m-0 text-base leading-6 font-medium tracking-normal text-[#27272a]">{job.role}</h3>
              <p className="m-0 font-[var(--font-circular)]">{job.description}</p>
            </div>
            <p className="m-0 font-[var(--font-circular)] text-right tracking-normal max-[560px]:col-start-2 max-[560px]:row-start-1 max-[560px]:text-sm">{job.dates}</p>
          </article>
        ))}
      </section>
    </>
  );
}
