import DocDock from "../DocDock";
import { AboutSections, PageShell } from "../PortfolioShared";

export const metadata = {
  title: "About",
  description: "Background, principles, and experience for Vijay Saiwal.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <DocDock active="about" />
      <div className="flex w-[min(800px,100%)] flex-col gap-3" id="top">
        <h1 className="m-0 font-[Youth,sans-serif] text-2xl leading-8 font-bold tracking-[-0.16px] text-black">About</h1>
        <p className="m-0 max-w-[560px] font-[var(--font-circular)] tracking-[-0.32px]">
          A little more about the person behind the pixels, the principles, and the design work.
        </p>
      </div>
      <AboutSections />
    </PageShell>
  );
}
