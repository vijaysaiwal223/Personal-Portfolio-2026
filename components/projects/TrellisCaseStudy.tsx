import type { ReactNode } from "react";
import Image from "next/image";
import ActionLink from "@/components/ActionLink";

const imageRoot = "/assets/portfolio/trellis";

const prototypeUrl = "https://trellis-ux.vercel.app/";

const caseStudyImages = [
  { file: "01.png", alt: "Trellis renewal decision dashboard" },
  { file: "02.png", alt: "Assigning an owner to a renewal decision" },
  { file: "03.png", alt: "Reviewing a subscription owner's renewal recommendation" },
  { file: "04.png", alt: "Recording a renewal decision and seat reduction" },
  { file: "05.png", alt: "Preparing and sending a contract notice" },
  { file: "06.png", alt: "Reviewing a missed notice deadline" },
  { file: "07.png", alt: "Trellis messaging integration settings" },
  { file: "08.png", alt: "Trellis renewal reminder email" },
];

const projectDetails = [
  { label: "Role", value: "Product design and prototype development" },
  { label: "Scope", value: "Product framing, user flows, interface design, and implementation" },
  { label: "Platform", value: "Web app" },
  { label: "Status", value: "Working prototype" },
];

const tldr = [
  { label: "Problem", body: "Renewals involve several people and a notice deadline that comes before the renewal date, so decisions are easy to miss." },
  { label: "Solution", body: "A renewal decision queue that connects ownership, recommendations, decisions, and notice follow-through in one workspace." },
  { label: "My role", body: "Product framing, user flows, and interface design, then a working prototype built with AI coding agents." },
  { label: "Outcome", body: "A working prototype covering the full renewal workflow, including reassignment and missed-deadline recovery." },
];

const framingQuestions = [
  "Which renewals need attention now?",
  "Who is responsible for the decision?",
  "What information supports the recommendation?",
  "What still needs to happen before the renewal is handled?",
];

const workflowSteps = [
  {
    title: "Identify the renewal.",
    body: "The admin reviews the queue and sees the deadline, contract value, usage, and ownership status.",
  },
  {
    title: "Assign responsibility.",
    body: "If there is no active owner, the admin assigns someone and requests a recommendation with the relevant context.",
  },
  {
    title: "Collect a recommendation.",
    body: "The owner reviews usage and contract information, then recommends a course of action.",
  },
  {
    title: "Make the decision.",
    body: "The admin reviews the recommendation alongside its reasoning and financial implications, then records the decision.",
  },
  {
    title: "Complete the required notice.",
    body: "Trellis provides a draft notice and instructions. The admin sends it through the required channel and records that it was sent.",
  },
  {
    title: "Close the loop.",
    body: "The renewal reaches a handled state once the required follow-through is complete.",
  },
];

const keyDecisions = [
  {
    title: "Ownership can change.",
    body: "A renewal may belong to someone who has left the company. Trellis surfaces that gap and provides a reassignment flow with enough context for the next person to act.",
  },
  {
    title: "Recommendations need context.",
    body: "The decision view brings together usage, pricing, deadlines, and the owner’s reasoning. This helps the admin understand the recommendation before accepting it.",
  },
  {
    title: "Recording a decision does not finish the work.",
    body: "For contracts that require written notice, choosing to reduce seats or cancel still leaves an action outstanding. Trellis keeps that step visible until the user records that notice was sent.",
  },
  {
    title: "Missed deadlines need a recovery path.",
    body: "A missed deadline remains visible with its consequences and available next steps, such as contacting the vendor or scheduling the next review.",
  },
];

const headingClass = "m-0 text-[16px] leading-6 font-normal tracking-[-0.16px] text-white";
const bodyClass = "m-0 text-[16px] leading-7 tracking-[-0.16px] text-[#71717a]";
const listClass = "m-0 list-disc pl-[21px] text-[16px] leading-7 tracking-[-0.16px] text-[#71717a]";
function PrototypeLink({ children }: { children: ReactNode }) {
  return (
    <ActionLink variant="primary" href={prototypeUrl} target="_blank" rel="noopener noreferrer">
      {children}
    </ActionLink>
  );
}

export default function TrellisCaseStudy() {
  return (
    <article className="min-h-full bg-[#121213] pb-20 text-white">
      <div className="mx-auto flex w-full max-w-[700px] flex-col gap-6 px-0 pt-[145px] max-[748px]:px-6 max-[748px]:pt-28">
        <header className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="m-0 text-[24px] leading-8 font-bold tracking-[-0.16px] text-white">
              Trellis
            </h1>
            <p className="m-0 text-[16px] leading-7 tracking-[-0.16px] text-[#71717a]">
              Helping teams make subscription decisions before the renewal deadline.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrototypeLink>View live prototype</PrototypeLink>
            <ActionLink variant="secondary" href="#trellis-gallery">
              Explore the design
            </ActionLink>
          </div>
        </header>

        <section className="overflow-hidden rounded-2xl border border-white/[.07] text-[14px] leading-5 text-[#8f8f8f]" aria-label="Project details">
          <h3 className="m-0 bg-white/5 px-[14px] py-[10px] text-[14px] leading-5 font-medium">Project details</h3>
          <dl className="m-0">
            {projectDetails.map(({ label, value }) => (
              <div className="flex min-h-[44px] items-start justify-between gap-5 border-t border-white/[.07] px-[14px] py-3" key={label}>
                <dt className="shrink-0">{label}</dt>
                <dd className="m-0 text-right">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="flex flex-col gap-2" aria-labelledby="trellis-tldr">
          <h3 className={headingClass} id="trellis-tldr">TL;DR</h3>
          <ul className={listClass}>
            {tldr.map(({ label, body }) => (
              <li key={label}>
                <span className="text-white">{label}:</span> {body}
              </li>
            ))}
          </ul>
        </section>

        <details className="group flex flex-col">
          <summary className="action-link action-link--dark action-link--secondary cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">Read full case study</span>
            <span className="hidden group-open:inline">Show less</span>
          </summary>

          <div className="flex flex-col gap-6 pt-6">
            <section className="flex flex-col gap-2" aria-labelledby="trellis-overview">
              <h3 className={headingClass} id="trellis-overview">Overview</h3>
              <p className={bodyClass}>
                Trellis is a subscription management concept that brings upcoming renewals, contract owners, usage information, and decision-making into one workspace.
              </p>
              <p className={bodyClass}>
                I built the project from scratch, taking it from product definition and interaction design through to a working prototype with AI coding agents.
              </p>
            </section>

            <section className="flex flex-col gap-2" aria-labelledby="trellis-problem">
              <h3 className={headingClass} id="trellis-problem">A renewal date is only part of the decision.</h3>
              <p className={bodyClass}>
                A subscription renewal involves several people and a sequence of actions. Someone needs to review usage, recommend what to do, make the final decision, and notify the vendor before the contract’s notice deadline.
              </p>
              <p className={bodyClass}>
                My problem framing for Trellis was to explore how those steps could come together so teams can answer four questions:
              </p>
              <ul className={listClass}>
                {framingQuestions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ul>
            </section>

            <section className="flex flex-col gap-2" aria-labelledby="trellis-idea">
              <h3 className={headingClass} id="trellis-idea">Make the next action clear.</h3>
              <p className={bodyClass}>
                I structured Trellis around a renewal decision queue. Each contract shows its deadline, owner, usage, value, and current status, with an action that reflects what needs to happen next.
              </p>
              <p className={bodyClass}>
                The queue connects the overview to the detailed workflow. A user can assign an owner, review a recommendation, record a decision, and track the required notice from the same workspace. The queue prioritizes the date by which a decision must be made, accounting for the vendor’s notice period.
              </p>
            </section>

            <section className="flex flex-col gap-2" aria-labelledby="trellis-workflow">
              <h3 className={headingClass} id="trellis-workflow">One renewal, start to finish</h3>
              <p className={bodyClass}>
                A subscription is approaching its notice deadline. Its usage needs reviewing, and the team must decide whether to renew, reduce seats, renegotiate, or cancel.
              </p>
              <ol className="m-0 list-decimal pl-[21px] text-[16px] leading-7 tracking-[-0.16px] text-[#71717a]">
                {workflowSteps.map(({ title, body }) => (
                  <li key={title}>
                    <span className="text-white">{title}</span> {body}
                  </li>
                ))}
              </ol>
            </section>

            <section className="flex flex-col gap-2" aria-labelledby="trellis-decisions">
              <h3 className={headingClass} id="trellis-decisions">Designing beyond the ideal path</h3>
              <ul className={listClass}>
                {keyDecisions.map(({ title, body }) => (
                  <li key={title}>
                    <span className="text-white">{title}</span> {body}
                  </li>
                ))}
              </ul>
            </section>

            <section className="flex flex-col gap-2" aria-labelledby="trellis-ai">
              <h3 className={headingClass} id="trellis-ai">Taking the design into a working prototype with AI agents.</h3>
              <p className={bodyClass}>
                I used AI coding agents to help translate the design into a working prototype. This extended my role into implementation and gave me a way to review the experience in the browser.
              </p>
              <p className={bodyClass}>
                I gave the agents the designs, flow descriptions, and interaction requirements, then reviewed each implementation against the intended workflow, identified what needed correction, and refined the result until the behavior matched the design.
              </p>
              {/* TODO: add one concrete iteration (first output → what needed fixing → refined result). */}
            </section>

            <section className="flex flex-col gap-2" aria-labelledby="trellis-outcome">
              <h3 className={headingClass} id="trellis-outcome">From an initial concept to a working prototype.</h3>
              <p className={bodyClass}>
                Trellis demonstrates how I approach a product from problem framing through interface design and implementation. The prototype brings together a renewal queue, owner assignment, recommendations, decision recording, notice follow-through, and supporting integrations and email reminders.
              </p>
              <p className={bodyClass}>
                The next step is to test whether people understand the distinction between the notice deadline and renewal date, can identify their next action, and can complete the workflow without guidance.
              </p>
              <div className="pt-2">
                <PrototypeLink>Explore the prototype</PrototypeLink>
              </div>
            </section>
          </div>
        </details>
      </div>

      <div id="trellis-gallery" className="mt-24 grid scroll-mt-28 grid-cols-2 gap-4 px-6 max-[760px]:mt-16 max-[760px]:grid-cols-1" aria-label="Trellis interface gallery">
        {caseStudyImages.map(({ file, alt }) => (
          <Image
            key={file}
            src={`${imageRoot}/${file}`}
            alt={alt}
            width={1920}
            height={1080}
            sizes="(max-width: 760px) calc(100vw - 56px), calc((100vw - 64px) / 2)"
            className="block aspect-[16/9] h-auto w-full rounded-2xl object-cover"
          />
        ))}
      </div>
    </article>
  );
}
