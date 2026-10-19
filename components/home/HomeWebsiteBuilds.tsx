"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import WebsiteToolDock from "./WebsiteToolDock";

const assetRoot = "/assets/figma-home/websites";
const tabs = [
  {
    name: "Brand Embassy",
    icon: `${assetRoot}/brand-embassy-icon.svg`,
    file: "brandembassy.mp4",
    duration: "38.3s",
    label: "Brand Embassy website preview",
    ratio: "1860 / 1080",
  },
  {
    name: "Kairos Studio",
    icon: `${assetRoot}/kairos-icon.svg`,
    file: "kairos studio.mp4",
    duration: "30.033s",
    label: "Kairos Studio website preview",
    ratio: "1860 / 1080",
  },
  {
    name: "Social Listening",
    icon: "/assets/figma-home/social-listening/profile.png",
    file: "social-listening.mp4",
    duration: "20.767s",
    label: "Social Listening design preview",
    ratio: "1884 / 1080",
  },
] as const;

export default function HomeWebsiteBuilds() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const tabListRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const list = tabListRef.current;
    const activeTab = tabRefs.current[activeIndex];
    if (!list || !activeTab) return;
    list.scrollTo({ left: activeTab.offsetLeft - list.offsetLeft - (list.clientWidth - activeTab.clientWidth) / 2 });
  }, [activeIndex]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (visible) {
      void video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [activeIndex, visible]);

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    else if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = tabs.length - 1;
    else return;

    event.preventDefault();
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  const activeVideo = tabs[activeIndex];

  return (
    <section
      className="relative mx-auto w-full max-w-[1128px] py-[100px] max-[760px]:py-20"
      id="website-builds"
      aria-labelledby="website-builds-title"
      data-paused={!visible}
      ref={sectionRef}
    >
      <div className="absolute inset-x-0 top-8 flex h-[50px] items-center max-[760px]:top-4">
        <span className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-[#272729]" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-[1000px] max-[1048px]:px-6">
          <WebsiteToolDock />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1000px] max-[1048px]:px-6">
        <h2 className="m-0 text-[32px] leading-10 font-medium tracking-[-1.3px] text-white max-[600px]:text-[28px] max-[600px]:leading-9" id="website-builds-title">
          Websites and stores, designed and built.
        </h2>
        <p className="mt-2 mb-0 max-w-[720px] text-[16px] leading-6 tracking-[-0.16px] text-[#a6a6a6] max-[600px]:text-[14px] max-[600px]:leading-[21px]">
          I design and build responsive websites and stores with Webflow, Shopify, Framer, and code.
        </p>
      </div>

      <div className="mx-auto mt-12 w-[calc(100%-48px)] max-w-[1000px] rounded-[24px] bg-[#333] px-2 pt-1 pb-2" aria-label="Website and store design previews">
        <div className="flex h-[34px] items-stretch gap-3 px-2">
          <div className="flex shrink-0 items-center gap-[6px]" aria-hidden="true">
            {[0, 1, 2].map((dot) => <span className="size-3 rounded-full bg-white/30" key={dot} />)}
          </div>
          <div className="website-tabs flex min-w-0 flex-1 items-stretch overflow-x-auto pl-2" role="tablist" aria-label="Website previews" ref={tabListRef}>
            {tabs.map((tab, index) => {
              const active = activeIndex === index;
              return (
                <button
                  type="button"
                  role="tab"
                  id={`website-tab-${index}`}
                  aria-controls="website-preview"
                  aria-selected={active}
                  tabIndex={active ? 0 : -1}
                  key={tab.name}
                  ref={(element) => { tabRefs.current[index] = element; }}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                  className={`relative flex h-[34px] shrink-0 cursor-pointer items-center gap-2 rounded-t-lg border-0 px-4 text-[12px] leading-[18px] whitespace-nowrap text-white focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-white ${active ? "bg-black pr-12" : "bg-transparent opacity-65"}`}
                >
                  {active && <Image src={`${assetRoot}/left-corner.svg`} alt="" width={8} height={8} className="absolute -bottom-px -left-2" unoptimized />}
                  <Image src={tab.icon} alt="" width={16} height={16} unoptimized />
                  <span>{tab.name}</span>
                  {active && (
                    <>
                      <svg aria-hidden="true" className="absolute right-3 top-[7px]" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="8" stroke="white" strokeOpacity="0.35" strokeWidth="2" />
                        <circle
                          className="website-tab-progress"
                          cx="10" cy="10" r="8" stroke="white" strokeWidth="2" strokeLinecap="round"
                          strokeDasharray="50.265" strokeDashoffset="50.265" transform="rotate(-90 10 10)"
                          style={{ animationDuration: tab.duration }}
                          onAnimationEnd={(event) => {
                            if (event.animationName === "website-tab-progress") setActiveIndex((current) => (current + 1) % tabs.length);
                          }}
                        />
                      </svg>
                      <Image src={`${assetRoot}/right-corner.svg`} alt="" width={8} height={8} className="absolute -right-2 -bottom-px" unoptimized />
                    </>
                  )}
                </button>
              );
            })}
          </div>
          <Image src={`${assetRoot}/browser-actions.svg`} alt="" width={52} height={20} className="my-auto shrink-0 max-[600px]:hidden" unoptimized />
        </div>
        <div className="rounded-[20px] border-2 border-black p-1">
          <div className="relative overflow-hidden rounded-2xl bg-white" style={{ aspectRatio: activeVideo.ratio }} id="website-preview" role="tabpanel" aria-labelledby={`website-tab-${activeIndex}`}>
            <video
              key={activeVideo.file}
              ref={videoRef}
              className="absolute inset-0 h-full w-full bg-white object-contain"
              src={`${assetRoot}/${encodeURIComponent(activeVideo.file)}`}
              aria-label={activeVideo.label}
              muted
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
