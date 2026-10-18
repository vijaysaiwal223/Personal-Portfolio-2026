"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { links } from "@/lib/site";

const assetRoot = "/assets/figma-home";
const openAssets = `${assetRoot}/open-state`;

const destinations = [
  {
    label: "Projects",
    href: "/#selected-work",
    illustration: "projects-illustration.png",
    tileColor: "#e9f0ff",
    imageStyle: { width: "215%", height: "161.25%", left: "-55%", top: "-30.62%" },
  },
  {
    label: "Contact",
    href: `mailto:${links.email}`,
    illustration: "contact.png",
    tileColor: "#cae6ff",
    imageStyle: { width: "120.18%", height: "90.18%", left: "-14.71%", bottom: 0 },
  },
];

export default function HomeIsland() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const islandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen((open) => !open);
      } else if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      if (isOpen && !islandRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen]);

  return (
    <div ref={islandRef} className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
      <motion.div
        className="flex max-w-[calc(100vw-16px)] items-start"
        initial={false}
        animate={{ width: isOpen ? 336 : 328 }}
        transition={shouldReduceMotion
          ? { duration: 0 }
          : { type: "spring", stiffness: 360, damping: 34, mass: 0.8 }}
      >
        <Image
          className="block shrink-0 scale-x-[-1]"
          src={`${assetRoot}/island-left.svg`}
          alt=""
          width={14}
          height={14}
          unoptimized
        />
        <motion.div
          className="min-w-0 flex-1 bg-[#f1f1f1] backdrop-blur-[2px]"
          initial={false}
          animate={{ borderBottomLeftRadius: isOpen ? 20 : 16, borderBottomRightRadius: isOpen ? 20 : 16 }}
          transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 360, damping: 34 }}
        >
          <header className="flex items-center justify-between p-2" aria-label="Vijay Saiwal">
            <Link className="flex min-w-0 items-center gap-3 rounded-md no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" href="/" aria-label="Vijay Saiwal, home">
              <Image className="block shrink-0" src={`${assetRoot}/logo.svg`} alt="" width={41} height={41} unoptimized />
              <span className="flex min-w-0 flex-col justify-center whitespace-nowrap">
                <span className="text-[16px] leading-5 font-medium tracking-[-0.16px] text-black">Vijay Saiwal</span>
                <span className="text-[14px] leading-5 font-normal tracking-[-0.28px] text-[#737373]">Product Designer</span>
              </span>
            </Link>
            <motion.button
              ref={buttonRef}
              className={`flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap border-0 px-2 text-[14px] leading-5 tracking-[-0.28px] text-[#ccc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${isOpen ? "shadow-[inset_0_1px_2px_rgba(255,255,255,0.12),0_0_0_1px_#0f0f0f,0_1.5px_3px_rgba(31,31,31,0.08),0_4px_4px_rgba(31,31,31,0.07)]" : ""}`}
              type="button"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="home-command-menu"
              initial={false}
              animate={isOpen
                ? { width: 44, height: 28, borderRadius: 11, backgroundColor: "#2e2e2e" }
                : { width: 48, height: 32, borderRadius: 99, backgroundColor: "#312f2e" }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.92 }}
              transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 500, damping: 28 }}
              onClick={() => setIsOpen((open) => !open)}
            >
              ⌘ K
            </motion.button>
          </header>

          <motion.nav
            className="origin-top overflow-hidden"
            id="home-command-menu"
            aria-label="Navigation menu"
            aria-hidden={!isOpen}
            inert={!isOpen}
            initial={false}
            animate={isOpen
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }}
            transition={shouldReduceMotion
              ? { duration: 0 }
              : { type: "spring", stiffness: 360, damping: 34, mass: 0.8 }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
          >
            <div className="px-1 pt-1 pb-1">
              <div className="mx-auto max-w-full">
                <Image className="block max-w-full" src={`${openAssets}/divider.svg`} alt="" width={284} height={1} unoptimized />
                <div className="m-2 flex flex-col gap-0.5" onMouseLeave={() => setSelectedIndex(0)}>
                  {destinations.map(({ label, href, illustration, tileColor, imageStyle }, index) => (
                    <motion.div
                      key={label}
                      initial={false}
                      animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                      transition={shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: isOpen ? 0.25 : 0.12, delay: isOpen ? 0.08 + index * 0.04 : 0 }}
                    >
                      <Link
                        className={`flex h-8 items-center gap-2 rounded-lg py-1 pl-1 pr-2 text-[14px] leading-5 tracking-[-0.28px] text-black no-underline transition-colors focus-visible:outline-2 focus-visible:outline-black ${selectedIndex === index ? "bg-white" : "hover:bg-white"}`}
                        href={href}
                        onMouseEnter={() => setSelectedIndex(index)}
                        onFocus={() => setSelectedIndex(index)}
                        onClick={() => setIsOpen(false)}
                      >
                        <span
                          className="relative block size-6 shrink-0 overflow-hidden rounded-[4.8px]"
                          style={{ backgroundColor: tileColor }}
                          aria-hidden="true"
                        >
                          <Image
                            className="absolute max-w-none"
                            src={`${openAssets}/${illustration}`}
                            alt=""
                            width={52}
                            height={39}
                            style={imageStyle as CSSProperties}
                          />
                        </span>
                        <span>{label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.nav>
        </motion.div>
        <Image className="block shrink-0" src={`${assetRoot}/island-right.svg`} alt="" width={14} height={14} unoptimized />
      </motion.div>
    </div>
  );
}
