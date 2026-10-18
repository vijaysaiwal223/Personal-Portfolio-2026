import Image from "next/image";

const imageRoot = "/assets/portfolio/whoflex";

const caseStudyImages = [
  { file: "lesson-quiz.png", alt: "Whoflex lesson page with chapter quiz and course navigation" },
  { file: "learner-dashboard.png", alt: "Whoflex learner dashboard with courses and coaching" },
  { file: "sign-in.png", alt: "Whoflex sign-in dialog over the learner dashboard" },
  { file: "instructor-application.png", alt: "Whoflex instructor application form" },
  { file: "bestsellers.png", alt: "Whoflex bestsellers and course discovery page" },
];

const projectDetails = [
  { label: "Role", value: "Product Designer" },
  { label: "Client", value: "Whoflex" },
  { label: "Platform", value: "Web" },
  { label: "Focus", value: "Learning experience, UX/UI" },
];

export default function WhoflexCaseStudy() {
  return (
    <article className="min-h-full bg-[#121213] pb-20 text-white">
      <div className="mx-auto flex w-full max-w-[700px] flex-col gap-6 px-0 pt-[145px] max-[748px]:px-6 max-[748px]:pt-28">
        <header className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="m-0 text-[24px] leading-8 font-bold tracking-[-0.16px] text-white">
              Whoflex
            </h1>
            <p className="m-0 text-[14px] leading-6 tracking-[-0.28px] text-[#71717a]">
              A digital learning experience for discovering classes, following lessons, and building practical skills.
            </p>
          </div>
          <div className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[14px] leading-5 text-[#d4d4d8]">
            Online learning platform
          </div>
        </header>

        <section className="overflow-hidden rounded-2xl border border-white/[.07] text-[14px] leading-5 text-[#8f8f8f]" aria-label="Project details">
          <h3 className="m-0 bg-white/5 px-[14px] py-[10px] text-[14px] leading-5 font-medium">Project details</h3>
          <dl className="m-0">
            {projectDetails.map(({ label, value }) => (
              <div className="flex min-h-[44px] items-start justify-between gap-5 border-t border-white/[.07] px-[14px] py-3" key={label}>
                <dt>{label}</dt>
                <dd className="m-0 text-right">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="flex flex-col gap-2" aria-labelledby="whoflex-overview">
          <h3 className="m-0 text-[16px] leading-6 font-normal tracking-[-0.16px] text-white" id="whoflex-overview">Overview</h3>
          <p className="m-0 text-[14px] leading-6 tracking-[-0.28px] text-[#71717a]">
            Whoflex brings short, practical courses into one learning platform. The experience spans course discovery, a personal dashboard, lesson chapters and quizzes, account access, and an application flow for instructors.
          </p>
        </section>

        <section className="flex flex-col gap-2" aria-labelledby="whoflex-problem">
          <h3 className="m-0 text-[16px] leading-6 font-normal tracking-[-0.16px] text-white" id="whoflex-problem">Problem Statement</h3>
          <p className="m-0 text-[14px] leading-6 tracking-[-0.28px] text-[#71717a]">
            Learners need a clear path from finding a class to resuming lessons and completing assessments. The interface also needs to make coaching and instructor participation easy to discover.
          </p>
          <ul className="m-0 list-disc pl-[21px] text-[14px] leading-6 tracking-[-0.28px] text-[#71717a]">
            <li>Find relevant classes and coaching</li>
            <li>Keep in-progress and saved learning visible</li>
            <li>Move through lesson chapters and quizzes</li>
            <li>Provide a clear path for new instructors</li>
          </ul>
        </section>
      </div>

      <div className="mt-24 grid grid-cols-2 gap-4 px-6 max-[760px]:mt-16 max-[760px]:grid-cols-1" aria-label="Whoflex interface gallery">
        {caseStudyImages.map(({ file, alt }) => (
          <Image
            key={file}
            src={`${imageRoot}/${file}`}
            alt={alt}
            width={1920}
            height={1080}
            sizes="(max-width: 760px) calc(100vw - 56px), calc((100vw - 64px) / 2)"
            className="block aspect-[684/384] h-auto w-full rounded-2xl object-cover"
          />
        ))}
      </div>
    </article>
  );
}
