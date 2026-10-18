import Image from "next/image";

const imageRoot = "/assets/figma-home/social-listening";

const caseStudyImages = [
  { file: "dashboard.png", alt: "Social Listening conversation dashboard" },
  { file: "analytics.png", alt: "Social Listening analytics dashboard" },
  { file: "conversations.png", alt: "Conversation monitoring table" },
  { file: "alerts.png", alt: "Social Listening alert and conversation details" },
  { file: "details.png", alt: "Conversation details and insights" },
];

const projectDetails = [
  { label: "Role", value: "Founding Product Designer" },
  { label: "Team", value: "PM • 3 Engineering • CEO" },
  { label: "Platform", value: "Web SaaS" },
  { label: "Responsibilities", value: "Product Design, Strategy" },
];

export default function SocialListeningCaseStudy() {
  return (
    <article className="min-h-full bg-[#121213] pb-20 text-white">
      <div className="mx-auto flex w-full max-w-[700px] flex-col gap-6 px-0 pt-[145px] max-[748px]:px-6 max-[748px]:pt-28">
        <header className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="m-0 text-[24px] leading-8 font-bold tracking-[-0.16px] text-white">
              Sketchnote&apos;s Social Listening
            </h1>
            <p className="m-0 text-[14px] leading-6 tracking-[-0.28px] text-[#71717a]">
              Helping marketing teams monitor millions of online conversations, detect emerging issues, and act before they become brand crises.
            </p>
          </div>
          <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[14px] leading-5 text-[#d4d4d8]">
            <Image src="/assets/figma-home/social-listening-case/claude.png" alt="" width={20} height={20} />
            Prototyped with Claude Code
          </div>
        </header>

        <section className="overflow-hidden rounded-2xl border border-white/[.07] text-[14px] leading-5 text-[#8f8f8f]" aria-label="Project details">
          <h3 className="m-0 bg-white/5 px-[14px] py-[10px] text-[14px] leading-5 font-medium">Components</h3>
          <dl className="m-0">
            {projectDetails.map(({ label, value }) => (
              <div className="flex min-h-[44px] items-start justify-between gap-5 border-t border-white/[.07] px-[14px] py-3" key={label}>
                <dt>{label}</dt>
                <dd className="m-0 text-right">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="flex flex-col gap-2" aria-labelledby="social-listening-overview">
          <h3 className="m-0 text-[16px] leading-6 font-normal tracking-[-0.16px] text-white" id="social-listening-overview">Overview</h3>
          <p className="m-0 text-[14px] leading-6 tracking-[-0.28px] text-[#71717a]">
            Sketchnote is a SaaS platform that provides Project Management, Social Planner and Social Listening products. I led the end-to-end design of the Social Listening platform — from research and information architecture to dashboard design and developer handoff.
          </p>
        </section>

        <section className="flex flex-col gap-2" aria-labelledby="social-listening-problem">
          <h3 className="m-0 text-[16px] leading-6 font-normal tracking-[-0.16px] text-white" id="social-listening-problem">Problem Statement</h3>
          <p className="m-0 text-[14px] leading-6 tracking-[-0.28px] text-[#71717a]">
            Marketing teams monitor Twitter, Reddit, news sites and blogs using multiple tools. Important conversations often get buried under thousands of irrelevant mentions, making it difficult to detect reputation issues before they escalate.
          </p>
          <ul className="m-0 list-disc pl-[21px] text-[14px] leading-6 tracking-[-0.28px] text-[#71717a]">
            <li>Signal-to-noise overload</li>
            <li>Delayed or missing real-time alerting</li>
            <li>Sentiment analysis lacks nuance and context</li>
            <li>Insights aren&apos;t tied to action</li>
          </ul>
        </section>
      </div>

      <div className="mt-24 grid grid-cols-2 gap-4 px-6 max-[760px]:mt-16 max-[760px]:grid-cols-1" aria-label="Social Listening interface gallery">
        {caseStudyImages.map(({ file, alt }) => (
          <Image
            key={file}
            src={`${imageRoot}/${file}`}
            alt={alt}
            width={1600}
            height={900}
            sizes="(max-width: 760px) calc(100vw - 56px), calc((100vw - 64px) / 2)"
            className="block aspect-[684/384] h-auto w-full rounded-2xl object-cover"
          />
        ))}
      </div>
    </article>
  );
}
