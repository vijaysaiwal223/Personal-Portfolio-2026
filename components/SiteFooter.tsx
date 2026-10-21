import Image from "next/image";
import Link from "next/link";
import { links } from "@/lib/site";
import FooterVisitorCount from "@/components/FooterVisitorCount";

const socialLinks = [
  { label: "LinkedIn", href: links.linkedIn, icon: "/assets/figma-footer/linkedin.svg" },
  { label: "X", href: links.x, icon: "/assets/figma-footer/x.svg" },
  { label: "Resume", href: "/vijay-saiwal-resume.pdf", icon: "/assets/figma-footer/pdf.svg" },
] as const;

export default function SiteFooter() {
  return (
    <footer className="bg-[#f1f1f1] px-6 py-10 text-black" aria-label="Contact and social links">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-6">
        <div className="flex items-center justify-between gap-6 border-b border-black/10 pb-4">
          <Link
            className="flex items-center gap-3 rounded-md no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            href="/"
            aria-label="Vijay Saiwal, home"
          >
            <Image className="block shrink-0" src="/assets/figma-footer/logo.svg" alt="" width={41} height={41} unoptimized />
            <span className="flex flex-col whitespace-nowrap">
              <span className="text-[16px] font-medium leading-5 tracking-[-0.16px]">Vijay Saiwal</span>
              <span className="text-[14px] leading-5 tracking-[-0.28px] text-[#737373]">Product Designer</span>
            </span>
          </Link>
          <span
            className="block h-10 w-[85.455px] shrink-0"
            style={{ maskImage: 'url("/assets/figma-footer/badge-mask.svg")', maskRepeat: "no-repeat" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="block" src="/assets/figma-footer/badge.svg" alt="Featured on Wall of Portfolios" />
          </span>
        </div>
        <div className="flex items-start justify-between gap-x-6 gap-y-4 text-[14px] leading-5 tracking-[-0.28px] max-[600px]:flex-wrap">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <p className="m-0">© {new Date().getFullYear()} Vijay Saiwal</p>
            <FooterVisitorCount />
          </div>
          <nav className="flex flex-wrap items-center gap-x-2 gap-y-2" aria-label="Social links">
            {socialLinks.map(({ label, href, icon }, index) => (
              <span className="flex items-center gap-2" key={label}>
                {index > 0 && <span className="text-[#71717a]" aria-hidden="true">|</span>}
                <a
                  className="flex items-center gap-1 rounded-sm text-black no-underline hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex size-6 items-center justify-center" aria-hidden="true">
                    {/* The SVG keeps its Figma dimensions inside the 24px icon slot. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={`block ${label === "LinkedIn" ? "-scale-y-100" : ""}`} src={icon} alt="" />
                  </span>
                  {label}
                </a>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
