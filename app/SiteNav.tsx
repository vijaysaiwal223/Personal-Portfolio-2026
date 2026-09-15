import Image from "next/image";
import Link from "next/link";

export const linkedIn = "https://www.linkedin.com/in/vijay-saiwal/";

export default function SiteNav() {
  return (
    <nav className="nav" aria-label="Primary navigation">
      <Link className="wordmark" href="/" aria-label="Vijay Saiwal home">vijay saiwal</Link>
      <div className="nav-actions">
        <a className="nav-linkedin" href={linkedIn} target="_blank" rel="noreferrer">
          <span>Connect on LinkedIn</span>
          <span className="nav-linkedin-icon"><Image src="/assets/linkedin-nav.png" alt="" fill sizes="32px" /></span>
        </a>
        <a className="contact-button" href={linkedIn} target="_blank" rel="noreferrer">Get in touch</a>
      </div>
    </nav>
  );
}
