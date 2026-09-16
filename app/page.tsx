import Image from "next/image";
import DocDock from "./DocDock";
import Showreel from "./Showreel";
import { assets, PageShell } from "./PortfolioShared";
import { site } from "./site";

export default function Home() {
  return (
    <PageShell>
      <header className="flex w-[min(800px,100%)] flex-col gap-10 max-[560px]:gap-8" id="top">
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative h-16 w-16 overflow-hidden rounded-2xl border-2 border-solid border-white shadow-[0_0_0_2px_#cfcfcf]">
              <Image className="h-full w-full object-cover" src={`${assets}/profile-figma.png`} alt="Vijay Saiwal" width={64} height={64} preload sizes="64px" />
            </div>
            <div className="flex flex-col items-start gap-0">
              <div className="flex min-h-7 items-center font-[Youth,sans-serif] text-xl leading-7 font-medium tracking-[-0.16px] text-[#18181b]">
                <span>Vijay Saiwal</span>
              </div>
              <span className="font-[var(--font-circular)] text-base leading-6 font-normal tracking-[-0.32px] text-[#71717a]">Product Designer</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[minmax(0,1fr)_284.8px] gap-6 max-[760px]:grid-cols-1 max-[760px]:gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="m-0 font-[Youth,sans-serif] text-2xl leading-8 font-bold tracking-[-0.16px] text-black">
              Designer &amp; Builder.
              <br />
              Curious about how things work and why they matter.
            </h1>
            <p className="m-0 font-[var(--font-circular)] tracking-[-0.32px]">
              Hey, I’m Vijay Saiwal 👋🏻 A product designer with 4+ years of SaaS experience, passionate about crafting smooth user journeys, clean UI, and meaningful product experiences.
            </p>
            <div className="flex flex-wrap items-center gap-2.5">
              <a className="inline-flex h-9 items-center justify-center gap-1.5 rounded-[130px] bg-linear-to-b from-[#555555] to-[#262626] px-3 py-2 font-[var(--font-circular)] text-sm leading-5 font-medium tracking-normal text-white no-underline shadow-[0_1px_2px_rgb(0_0_0_/_16%),0_0_0_1px_rgb(0_0_0_/_10%)] transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:from-[#4a4a4a] hover:to-[#18181b] hover:shadow-[0_4px_8px_rgb(0_0_0_/_14%),0_0_0_1px_rgb(0_0_0_/_10%)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2b4eff] motion-reduce:transition-none motion-reduce:hover:translate-y-0" href={site.linkedIn} target="_blank" rel="noreferrer">
                <Image className="block shrink-0" src={`${assets}/linkedin.svg`} alt="" width={16} height={16} />
                <span className="text-white">Connect on Linkedin</span>
              </a>
              <a className="inline-flex h-9 items-center justify-center gap-1.5 rounded-[130px] bg-linear-to-b from-white to-[#f7f7f8] px-3 py-2 font-[var(--font-circular)] text-sm leading-5 font-medium tracking-normal text-[#52525b] no-underline shadow-[0_1px_2px_rgb(0_0_0_/_8%),0_0_0_1px_#d9d9de] transition-[transform,box-shadow,color] duration-200 hover:-translate-y-0.5 hover:text-[#18181b] hover:shadow-[0_4px_8px_rgb(0_0_0_/_10%),0_0_0_1px_#c8c8ce] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2b4eff] motion-reduce:transition-none motion-reduce:hover:translate-y-0" href="/vijay-saiwal-resume.pdf" target="_blank" rel="noreferrer">
                Check out my resume
              </a>
            </div>
          </div>

          <aside className="flex flex-col gap-4 max-[760px]:grid max-[760px]:grid-cols-2 max-[760px]:gap-6 max-[560px]:grid-cols-1 max-[560px]:gap-5" aria-label="Current and previous work">
            <div className="flex flex-col gap-2">
              <h2 className="m-0 font-[Youth,sans-serif] text-xs leading-4 font-medium tracking-[0.48px] uppercase">Now</h2>
              <ul className="m-0 flex list-none flex-col gap-0.5 p-0 font-[var(--font-circular)]">
                <li className="flex flex-wrap items-center gap-1">
                  <span>🧑🏻‍💻 Product Designer at</span>
                  <span className="inline-flex items-center gap-1 text-[#18181b]">
                    <Image className="block shrink-0 rounded-sm" src={`${assets}/sketchnote.png`} alt="" width={20} height={20} />
                    Sketchnote
                  </span>
                </li>
                <li className="flex flex-wrap items-center gap-1">
                  <span>🤝 Freelancing</span> <span className="text-[#18181b]">with startups</span>
                </li>
                <li className="flex flex-wrap items-center gap-1">
                  <span>⚡️ Exploring</span> <span className="text-[#18181b]">Claude &amp; Figma Make</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="m-0 font-[Youth,sans-serif] text-xs leading-4 font-medium tracking-[0.48px] uppercase">Previously</h2>
              <div className="flex flex-col gap-1 font-[var(--font-circular)]">
                <span>🏢 Sr. Associate Designer at</span>
                <span className="inline-flex items-center gap-1 text-[#18181b]">
                  <Image className="block shrink-0 rounded-sm" src={`${assets}/procreator.png`} alt="" width={20} height={20} />
                  Procreator
                </span>
              </div>
            </div>
          </aside>
        </div>

        <div className="flex items-center gap-10 rounded-xl bg-[#f2f4f5] px-4 py-3 max-[760px]:gap-5 max-[560px]:flex-col max-[560px]:items-start max-[560px]:gap-4">
          <p className="m-0 flex-1 font-[var(--font-circular)] text-sm leading-5 tracking-normal text-[#7f7f7f]">If you’re unsure where your project fits, want to think beyond the obvious, or explore something new, we’re always open to a conversation.</p>
          <div className="flex shrink-0 items-center gap-[18px] font-[var(--font-circular)] tracking-normal max-[760px]:flex-col-reverse max-[760px]:gap-2 max-[560px]:w-full max-[560px]:flex-row max-[560px]:justify-between">
            <span className="inline-flex items-center gap-[3px] text-[10px] leading-3 text-[#a7a7a7]">
              Powered by <Image className="block shrink-0" src={`${assets}/cal-logo.svg`} alt="Cal.com" width={38} height={8} />
            </span>
            <a className="inline-flex items-center justify-center gap-[7px] rounded-[60px] bg-[#2b4fff] py-0 pr-1.5 pl-2.5 text-sm leading-[25px] font-semibold text-white no-underline shadow-[0_1px_2px_rgb(43_79_255_/_22%)] transition-colors duration-200 hover:bg-[#1938d8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2b4eff] motion-reduce:transition-none" href="https://cal.com/vijay-saiwal/30min" target="_blank" rel="noreferrer">
              <span className="text-white">Chat with us</span>
              <Image className="block shrink-0" src={`${assets}/chat-arrow.svg`} alt="" width={12} height={12} />
            </a>
          </div>
        </div>
      </header>

      <DocDock active="home" />

      <section className="flex w-[min(800px,100%)] flex-col gap-3" aria-label="Recent work">
        <Showreel />
      </section>
    </PageShell>
  );
}
