"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const assets = "/assets/portfolio";
const email = "vijaysaiwal223@gmail.com";
const storyImages = [1, 2, 3, 4, 5, 6].map((number) => `/stories picture/${number}.jpg`);
const faqs = [
  ["How can I hire you for a project?", `You can either reach out on linkedin or email me directly at ${email}. We'll discuss your needs and how I can help.`],
  ["How are projects paid?", "Focused projects are generally split into two payments: 50% before the engagement begins and 50% before final handoff. Monthly engagements are paid in advance."],
  ["How long does a project take?", "Each project is different. Nonetheless, you can anticipate receiving updates on a daily basis throughout the creative process. Usually within the initial stages of a project, I typically require just one or two business days to present tangible progress."],
];

function StoryViewer({ onClose }: { onClose: () => void }) {
  const [activeStory, setActiveStory] = useState(0);

  const showPrevious = useCallback(() => {
    setActiveStory((current) => Math.max(current - 1, 0));
  }, []);

  const showNext = useCallback(() => {
    if (activeStory >= storyImages.length - 1) {
      onClose();
      return;
    }

    setActiveStory((current) => current + 1);
  }, [activeStory, onClose]);

  useEffect(() => {
    const timer = window.setTimeout(showNext, 5000);
    return () => window.clearTimeout(timer);
  }, [showNext]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose, showNext, showPrevious]);

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-[4px]" role="dialog" aria-modal="true" aria-label="Profile stories">
      <div className="relative aspect-[9/16] h-[min(760px,calc(100vh-48px))] max-h-full w-[min(430px,calc(100vw-32px))] overflow-hidden rounded-[28px] bg-black shadow-[0_24px_80px_rgb(0_0_0_/_45%)]">
        <Image className="object-cover" src={storyImages[activeStory]} alt={`Profile story ${activeStory + 1}`} fill sizes="(max-width: 520px) calc(100vw - 32px), 430px" priority />

        <div className="pointer-events-none absolute inset-x-0 top-0 z-[4] bg-linear-to-b from-black/55 to-transparent px-4 pt-4 pb-20">
          <div className="flex gap-1.5">
            {storyImages.map((story, index) => (
              <span className="h-1 flex-1 overflow-hidden rounded-full bg-white/35" key={story}>
                <span
                  className={`block h-full rounded-full bg-white ${index === activeStory ? "animate-[story-progress_5s_linear_forwards]" : ""}`}
                  style={{ width: index < activeStory ? "100%" : index === activeStory ? "0%" : "0%" }}
                />
              </span>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <Image className="size-10 rounded-full border-2 border-white object-cover" src={`${assets}/doc-profile.png`} alt="" width={40} height={40} />
              <span className="truncate font-[var(--font-circular)] text-[18px] leading-6 font-semibold text-white">Vijay Saiwal</span>
            </div>
            <button className="pointer-events-auto flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-black/25 p-2.5 transition-colors hover:bg-black/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" type="button" aria-label="Close stories" onClick={onClose}>
              <Image className="block size-5 invert opacity-80" src={`${assets}/contact-x.svg`} alt="" width={20} height={20} />
            </button>
          </div>
        </div>

        <button className="absolute inset-y-0 left-0 z-[2] w-1/2 cursor-pointer border-0 bg-transparent" type="button" aria-label="Previous story" onClick={showPrevious} />
        <button className="absolute inset-y-0 right-0 z-[2] w-1/2 cursor-pointer border-0 bg-transparent" type="button" aria-label="Next story" onClick={showNext} />
      </div>
    </div>
  );
}

function ContactModal({ onClose }: { onClose: () => void }) {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const copyEmail = async () => {
    await navigator.clipboard?.writeText(email);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/10 px-4 py-8 backdrop-blur-[2px]" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title" onMouseDown={onClose}>
      <div
        className="relative flex max-h-[calc(100vh-64px)] w-[min(552px,100%)] flex-col overflow-auto rounded-[20px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_8px_16px_rgba(0,0,0,0.08),0_16px_32px_rgba(0,0,0,0.08)] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:shadow-[inset_0_0_0_1px_white,inset_0_0_0_1.5px_rgba(228,228,231,0.6)]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="relative flex w-full items-center justify-between border-b border-[#e4e4e7] p-3">
          <h2 className="m-0 font-[Youth,sans-serif] text-[15px] leading-6 font-medium text-[#18181b]" id="contact-modal-title">Contact</h2>
          <button className="flex size-8 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#f2f2f2] p-[6.5px] transition-colors hover:bg-[#e8e8e8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b4eff]" type="button" aria-label="Close contact modal" onClick={onClose}>
            <Image className="block size-5" src={`${assets}/contact-x.svg`} alt="" width={20} height={20} />
          </button>
        </div>

        <div className="relative flex w-full flex-col">
          <div className="flex w-full items-center justify-between gap-4 p-3 max-[520px]:items-start">
            <div className="min-w-0">
              <h3 className="m-0 font-[Youth,sans-serif] text-[14px] leading-5 font-medium text-[#18181b]">Email</h3>
              <p className="m-0 font-[Youth,sans-serif] text-[13px] leading-5 text-[#52525b]">{email}</p>
            </div>
            <button className="flex shrink-0 cursor-pointer items-center gap-2 rounded-full border border-[#e4e4e7] bg-white px-3 py-1.5 font-[Youth,sans-serif] text-[13px] leading-5 text-[#18181b] transition-colors hover:bg-[#fafafa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b4eff]" type="button" onClick={copyEmail}>
              Copy
              <Image className="block size-4" src={`${assets}/contact-copy.svg`} alt="" width={16} height={16} />
            </button>
          </div>

          <div className="flex w-full items-center justify-between gap-4 p-3 max-[520px]:items-start">
            <div className="min-w-0">
              <h3 className="m-0 font-[Youth,sans-serif] text-[14px] leading-5 font-medium text-[#18181b]">Book call</h3>
              <p className="m-0 font-[Youth,sans-serif] text-[13px] leading-5 text-[#52525b]">Need to chat live? Book a time</p>
            </div>
            <a className="flex shrink-0 items-center gap-2 rounded-full border border-[#e4e4e7] bg-white px-3 py-1.5 font-[Youth,sans-serif] text-[13px] leading-5 text-[#18181b] no-underline transition-colors hover:bg-[#fafafa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b4eff]" href="https://cal.com/vijay-saiwal/30min" target="_blank" rel="noreferrer">
              <span className="flex items-center gap-[3px]">
                <span className="font-[var(--font-circular)] text-[10px] leading-3 text-[#a7a7a7]">Powered by</span>
                <Image className="block h-2 w-[38px]" src={`${assets}/contact-cal.svg`} alt="Cal.com" width={38} height={8} />
              </span>
              Book
            </a>
          </div>

          <div className="flex w-full items-center justify-between gap-4 p-3 max-[520px]:items-start">
            <div className="min-w-0">
              <h3 className="m-0 font-[Youth,sans-serif] text-[14px] leading-5 font-medium text-[#18181b]">Follow me</h3>
              <p className="m-0 font-[Youth,sans-serif] text-[13px] leading-5 text-[#52525b]">Mostly on X, never on Linkedin</p>
            </div>
            <div className="flex shrink-0 items-center overflow-hidden rounded-full border border-[#e4e4e7] bg-white">
              <a className="flex items-center px-3 py-2 transition-colors hover:bg-[#fafafa] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2b4eff]" href="https://x.com/jrvijaxx" target="_blank" rel="noreferrer" aria-label="Follow on X">
                <Image className="block size-4" src={`${assets}/contact-x-social.svg`} alt="" width={16} height={16} />
              </a>
              <span className="flex h-8 w-0 items-center justify-center" aria-hidden="true">
                <Image className="block h-px w-8 rotate-90" src={`${assets}/contact-separator.svg`} alt="" width={32} height={1} />
              </span>
              <a className="flex items-center px-3 py-2 transition-colors hover:bg-[#fafafa] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2b4eff]" href="https://www.linkedin.com/in/vijay-saiwal/" target="_blank" rel="noreferrer" aria-label="Follow on LinkedIn">
                <Image className="block size-4" src={`${assets}/contact-linkedin.svg`} alt="" width={16} height={16} />
              </a>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 p-3">
            <h3 className="m-0 font-[Youth,sans-serif] text-[14px] leading-5 font-medium text-[#18181b]">FAQ</h3>
            <div className="flex flex-col gap-1">
              {faqs.map(([question, answer], index) => {
                const isOpen = openFaq === index;

                return (
                  <div className="flex w-full flex-col rounded-lg bg-[#fafafa]" key={question}>
                    <button
                      className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-lg border-0 bg-transparent p-3 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b4eff]"
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span className="font-[Youth,sans-serif] text-[13px] leading-5 text-[#52525b]">{question}</span>
                      <Image className={`block size-5 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} src={`${assets}/contact-arrow-down.svg`} alt="" width={20} height={20} />
                    </button>
                    {isOpen ? (
                      <p className="m-0 px-3 pb-3 font-[Youth,sans-serif] text-[13px] leading-5 tracking-normal text-black">{answer}</p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DocDock({ active }: { active: "home" | "projects" | "about" }) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const dockItems = [
    {
      label: "Profile",
      icon: <Image className="absolute inset-0 h-full w-full rounded-full object-cover" src={`${assets}/doc-profile.png`} alt="" width={40} height={40} sizes="40px" />,
      variant: "profile",
    },
    { variant: "separator" },
    {
      label: "Home",
      href: "/#top",
      icon: <Image className="block size-5 transition-[filter,opacity] duration-200 group-data-[selected=false]:opacity-70" src={`${assets}/doc-home.svg`} alt="" width={20} height={20} />,
      variant: "home",
    },
    {
      label: "Projects",
      href: "/projects",
      icon: <Image className="block size-5 transition-[filter] duration-200 group-data-[selected=true]:[filter:brightness(0)_saturate(100%)_invert(9%)_sepia(21%)_saturate(1315%)_hue-rotate(190deg)_brightness(91%)_contrast(92%)]" src={`${assets}/doc-layers.svg`} alt="" width={20} height={20} />,
      variant: "projects",
    },
    {
      label: "About",
      href: "/about",
      icon: <Image className="block size-5 transition-[filter] duration-200 group-data-[selected=true]:[filter:brightness(0)_saturate(100%)_invert(9%)_sepia(21%)_saturate(1315%)_hue-rotate(190deg)_brightness(91%)_contrast(92%)]" src={`${assets}/doc-user.svg`} alt="" width={20} height={20} />,
      variant: "about",
    },
    { variant: "separator" },
    {
      label: "Contact",
      icon: <Image className="block size-5" src={`${assets}/doc-send.svg`} alt="" width={20} height={20} />,
      variant: "dark",
    },
  ];

  return (
    <>
      <nav className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 max-[560px]:bottom-4" aria-label="Doc navigation">
        <div className="flex max-w-[calc(100vw-32px)] items-center gap-3 overflow-x-auto rounded-full bg-black/20 p-2 shadow-[0_10px_30px_rgb(24_24_27_/_10%)] backdrop-blur-[2px]">
          {dockItems.map((item, index) => {
            if (item.variant === "separator") {
              return (
                <span className="flex h-6 w-0 shrink-0 items-center justify-center" key={`separator-${index}`} aria-hidden="true">
                  <Image className="block h-px w-6 rotate-90" src={`${assets}/doc-separator.svg`} alt="" width={24} height={1} />
                </span>
              );
            }

            const isSelected = item.variant === active;
            const className = `group relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2b4eff] motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
              item.variant === "profile"
                ? "border-2 border-white"
                : item.variant === "dark"
                  ? "bg-[#444]"
                  : isSelected
                    ? "bg-white shadow-[0_1px_3px_rgb(24_24_27_/_4%)]"
                    : ""
            }`;

            if (item.variant === "profile") {
              return (
                <button aria-label="Open profile stories" className={`${className} cursor-pointer p-0`} data-selected={isStoryOpen} key={item.label} title="Profile stories" type="button" onClick={() => setIsStoryOpen(true)}>
                  {item.icon}
                </button>
              );
            }

            if (item.variant === "dark") {
              return (
                <button aria-label={item.label} className={`${className} cursor-pointer border-0`} data-selected={isContactOpen} key={item.label} title={item.label} type="button" onClick={() => setIsContactOpen(true)}>
                  {item.icon}
                </button>
              );
            }

            return (
              <a aria-label={item.label} className={className} data-selected={isSelected} href={item.href} key={item.label} title={item.label}>
                {item.icon}
              </a>
            );
          })}
        </div>
      </nav>
      {isStoryOpen ? <StoryViewer onClose={() => setIsStoryOpen(false)} /> : null}
      {isContactOpen ? <ContactModal onClose={() => setIsContactOpen(false)} /> : null}
    </>
  );
}
