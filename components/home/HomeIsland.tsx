import Image from "next/image";
import Link from "next/link";
import { links } from "@/lib/site";

const assetRoot = "/assets/figma-home";

export default function HomeIsland() {
  return (
    <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
      <div className="flex w-[328px] max-w-[calc(100vw-16px)] items-start">
        <Image
          className="block shrink-0 scale-x-[-1]"
          src={`${assetRoot}/island-left.svg`}
          alt=""
          width={14}
          height={14}
          unoptimized
        />
        <div className="min-w-0 flex-1 rounded-b-2xl bg-[#f1f1f1] backdrop-blur-[2px]">
          <header className="flex items-center justify-between gap-2 p-2" aria-label="Vijay Saiwal">
            <Link className="flex min-w-0 items-center gap-3 rounded-md no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" href="/" aria-label="Vijay Saiwal, home">
              <Image className="block shrink-0" src={`${assetRoot}/logo.svg`} alt="" width={41} height={41} unoptimized />
              <span className="flex min-w-0 flex-col justify-center whitespace-nowrap">
                <span className="text-[16px] leading-5 font-medium tracking-[-0.16px] text-black">Vijay Saiwal</span>
                <span className="text-[14px] leading-5 font-normal tracking-[-0.28px] text-[#737373]">Product Designer</span>
              </span>
            </Link>
            <a
              className="flex h-8 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-[#312f2e] px-3 text-[14px] leading-5 tracking-[-0.28px] text-white no-underline transition-colors hover:bg-[#1f1f1f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              href={links.bookCall}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a call
            </a>
          </header>
        </div>
        <Image className="block shrink-0" src={`${assetRoot}/island-right.svg`} alt="" width={14} height={14} unoptimized />
      </div>
    </div>
  );
}
