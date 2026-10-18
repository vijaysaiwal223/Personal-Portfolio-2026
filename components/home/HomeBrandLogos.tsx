"use client";

import Image from "next/image";
import { useState } from "react";

const brands = [
  { name: "Zazzy", image: "zazzy.png", width: 84, height: 28 },
  { name: "Mailbird", image: "mailbird.png", width: 98, height: 28 },
  { name: "Modern Market", image: "modern-market.png", width: 83, height: 45 },
  { name: "Pro Creator", image: "procreator.png", width: 136, height: 28 },
  { name: "Sketchnote", image: "sketchnote.svg", width: 120, height: 24 },
  { name: "Whoflex", image: "whoflex.png", width: 113, height: 24 },
] as const;

function BrandStrip({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="home-brand-marquee-set flex shrink-0 items-center gap-12" aria-hidden={duplicate}>
      {brands.map(({ name, image, width, height }) => (
        <div key={name} className="flex h-10 shrink-0 items-center justify-center">
          <div className={image === "sketchnote.svg" ? "relative scale-90" : "relative"}>
            <Image
              src={`/assets/figma-home/brands/${image}`}
              alt={name}
              width={width}
              height={height}
              className="block"
              unoptimized={image.endsWith(".svg")}
            />
          </div>
        </div>
      ))}
      <div className="flex h-10 shrink-0 items-center gap-2" aria-label="Matchscope.pro">
        <Image className="scale-[0.875]" src="/assets/figma-home/brands/matchscope.svg" alt="" width={32} height={32} unoptimized />
        <span className="whitespace-nowrap font-[Georgia,serif] text-[18px] leading-7 text-white">Matchscope.pro</span>
      </div>
      <div className="flex h-10 shrink-0 items-center justify-center">
        <Image className="scale-[0.7]" src="/assets/figma-home/brands/73strings.svg" alt="73 Strings" width={36} height={40} unoptimized />
      </div>
      <div className="flex h-10 shrink-0 items-center justify-center">
        <Image src="/assets/figma-home/brands/leera.png" alt="Leera" width={28} height={28} />
      </div>
    </div>
  );
}

export default function HomeBrandLogos() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="home-brand-section relative z-10 mt-[85px] w-full max-[1048px]:px-6" aria-label="Brands we’ve worked with" data-paused={paused}>
      <div className="pointer-events-none absolute -top-[29px] left-0 w-full max-[1048px]:px-6" aria-hidden="true">
        <div className="h-px w-full bg-white/20" />
      </div>
      <div className="flex items-center justify-between gap-4">
        <p className="m-0 text-[14px] leading-5 font-normal text-[#969696]">Brands we’ve worked with</p>
        <button
          className="grid size-9 shrink-0 cursor-pointer place-items-center rounded-full border-0 bg-transparent p-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:hidden"
          type="button"
          aria-label={paused ? "Play brand logos" : "Pause brand logos"}
          aria-pressed={paused}
          onClick={() => setPaused((wasPaused) => !wasPaused)}
        >
          <svg aria-hidden="true" width="26" height="26" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="10" fill="#18181B" fillOpacity="0.4" />
            <circle cx="10" cy="10" r="7.5" stroke="white" strokeOpacity="0.18" strokeWidth="1.7" />
            <circle className="home-brand-progress" cx="10" cy="10" r="7.5" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeDasharray="47.124" strokeDashoffset="47.124" transform="rotate(-90 10 10)" />
            {paused ? (
              <path d="M7.5 6.4L13.5 10L7.5 13.6V6.4Z" fill="white" />
            ) : (
              <>
                <rect x="6.7" y="6.7" width="2.2" height="6.6" rx="0.7" fill="white" />
                <rect x="11.1" y="6.7" width="2.2" height="6.6" rx="0.7" fill="white" />
              </>
            )}
          </svg>
        </button>
      </div>
      <div className="home-brand-marquee mt-4 overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" role="group" tabIndex={0} aria-label="Brand logos. Focus or hover to pause animation.">
        <div className="home-brand-marquee-track flex w-max items-center gap-12">
          <BrandStrip />
          <BrandStrip duplicate />
        </div>
      </div>
    </section>
  );
}
