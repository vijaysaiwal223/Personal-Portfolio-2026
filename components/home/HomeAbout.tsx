import Image from "next/image";
import { links } from "@/lib/site";

const assetRoot = "/assets/figma-home/about";

export default function HomeAbout() {
  return (
    <section className="relative mx-auto w-full max-w-[1128px] py-[100px] max-[760px]:py-20" id="about" aria-labelledby="about-title">
      <div className="absolute inset-x-0 top-10 flex h-[54px] items-center max-[760px]:top-4">
        <span className="h-px w-16 shrink-0 bg-[#272729] max-[1128px]:w-[calc((100%-1000px)/2)] max-[1048px]:w-6" aria-hidden="true" />
        <div className="flex shrink-0 items-center gap-2 rounded-2xl border border-[#e9e9e9]/10 bg-[#19191b] p-[6px]">
          <Image
            className="size-10 rounded-[9px] border border-black/10 object-cover"
            src={`${assetRoot}/avatar.png`}
            alt=""
            width={40}
            height={40}
            sizes="40px"
          />
          <span className="flex flex-col pr-2">
            <span className="text-[16px] font-medium leading-5 tracking-[-0.16px] text-[#ddd]">Vijay Saiwal</span>
            <span className="text-[14px] leading-5 tracking-[-0.28px] text-[#737373]">About me</span>
          </span>
        </div>
        <span className="h-px flex-1 bg-[#272729]" aria-hidden="true" />
      </div>

      <div className="mx-auto flex w-full max-w-[1000px] items-start justify-center gap-8 max-[1048px]:px-6 max-[900px]:flex-col">
        <h2 className="sr-only" id="about-title">About me</h2>
        <div className="flex min-w-0 flex-1 flex-col gap-4 text-[16px] leading-6 max-[600px]:text-[14px] max-[600px]:leading-[22px]">
          <p className="m-0 tracking-[-0.16px] text-white">
            I’m Vijay, a product designer who makes complex SaaS products easier to understand and use. At Matchscope.pro, I’ve taken a career preparation platform from concept to launch, bringing product strategy, UX, visual design, and development together for more than 5,000 active users.
          </p>
          <p className="m-0 tracking-[-0.32px] text-[#8f8f8f]">
            At Sketchnote Solutions, I designed enterprise features from discovery through release and worked with product and engineering teams to simplify demanding workflows. My experience also spans fintech, learning platforms, and design systems.
          </p>
          <p className="m-0 tracking-[-0.32px] text-[#8f8f8f]">
            I enjoy building beyond the design file, from responsive websites to working products. You can connect with me on{" "}
            <a className="underline underline-offset-2 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" href={links.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {" "}or take a look at my{" "}
            <a className="underline underline-offset-2 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" href="/vijay-saiwal-resume.pdf" target="_blank" rel="noopener noreferrer">resume</a>.
          </p>
        </div>
        <div className="relative h-[505px] w-[379px] shrink-0 max-[900px]:h-[170px] max-[900px]:w-full max-[900px]:max-w-[379px]" aria-hidden="true">
          {/* Figma places the book slightly left of center on the shelf. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="absolute left-[38px] top-[84px] max-[900px]:left-1/2 max-[900px]:-translate-x-1/2" src={`${assetRoot}/shelf.svg`} alt="" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="absolute left-[126px] top-[6.6px] max-[900px]:left-[calc(50%-30px)] max-[900px]:-translate-x-1/2" src={`${assetRoot}/book.svg`} alt="" />
        </div>
      </div>
    </section>
  );
}
