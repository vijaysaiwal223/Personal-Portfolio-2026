import Image from "next/image";
import Link from "next/link";
import { links } from "@/lib/site";
import ActionLink from "@/components/ActionLink";

const socialLinks = [
  { label: "LinkedIn", href: links.linkedIn },
  { label: "X", href: links.x },
  { label: "Resume", href: "/vijay-saiwal-resume.pdf" },
] as const;

export default function SiteFooter() {
  return (
    <footer className="bg-[#f1f1f1] px-6 py-10 text-black" aria-label="Contact and social links">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-10">
        <div className="flex items-start justify-between gap-10 max-[600px]:flex-col max-[600px]:gap-8">
          <Link className="rounded-[10px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" href="/" aria-label="Vijay Saiwal, home">
            <Image className="block" src="/assets/figma-home/logo.svg" alt="" width={41} height={41} unoptimized />
          </Link>
          <div className="flex w-[300px] max-w-full flex-col gap-4 text-[14px] leading-5 tracking-[-0.28px]">
            <p className="m-0">Do you have a project I could help with? I&apos;d be happy to discuss the opportunity.</p>
            <ActionLink variant="primary" theme="light" href={`mailto:${links.email}`}>
              Get in touch
            </ActionLink>
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 text-[14px] leading-5 tracking-[-0.28px] max-[600px]:flex-wrap">
          <p className="m-0">© {new Date().getFullYear()} • Vijay Saiwal</p>
          <nav className="flex items-center gap-2" aria-label="Social links">
            {socialLinks.map(({ label, href }, index) => (
              <span className="flex items-center gap-2" key={label}>
                {index > 0 && <span className="text-[#71717a]" aria-hidden="true">/</span>}
                <a className="rounded-sm no-underline hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" href={href} target="_blank" rel="noopener noreferrer">{label}</a>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
