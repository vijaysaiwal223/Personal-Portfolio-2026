import Image from "next/image";
import localFont from "next/font/local";
import Showreel from "./Showreel";
import { linkedIn } from "./SiteNav";
import styles from "./home.module.css";

const circular = localFont({
  src: [
    { path: "../public/font/CircularStd-Book.otf", weight: "400" },
    { path: "../public/font/CircularStd-Medium.otf", weight: "500" },
    { path: "../public/font/CircularStd-Bold.otf", weight: "700" },
  ],
  variable: "--font-circular",
  display: "swap",
});

const assets = "/assets/portfolio";
const experience = [
  {
    company: "Sketchnote", logo: "sketchnote.png", role: "Product Designer",
    description: "Designed project management, social planner, and social listening products from scratch, contributing to product strategy and user research.",
    dates: "2023 - Present",
  },
  {
    company: "Procreator", logo: "procreator.png", role: "Associate Senior Designer",
    description: "Worked on crypto apps like ZebPay and helped build and scale a design system.",
    dates: "2023",
  },
  {
    company: "Zazzy", logo: "zazzy.png", role: "UI/UX Designer",
    description: "Designed multiple SaaS products across fintech and B2C, focusing on simple and scalable user experiences.",
    dates: "2022 - 2023",
  },
];

export default function Home() {
  return (
    <main className={`${styles.home} ${circular.variable}`}>
      <header className={styles.header} id="top">
        <div className={styles.profile}>
          <div className={styles.avatar}>
            <Image src={`${assets}/profile.png`} alt="Vijay Saiwal" width={106} height={106} preload sizes="106px" />
          </div>
          <div className={styles.identity}>
            <div className={styles.name}>
              <span>Vijay Saiwal</span>
              <Image src={`${assets}/verified.svg`} alt="Verified" width={16} height={16} />
            </div>
            <span className={styles.availability}>Available for work</span>
          </div>
        </div>

        <div className={styles.introduction}>
          <div className={styles.introCopy}>
            <h1>Designer &amp; Builder.<br />Curious about how things work and why they matter.</h1>
            <p>Hey, I’m Vijay Saiwal 👋🏻 A product designer with 4+ years of SaaS experience, passionate about crafting smooth user journeys, clean UI, and meaningful product experiences.</p>
            <div className={styles.actions}>
              <a className={`${styles.button} ${styles.primaryButton}`} href={linkedIn} target="_blank" rel="noreferrer">
                <Image src={`${assets}/linkedin.svg`} alt="" width={16} height={16} />
                Connect on Linkedin
              </a>
              <a className={`${styles.button} ${styles.secondaryButton}`} href="/vijay-saiwal-resume.pdf" target="_blank" rel="noreferrer">
                Check out my resume
              </a>
            </div>
          </div>

          <aside className={styles.updates} aria-label="Current and previous work">
            <div className={styles.updateGroup}>
              <h2>Now</h2>
              <ul>
                <li><span>🧑🏻‍💻 Product Designer at</span> <span className={styles.company}><Image src={`${assets}/sketchnote.png`} alt="" width={20} height={20} />Sketchnote</span></li>
                <li><span>🤝 Freelancing</span> <span className={styles.darkText}>with startups</span></li>
                <li><span>⚡️ Exploring</span> <span className={styles.darkText}>Claude &amp; Figma Make</span></li>
              </ul>
            </div>
            <div className={styles.updateGroup}>
              <h2>Previously</h2>
              <div className={styles.previous}>
                <span>🏢 Sr. Associate Designer at</span>
                <span className={styles.company}><Image src={`${assets}/procreator.png`} alt="" width={20} height={20} />Procreator</span>
              </div>
            </div>
          </aside>
        </div>

        <div className={styles.contact}>
          <p>If you’re unsure where your project fits, want to think beyond the obvious, or explore something new, we’re always open to a conversation.</p>
          <div className={styles.contactActions}>
            <span className={styles.poweredBy}>Powered by <Image src={`${assets}/cal-logo.svg`} alt="Cal.com" width={38} height={8} /></span>
            <a className={styles.chatButton} href="https://cal.com/vijay-saiwal/30min" target="_blank" rel="noreferrer">
              Chat with us <Image src={`${assets}/chat-arrow.svg`} alt="" width={12} height={12} />
            </a>
          </div>
        </div>
      </header>

      <Showreel />

      <section className={styles.about} aria-labelledby="background-title">
        <div className={styles.aboutCopy}>
          <div className={styles.background}>
            <h2 className={`${styles.tag} ${styles.blueTag}`} id="background-title"><Image src={`${assets}/background.svg`} alt="" width={20} height={20} />Background</h2>
            <p className={styles.motto}>“do the work and trust the process”</p>
            <p>Since I was a kid, I loved making stuff. I enjoyed bringing my ideas to life. I began with creating posters for university events and soon got interested in designing websites and products.</p>
            <p>I spent the most of my time on improving my design skills and sharing my work online. I also had the chance to take on some freelance projects from connections I made during my college days.</p>
          </div>
          <div className={styles.principles}>
            <h2 className={`${styles.tag} ${styles.purpleTag}`}><Image src={`${assets}/principles.svg`} alt="" width={20} height={20} />Principles</h2>
            <ul>
              <li>Focus on improving your technique, outcomes will follow.</li>
              <li>Just showing up every day can change your life.</li>
              <li>There is no such thing as a bad decision.</li>
              <li>There&apos;s no meaning to life. Find what gives you joy and do more of it.</li>
            </ul>
          </div>
          <div className={styles.featuredBadge} role="img" aria-label="Featured on Wall of Portfolios" />
        </div>
        <div className={styles.collage} aria-label="A little of life inside and outside design">
          <Image className={styles.gymPhoto} src={`${assets}/collage-gym.png`} alt="Vijay at the gym. Small reps, big progress." width={180} height={207} sizes="180px" />
          <Image className={styles.outdoorsPhoto} src={`${assets}/collage-outdoors.png`} alt="Vijay exploring outdoors. Living a little outside the frame." width={180} height={207} sizes="180px" />
          <Image className={styles.designPhoto} src={`${assets}/collage-design.png`} alt="Vijay at his desk. Building ideas, one screen at a time." width={180} height={207} sizes="180px" />
        </div>
      </section>

      <section className={styles.experience} aria-labelledby="experience-title">
        <div className={styles.sectionHeading}>
          <h2 id="experience-title"><Image src="/assets/experience.svg" alt="" width={24} height={24} />Experience</h2>
          <span className={styles.headingLine} aria-hidden="true" />
        </div>
        {experience.map((job) => (
          <article className={styles.job} key={job.company}>
            <div className={styles.employer}><Image src={`${assets}/${job.logo}`} alt="" width={24} height={24} /><span>{job.company}</span></div>
            <div className={styles.jobDescription}><h3>{job.role}</h3><p>{job.description}</p></div>
            <p className={styles.dates}>{job.dates}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
